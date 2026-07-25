import React, { useState, useEffect } from "react";
import { ProductLead, TrackingEvent } from "../types";
import { Download, Trash2, Search, Filter, AlertTriangle, ArrowLeft, RefreshCw, Activity, ShieldAlert, CheckCircle } from "lucide-react";

interface AdminDashboardProps {
  onBackToPage: () => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ onBackToPage }) => {
  const [leads, setLeads] = useState<ProductLead[]>([]);
  const [events, setEvents] = useState<TrackingEvent[]>([]);
  const [activeTab, setActiveTab] = useState<"leads" | "events">("leads");

  const [search, setSearch] = useState("");
  const [filterRole, setFilterRole] = useState("ALL");
  const [filterBusiness, setFilterBusiness] = useState("ALL");
  const [filterParticipation, setFilterParticipation] = useState("ALL");

  const loadData = () => {
    try {
      const storedLeads = localStorage.getItem("ydvn_product_leads");
      if (storedLeads) setLeads(JSON.parse(storedLeads));

      const storedEvents = localStorage.getItem("ydvn_events");
      if (storedEvents) setEvents(JSON.parse(storedEvents));
    } catch (err) {
      console.error("Failed to load admin data", err);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleUpdateStatus = (id: string, newStatus: ProductLead["status"]) => {
    const updated = leads.map((l) => (l.id === id ? { ...l, status: newStatus } : l));
    setLeads(updated);
    localStorage.setItem("ydvn_product_leads", JSON.stringify(updated));
  };

  const handleDeleteLead = (id: string) => {
    if (window.confirm("Anh/chị có chắc chắn muốn xóa dữ liệu lead này không?")) {
      const updated = leads.filter((l) => l.id !== id);
      setLeads(updated);
      localStorage.setItem("ydvn_product_leads", JSON.stringify(updated));
    }
  };

  const handleClearAll = () => {
    if (window.confirm("CẢNH BÁO: Anh/chị có chắc chắn muốn XÓA TOÀN BỘ dữ liệu demo trong localStorage không?")) {
      localStorage.removeItem("ydvn_product_leads");
      localStorage.removeItem("ydvn_events");
      setLeads([]);
      setEvents([]);
    }
  };

  const handleExportCsv = () => {
    if (leads.length === 0) {
      alert("Không có dữ liệu để export!");
      return;
    }

    const headers = ["STT", "Mã Lead", "Ngày tạo", "Họ tên", "Số điện thoại", "Email", "Vai trò", "Mô hình", "Hình thức tham gia", "Trạng thái"];
    const rows = leads.map((l, index) => [
      index + 1,
      l.id,
      new Date(l.createdAt).toLocaleString("vi-VN"),
      `"${l.fullName}"`,
      `"${l.phone}"`,
      `"${l.email}"`,
      `"${l.role}"`,
      `"${l.businessType}"`,
      `"${l.participationPreference}"`,
      l.status
    ]);

    const csvContent = "data:text/csv;charset=utf-8,\uFEFF" + [headers.join(","), ...rows.map((e) => e.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `ydvn_leads_export_${new Date().toISOString().slice(0,10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredLeads = leads.filter((l) => {
    const matchesSearch =
      l.fullName.toLowerCase().includes(search.toLowerCase()) ||
      l.phone.includes(search) ||
      l.email.toLowerCase().includes(search.toLowerCase());

    const matchesRole = filterRole === "ALL" || l.role === filterRole;
    const matchesBusiness = filterBusiness === "ALL" || l.businessType === filterBusiness;
    const matchesParticipation = filterParticipation === "ALL" || l.participationPreference === filterParticipation;

    return matchesSearch && matchesRole && matchesBusiness && matchesParticipation;
  });

  return (
    <div className="min-h-screen bg-slate-950 text-white p-4 sm:p-8 font-sans">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Warning Banner */}
        <div className="bg-amber-500/20 border-2 border-amber-400 text-amber-200 p-4 rounded-2xl flex items-start gap-3">
          <AlertTriangle className="w-6 h-6 text-amber-400 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm">
            <span className="font-extrabold uppercase tracking-wider block">CẢNH BÁO MÔ PHỎNG DEMO:</span>
            <span>Bản demo sử dụng localStorage. Không dùng để lưu dữ liệu khách thật khi đưa lên Production.</span>
          </div>
        </div>

        {/* Top Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
          <div>
            <div className="flex items-center gap-3">
              <button
                onClick={onBackToPage}
                className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl transition-all cursor-pointer border border-slate-700"
                title="Quay lại Landing Page"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <h1 className="text-xl sm:text-2xl font-black text-white">
                YDVN.VN — QUẢN TRỊ LEADS DEMO (#admin)
              </h1>
            </div>
            <p className="text-xs text-slate-400 mt-1 pl-12">
              Quản lý danh sách đăng ký & Sự kiện tương tác trên hệ thống
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={loadData}
              className="px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold rounded-xl border border-slate-700 flex items-center gap-1.5 cursor-pointer"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Làm mới</span>
            </button>

            <button
              onClick={handleExportCsv}
              className="px-4 py-2 bg-[#0B9693] hover:bg-[#097b78] text-white text-xs font-bold rounded-xl shadow flex items-center gap-1.5 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Export CSV ({leads.length})</span>
            </button>

            <button
              onClick={handleClearAll}
              className="px-3 py-2 bg-red-950 hover:bg-red-900 text-red-300 text-xs font-bold rounded-xl border border-red-800 flex items-center gap-1.5 cursor-pointer"
            >
              <Trash2 className="w-4 h-4" />
              <span>Xóa hết</span>
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
          <button
            onClick={() => setActiveTab("leads")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === "leads"
                ? "bg-[#FF4F00] text-white"
                : "bg-slate-900 text-slate-400 hover:text-white"
            }`}
          >
            Danh sách Lead ({leads.length})
          </button>
          <button
            onClick={() => setActiveTab("events")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === "events"
                ? "bg-[#0B9693] text-white"
                : "bg-slate-900 text-slate-400 hover:text-white"
            }`}
          >
            <Activity className="w-4 h-4" />
            <span>Event Tracking Log ({events.length})</span>
          </button>
        </div>

        {activeTab === "leads" ? (
          <div className="space-y-4">
            
            {/* Filters bar */}
            <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
              
              {/* Search */}
              <div className="relative">
                <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Tìm tên, SĐT, Email..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-[#0B9693]"
                />
              </div>

              {/* Role filter */}
              <select
                value={filterRole}
                onChange={(e) => setFilterRole(e.target.value)}
                className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-[#0B9693]"
              >
                <option value="ALL">-- Tất cả Vai Trò --</option>
                <option value="Chủ cơ sở">Chủ cơ sở</option>
                <option value="Bác sĩ">Bác sĩ</option>
                <option value="Dược sĩ">Dược sĩ</option>
                <option value="Quản lý">Quản lý</option>
                <option value="Nhân viên Marketing">Nhân viên Marketing</option>
                <option value="Khác">Khác</option>
              </select>

              {/* Business filter */}
              <select
                value={filterBusiness}
                onChange={(e) => setFilterBusiness(e.target.value)}
                className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-[#0B9693]"
              >
                <option value="ALL">-- Tất cả Mô Hình --</option>
                <option value="Phòng khám">Phòng khám</option>
                <option value="Bệnh viện">Bệnh viện</option>
                <option value="Nhà thuốc">Nhà thuốc</option>
                <option value="Spa/chăm sóc sức khỏe">Spa / Chăm sóc sức khỏe</option>
                <option value="Cửa hàng vật tư hoặc thiết bị y tế">Cửa hàng vật tư / Thiết bị y tế</option>
                <option value="Thương hiệu chuyên gia">Thương hiệu chuyên gia</option>
                <option value="Khác">Khác</option>
              </select>

              {/* Participation filter */}
              <select
                value={filterParticipation}
                onChange={(e) => setFilterParticipation(e.target.value)}
                className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-[#0B9693]"
              >
                <option value="ALL">-- Tất cả Hình Thức --</option>
                <option value="Workshop Zoom">Workshop Zoom</option>
                <option value="Quan tâm offline tại TP.HCM">Quan tâm offline TP.HCM</option>
                <option value="Chưa rõ, cần tư vấn">Chưa rõ, cần tư vấn</option>
              </select>

            </div>

            {/* Leads Table */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-x-auto shadow-xl">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-950 text-slate-400 font-bold uppercase border-b border-slate-800">
                  <tr>
                    <th className="p-3.5">STT</th>
                    <th className="p-3.5">Thời gian</th>
                    <th className="p-3.5">Họ & Tên</th>
                    <th className="p-3.5">SĐT / Zalo</th>
                    <th className="p-3.5">Email</th>
                    <th className="p-3.5">Vai trò</th>
                    <th className="p-3.5">Mô hình</th>
                    <th className="p-3.5">Hình thức</th>
                    <th className="p-3.5">Trạng thái</th>
                    <th className="p-3.5 text-center">Thao tác</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/80">
                  {filteredLeads.length === 0 ? (
                    <tr>
                      <td colSpan={10} className="p-8 text-center text-slate-500 italic">
                        Chưa có dữ liệu lead nào phù hợp.
                      </td>
                    </tr>
                  ) : (
                    filteredLeads.map((lead, idx) => (
                      <tr key={lead.id} className="hover:bg-slate-800/50 transition-colors">
                        <td className="p-3.5 font-bold text-amber-400">#{idx + 1}</td>
                        <td className="p-3.5 text-slate-400 whitespace-nowrap">
                          {new Date(lead.createdAt).toLocaleString("vi-VN", {
                            day: "2-digit",
                            month: "2-digit",
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </td>
                        <td className="p-3.5 font-black text-white">{lead.fullName}</td>
                        <td className="p-3.5 font-bold text-teal-300">{lead.phone}</td>
                        <td className="p-3.5 text-slate-300">{lead.email}</td>
                        <td className="p-3.5">
                          <span className="bg-slate-800 text-slate-300 px-2 py-1 rounded font-semibold border border-slate-700">
                            {lead.role}
                          </span>
                        </td>
                        <td className="p-3.5 text-slate-300">{lead.businessType}</td>
                        <td className="p-3.5">
                          <span className="bg-amber-400/10 text-amber-300 px-2 py-0.5 rounded border border-amber-400/20 font-bold">
                            {lead.participationPreference}
                          </span>
                        </td>
                        <td className="p-3.5">
                          <select
                            value={lead.status}
                            onChange={(e) => handleUpdateStatus(lead.id, e.target.value as ProductLead["status"])}
                            className="bg-slate-950 border border-slate-700 text-white rounded px-2 py-1 text-xs font-bold focus:outline-none focus:border-[#0B9693]"
                          >
                            <option value="new_lead">Mới</option>
                            <option value="contacted">Đã liên hệ</option>
                            <option value="paid">Đã thanh toán 799K</option>
                            <option value="completed">Đã bàn giao</option>
                            <option value="cancelled">Hủy</option>
                          </select>
                        </td>
                        <td className="p-3.5 text-center">
                          <button
                            onClick={() => handleDeleteLead(lead.id)}
                            className="p-1.5 text-red-400 hover:text-red-200 hover:bg-red-950 rounded transition-colors cursor-pointer"
                            title="Xóa lead"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

          </div>
        ) : (
          /* Events log tab */
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 shadow-xl space-y-3">
            <h3 className="text-sm font-bold text-teal-300">Nhật ký sự kiện tương tác (LocalStorage ydvn_events):</h3>
            <div className="max-h-[500px] overflow-y-auto space-y-2 text-xs font-mono">
              {events.length === 0 ? (
                <p className="text-slate-500 italic p-4 text-center">Chưa có sự kiện tracking nào.</p>
              ) : (
                events.map((e) => (
                  <div key={e.id} className="bg-slate-950 p-3 rounded-xl border border-slate-800 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className="text-amber-400 font-bold">[{new Date(e.timestamp).toLocaleTimeString()}]</span>
                      <span className="bg-teal-950 text-teal-300 px-2 py-0.5 rounded border border-teal-800 font-bold">
                        {e.eventName}
                      </span>
                      <span className="text-slate-300">{e.details}</span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
