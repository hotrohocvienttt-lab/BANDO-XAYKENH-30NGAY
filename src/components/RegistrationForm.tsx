import React, { useState, useRef, useEffect } from "react";
import {
  User,
  Phone,
  Mail,
  Building2,
  UserCheck,
  ShieldCheck,
  Loader2,
  Sparkles,
  QrCode,
  Copy,
  Check,
  ChevronDown,
  ChevronUp,
  Clock,
  Heart,
  CheckCircle2,
  MessageCircle,
  Lock,
  ArrowRight
} from "lucide-react";
import { ProductLead } from "../types";
import { trackEvent } from "../utils/tracking";
import { CONFIG } from "../config";

interface RegistrationFormProps {
  defaultParticipation?: string;
}

export const RegistrationForm: React.FC<RegistrationFormProps> = ({ defaultParticipation }) => {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("Chủ cơ sở");
  const [businessType, setBusinessType] = useState("Phòng khám");
  const [participationPreference, setParticipationPreference] = useState(
    defaultParticipation || "Workshop Zoom"
  );
  const [consentAgreed, setConsentAgreed] = useState(true);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showOrderSummary, setShowOrderSummary] = useState(false);
  
  // Copy feedback state
  const [copiedField, setCopiedField] = useState<string | null>(null);

  // Field refs for auto-focusing on first error
  const fullNameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  const COMPANY_BANK_INFO = {
    bankName: "MB Bank (Ngân hàng Quân Đội)",
    bankCode: "MB",
    accountNumber: "345118637",
    accountHolder: "CTY TNHH DT KINH DOANH YDVN",
    amount: 799000,
    amountFormatted: "799.000 đ",
    originalPriceFormatted: "39.000.000 đ",
    hotlineZalo: "0345.11.86.37",
    zaloUrl: "https://zalo.me/0345118637"
  };

  useEffect(() => {
    if (defaultParticipation) {
      setParticipationPreference(defaultParticipation);
    }
  }, [defaultParticipation]);

  const isValidVnPhone = (inputPhone: string) => {
    const cleaned = inputPhone.replace(/[\s.-]/g, "");
    return /^(03|05|07|08|09)\d{8}$/.test(cleaned);
  };

  const isValidEmail = (inputEmail: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputEmail.trim());
  };

  const handleFormStart = () => {
    trackEvent("form_started", "User focused on checkout registration form");
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!fullName.trim() || fullName.trim().length < 2) {
      newErrors.fullName = "Vui lòng nhập họ tên tối thiểu 2 ký tự.";
    }

    const cleanedPhone = phone.replace(/[\s.-]/g, "");
    if (!cleanedPhone) {
      newErrors.phone = "Vui lòng nhập số điện thoại hoặc Zalo.";
    } else if (!isValidVnPhone(cleanedPhone)) {
      newErrors.phone = "Số điện thoại không hợp lệ (10 chữ số, đầu số 03/05/07/08/09).";
    }

    if (!email.trim()) {
      newErrors.email = "Vui lòng nhập email chính.";
    } else if (!isValidEmail(email)) {
      newErrors.email = "Định dạng email chưa hợp lệ (ví dụ: name@example.com).";
    }

    if (!consentAgreed) {
      newErrors.consent = "Vui lòng tick đồng ý để YDVN liên hệ hỗ trợ.";
    }

    setErrors(newErrors);

    if (newErrors.fullName && fullNameRef.current) {
      fullNameRef.current.focus();
    } else if (newErrors.phone && phoneRef.current) {
      phoneRef.current.focus();
    } else if (newErrors.email && emailRef.current) {
      emailRef.current.focus();
    }

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);
    const cleanedPhone = phone.replace(/[\s.-]/g, "");

    const newLead: ProductLead = {
      id: "lead_" + Date.now() + "_" + Math.random().toString(36).substr(2, 4),
      createdAt: new Date().toISOString(),
      fullName: fullName.trim(),
      phone: cleanedPhone,
      email: email.trim(),
      role,
      businessType,
      participationPreference,
      consentAgreed,
      status: "new_lead",
    };

    try {
      const existingStr = localStorage.getItem("ydvn_product_leads");
      const existingLeads: ProductLead[] = existingStr ? JSON.parse(existingStr) : [];
      existingLeads.unshift(newLead);
      localStorage.setItem("ydvn_product_leads", JSON.stringify(existingLeads));
    } catch (err) {
      console.error("Failed to save lead to localStorage", err);
    }

    try {
      await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...newLead,
          formType: "Đăng ký mua Bản Đồ Xây Kênh 799K",
        }),
      });
    } catch (err) {
      console.warn("Backend API lead sync failed, fallback to client state", err);
    }

    // Gửi trực tiếp từ trình duyệt sang Google Sheet qua Google Apps Script Web App nếu có URL
    if (CONFIG.googleSheetScriptUrl && CONFIG.googleSheetScriptUrl.startsWith("http")) {
      try {
        await fetch(CONFIG.googleSheetScriptUrl, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "text/plain" },
          body: JSON.stringify({
            formType: "Đăng ký mua Bản Đồ Xây Kênh 799K",
            fullName: fullName.trim(),
            phone: cleanedPhone,
            email: email.trim(),
            role,
            businessType,
            participationPreference,
            createdAt: new Date().toLocaleString("vi-VN", { timeZone: "Asia/Ho_Chi_Minh" }),
          }),
        });
      } catch (err) {
        console.warn("Google Sheet sync error:", err);
      }
    }

    trackEvent("form_submitted", `Lead: ${fullName} - ${cleanedPhone}`);

    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
      // Scroll to top of payment QR box
      const el = document.getElementById("dang-ky");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 1000);
  };

  const handleCopy = (text: string, fieldKey: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldKey);
    setTimeout(() => {
      setCopiedField(null);
    }, 2000);
  };

  const cleanedPhoneStr = phone.replace(/[\s.-]/g, "") || "SDT";
  const cleanedNameStr = fullName.trim() || "Ho va ten";
  const transferContent = `${cleanedPhoneStr} - ${cleanedNameStr} - ban do xay kenh`;
  const qrUrl = `https://img.vietqr.io/image/MB-${COMPANY_BANK_INFO.accountNumber}-compact2.png?amount=${COMPANY_BANK_INFO.amount}&addInfo=${encodeURIComponent(transferContent)}&accountName=${encodeURIComponent(COMPANY_BANK_INFO.accountHolder)}`;

  return (
    <section id="dang-ky" className="py-12 md:py-20 bg-[#F8FAFC] border-b border-slate-200/80">
      
      {/* Top Support Hotline Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 flex justify-end">
        <div className="text-xs sm:text-sm font-bold text-slate-600 bg-white px-3.5 py-1.5 rounded-full border border-slate-200 shadow-2xs flex items-center gap-1.5">
          <MessageCircle className="w-4 h-4 text-[#0B9693]" />
          <span>Cần Hỗ Trợ? Nhắn Zalo: <strong>{COMPANY_BANK_INFO.hotlineZalo}</strong></span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Title Header */}
        <div className="text-center space-y-2.5 mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#FF4F00] uppercase tracking-tight">
            ĐĂNG KÝ NGAY
          </h2>
          <div className="inline-block relative">
            <h3 className="text-lg sm:text-2xl font-black text-[#0B2D46] tracking-tight uppercase">
              BẢN ĐỒ "XÂY KÊNH Y TẾ 30 NGÀY THỰC TẾ CHIẾN CÙNG AI"
            </h3>
            <div className="h-1 bg-[#FF4F00] rounded-full w-24 mx-auto mt-2"></div>
          </div>
        </div>

        {/* ORDER SUMMARY COLLAPSIBLE ON MOBILE */}
        <div className="lg:hidden mb-6 bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
          <button
            type="button"
            onClick={() => setShowOrderSummary(!showOrderSummary)}
            className="w-full px-4 py-3 bg-[#FFF1E6]/60 flex items-center justify-between text-left cursor-pointer"
          >
            <div className="flex items-center gap-2 text-xs font-bold text-[#0B2D46]">
              <span>🛒 Thông tin đơn hàng</span>
              {showOrderSummary ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </div>
            <span className="text-sm font-black text-[#FF4F00]">{COMPANY_BANK_INFO.amountFormatted}</span>
          </button>
          
          {showOrderSummary && (
            <div className="p-4 border-t border-slate-200 text-xs space-y-2 bg-white">
              <div className="flex justify-between items-center font-bold text-slate-800">
                <span>Bản đồ xây kênh Y Tế 30 ngày cùng AI</span>
                <span>{COMPANY_BANK_INFO.amountFormatted}</span>
              </div>
              <p className="text-slate-500">Bao gồm 50+ Mẫu Prompt AI, Kho 100+ công thức Hook, Workbook, Lịch biên tập & Nhóm hỗ trợ Zalo 24/7.</p>
              <div className="pt-2 flex justify-between items-center text-slate-500 line-through">
                <span>Giá gốc:</span>
                <span>{COMPANY_BANK_INFO.originalPriceFormatted}</span>
              </div>
              <div className="flex justify-between items-center font-extrabold text-[#FF4F00] text-sm pt-1 border-t border-slate-100">
                <span>Tổng thanh toán:</span>
                <span>{COMPANY_BANK_INFO.amountFormatted}</span>
              </div>
            </div>
          )}
        </div>

        {/* 2-COLUMN MAIN LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: FORM OR PAYMENT QR (7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-200/90 shadow-xl space-y-8">
            
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* 1. Customer Info */}
                <div className="space-y-4">
                  <h4 className="text-base sm:text-lg font-black text-[#0B2D46] border-b border-slate-200 pb-2.5 flex items-center gap-2">
                    <User className="w-5 h-5 text-[#FF4F00]" />
                    <span>Thông tin khách hàng</span>
                  </h4>

                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-700">
                      Họ Tên <span className="text-red-500">*</span>
                    </label>
                    <input
                      ref={fullNameRef}
                      type="text"
                      placeholder="Nguyễn Văn A"
                      value={fullName}
                      onFocus={handleFormStart}
                      onChange={(e) => {
                        setFullName(e.target.value);
                        if (errors.fullName) setErrors({ ...errors, fullName: "" });
                      }}
                      className={`w-full px-4 py-3 bg-slate-50 rounded-xl border text-sm font-semibold text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none transition-all ${
                        errors.fullName
                          ? "border-red-500 focus:ring-2 focus:ring-red-200"
                          : "border-slate-300 focus:border-[#0B9693] focus:ring-2 focus:ring-[#0B9693]/20"
                      }`}
                    />
                    {errors.fullName && <p className="text-xs font-bold text-red-500 pl-1">{errors.fullName}</p>}
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-700">
                      Email thường dùng <span className="text-red-500">*</span>
                    </label>
                    <input
                      ref={emailRef}
                      type="email"
                      placeholder="bs.nguyenvana@gmail.com"
                      value={email}
                      onFocus={handleFormStart}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errors.email) setErrors({ ...errors, email: "" });
                      }}
                      className={`w-full px-4 py-3 bg-slate-50 rounded-xl border text-sm font-semibold text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none transition-all ${
                        errors.email
                          ? "border-red-500 focus:ring-2 focus:ring-red-200"
                          : "border-slate-300 focus:border-[#0B9693] focus:ring-2 focus:ring-[#0B9693]/20"
                      }`}
                    />
                    {errors.email && <p className="text-xs font-bold text-red-500 pl-1">{errors.email}</p>}
                  </div>

                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-700">
                      Số điện thoại / Zalo <span className="text-red-500">*</span>
                    </label>
                    <input
                      ref={phoneRef}
                      type="tel"
                      placeholder="0912345678"
                      value={phone}
                      onFocus={handleFormStart}
                      onChange={(e) => {
                        setPhone(e.target.value);
                        if (errors.phone) setErrors({ ...errors, phone: "" });
                      }}
                      className={`w-full px-4 py-3 bg-slate-50 rounded-xl border text-sm font-semibold text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none transition-all ${
                        errors.phone
                          ? "border-red-500 focus:ring-2 focus:ring-red-200"
                          : "border-slate-300 focus:border-[#0B9693] focus:ring-2 focus:ring-[#0B9693]/20"
                      }`}
                    />
                    {errors.phone && <p className="text-xs font-bold text-red-500 pl-1">{errors.phone}</p>}
                  </div>

                  {/* Role & Facility */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-slate-700">Vai trò công việc</label>
                      <select
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        className="w-full px-3.5 py-3 bg-slate-50 rounded-xl border border-slate-300 text-xs font-semibold text-slate-900 focus:bg-white focus:outline-none focus:border-[#0B9693]"
                      >
                        <option value="Chủ cơ sở">Chủ cơ sở y tế</option>
                        <option value="Bác sĩ">Bác sĩ</option>
                        <option value="Dược sĩ">Dược sĩ</option>
                        <option value="Trưởng phòng Marketing">Trưởng phòng Marketing</option>
                        <option value="Quản lý / Khác">Quản lý / Khác</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-slate-700">Mô hình hoạt động</label>
                      <select
                        value={businessType}
                        onChange={(e) => setBusinessType(e.target.value)}
                        className="w-full px-3.5 py-3 bg-slate-50 rounded-xl border border-slate-300 text-xs font-semibold text-slate-900 focus:bg-white focus:outline-none focus:border-[#0B9693]"
                      >
                        <option value="Phòng khám">Phòng khám / Y khoa</option>
                        <option value="Bệnh viện">Bệnh viện</option>
                        <option value="Nhà thuốc">Nhà thuốc</option>
                        <option value="Spa/Chăm sóc sức khỏe">Spa / Chăm sóc sức khỏe</option>
                        <option value="Thương hiệu cá nhân">Thương hiệu cá nhân chuyên gia</option>
                      </select>
                    </div>
                  </div>

                  {/* Participation Preference */}
                  <div className="space-y-2 pt-1">
                    <label className="block text-xs font-extrabold text-[#0B2D46]">
                      Hình thức hỗ trợ sau khi mua tài liệu <span className="text-red-500">*</span>
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      <button
                        type="button"
                        onClick={() => setParticipationPreference("Workshop Zoom")}
                        className={`p-3 rounded-xl border-2 text-left transition-all flex items-start gap-2.5 cursor-pointer ${
                          participationPreference === "Workshop Zoom"
                            ? "border-[#0B9693] bg-[#0B9693]/10 text-[#0B2D46] shadow-sm"
                            : "border-slate-200 bg-slate-50 text-slate-600 hover:border-slate-300"
                        }`}
                      >
                        <input
                          type="radio"
                          name="participation"
                          checked={participationPreference === "Workshop Zoom"}
                          onChange={() => setParticipationPreference("Workshop Zoom")}
                          className="mt-0.5 text-[#0B9693] focus:ring-[#0B9693]"
                        />
                        <div>
                          <div className="font-black text-xs text-[#0B2D46]">Zoom Online Trực Tuyến</div>
                          <div className="text-[11px] text-slate-500 mt-0.5">Học & hỏi đáp từ xa linh hoạt</div>
                        </div>
                      </button>

                      <button
                        type="button"
                        onClick={() => setParticipationPreference("Offline TP.HCM")}
                        className={`p-3 rounded-xl border-2 text-left transition-all flex items-start gap-2.5 cursor-pointer ${
                          participationPreference === "Offline TP.HCM"
                            ? "border-[#FF4F00] bg-orange-50 text-[#0B2D46] shadow-sm"
                            : "border-slate-200 bg-slate-50 text-slate-600 hover:border-slate-300"
                        }`}
                      >
                        <input
                          type="radio"
                          name="participation"
                          checked={participationPreference === "Offline TP.HCM"}
                          onChange={() => setParticipationPreference("Offline TP.HCM")}
                          className="mt-0.5 text-[#FF4F00] focus:ring-[#FF4F00]"
                        />
                        <div>
                          <div className="font-black text-xs text-[#0B2D46] flex items-center gap-1">
                            <span>Offline Tại TP.HCM</span>
                            <span className="bg-[#FF4F00] text-white text-[9px] font-bold px-1.5 py-0.2 rounded">Hot</span>
                          </div>
                          <div className="text-[11px] text-slate-500 mt-0.5">Giao lưu trực tiếp Team YDVN</div>
                        </div>
                      </button>
                    </div>
                  </div>

                </div>

                {/* 2. Payment Options */}
                <div className="space-y-4 pt-2">
                  <h4 className="text-base sm:text-lg font-black text-[#0B2D46] border-b border-slate-200 pb-2.5 flex items-center gap-2">
                    <QrCode className="w-5 h-5 text-[#0B9693]" />
                    <span>Hình thức thanh toán</span>
                  </h4>

                  {/* ONLY Bank Transfer Option as strictly requested */}
                  <div className="border-2 border-[#0B9693] bg-[#0B9693]/5 rounded-2xl p-4 flex items-start gap-3.5 transition-all">
                    <input
                      type="radio"
                      name="payment_method"
                      checked={true}
                      readOnly
                      className="mt-1 w-4 h-4 text-[#0B9693] focus:ring-[#0B9693] cursor-pointer"
                    />
                    <div className="space-y-1 text-left">
                      <div className="flex items-center gap-2">
                        <span className="font-extrabold text-slate-900 text-sm sm:text-base">
                          Chuyển khoản ngân hàng (Quét mã QR)
                        </span>
                        <span className="bg-[#0B9693] text-white text-[10px] font-black px-2 py-0.5 rounded-full uppercase">
                          Khuyên Dùng
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Chuyển khoản qua tài khoản công ty MB Bank. Hệ thống tự động tạo mã VietQR chuẩn xác với cú pháp hỗ trợ kích hoạt nhanh.
                      </p>
                    </div>
                  </div>

                  <p className="text-[11px] text-slate-500 leading-normal pt-1">
                    Thông tin cá nhân của bạn sẽ được sử dụng để xử lý đơn hàng, tăng trải nghiệm sử dụng website, và cho các mục đích cụ thể khác được mô tả trong chính sách riêng tư của YDVN.
                  </p>
                </div>

                {/* Consent */}
                <div className="space-y-1">
                  <label className="flex items-start gap-2.5 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={consentAgreed}
                      onChange={(e) => {
                        setConsentAgreed(e.target.checked);
                        if (errors.consent) setErrors({ ...errors, consent: "" });
                      }}
                      className="mt-0.5 w-4 h-4 text-[#FF4F00] focus:ring-[#FF4F00] border-slate-300 rounded cursor-pointer"
                    />
                    <span className="text-xs font-semibold text-slate-700 leading-snug">
                      Tôi đồng ý để YDVN liên hệ xác nhận đơn hàng và gửi file kích hoạt sản phẩm.
                    </span>
                  </label>
                  {errors.consent && <p className="text-xs font-bold text-red-500 pl-6">{errors.consent}</p>}
                </div>

                {/* Big Submit CTA Button */}
                <div className="pt-2 space-y-3">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#FF4F00] hover:bg-[#E04500] active:scale-[0.99] text-white font-black text-lg sm:text-xl py-4 rounded-2xl shadow-xl shadow-[#FF4F00]/25 transition-all cursor-pointer flex flex-col items-center justify-center gap-0.5"
                  >
                    {loading ? (
                      <div className="flex items-center gap-2 py-1">
                        <Loader2 className="w-6 h-6 animate-spin text-white" />
                        <span>Đang khởi tạo mã thanh toán QR...</span>
                      </div>
                    ) : (
                      <>
                        <div className="flex items-center gap-2">
                          <Sparkles className="w-5 h-5 text-amber-300" />
                          <span>THANH TOÁN - {COMPANY_BANK_INFO.amountFormatted}</span>
                        </div>
                        <span className="text-xs font-bold text-amber-200/90 tracking-wide">
                          (An Toàn & Bảo Mật 100%)
                        </span>
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-slate-600 font-bold">
                    1. Bạn cần xuất hóa đơn thì nhắn tin zalo <strong className="text-[#0B9693]">0345.11.86.37</strong>
                  </p>
                </div>

              </form>
            ) : (
              
              /* PAYMENT VIETQR CONFIRMATION SCREEN (MATCHING IMAGE 3) */
              <div className="space-y-6 text-center animate-in fade-in duration-300">
                
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 text-emerald-800 text-xs sm:text-sm font-bold flex items-center justify-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>Đã ghi nhận thông tin đăng ký của anh/chị <strong>{fullName}</strong>!</span>
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-black text-[#FF4F00] uppercase tracking-wider bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                    BƯỚC CUỐI: THÀNH TOÁN CHUYỂN KHOẢN
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-[#0B2D46] pt-1">
                    Quét Mã VietQR Hoặc Chuyển Khoản Đến STK Công Ty
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Mã QR đã tự động điền đúng số tiền <strong>{COMPANY_BANK_INFO.amountFormatted}</strong> và cú pháp chuyển khoản.
                  </p>
                </div>

                {/* IMAGE 3 EXACT BANK & QR CONTAINER */}
                <div className="bg-slate-50 border-2 border-slate-200 rounded-2xl p-4 sm:p-6 space-y-4 max-w-md mx-auto shadow-md">
                  
                  {/* Account Name Header */}
                  <div className="bg-white p-3.5 rounded-xl border border-slate-200/80 text-left space-y-1 shadow-2xs">
                    <p className="text-xs font-extrabold text-slate-500 uppercase tracking-wider">Tên Tài Khoản Thụ Hưởng</p>
                    <p className="text-sm sm:text-base font-black text-[#0B2D46] tracking-tight">{COMPANY_BANK_INFO.accountHolder}</p>
                    <div className="flex items-center justify-between text-xs pt-1 border-t border-slate-100">
                      <span className="font-bold text-slate-500">Ngân hàng: <strong>{COMPANY_BANK_INFO.bankName}</strong></span>
                      <span className="font-bold text-[#0B9693]">STK: <strong>{COMPANY_BANK_INFO.accountNumber}</strong></span>
                    </div>
                  </div>

                  {/* QR Image Box */}
                  <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col items-center justify-center space-y-3">
                    
                    {/* MB Bank Logo Header inside QR frame */}
                    <div className="flex items-center gap-2 text-xs font-black text-[#1A2B4C] border-b border-slate-100 pb-2 w-full justify-center">
                      <span className="w-3 h-3 rounded-full bg-[#1A2B4C]"></span>
                      <span className="tracking-widest text-sm">MB BANK</span>
                    </div>

                    {/* Dynamic VietQR Image */}
                    <div className="relative group p-1 bg-white rounded-lg">
                      <img
                        src={qrUrl}
                        alt="Mã QR Thanh Toán MB Bank"
                        className="w-56 h-56 sm:w-64 sm:h-64 object-contain rounded-md"
                        onError={(e) => {
                          // Fallback display if network issue
                          e.currentTarget.style.display = "none";
                        }}
                      />
                    </div>

                    <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">
                      VietQR™ | Napas 247
                    </p>
                  </div>

                  {/* COPY INFORMATION FIELDS */}
                  <div className="space-y-2 text-left text-xs pt-1">
                    
                    {/* STK Copy */}
                    <div className="bg-white p-3 rounded-xl border border-slate-200 flex items-center justify-between gap-2">
                      <div>
                        <p className="text-[10px] uppercase font-bold text-slate-400">Số tài khoản MB Bank</p>
                        <p className="font-black text-sm text-slate-900">{COMPANY_BANK_INFO.accountNumber}</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleCopy(COMPANY_BANK_INFO.accountNumber, "stk")}
                        className="px-3 py-1.5 bg-slate-100 hover:bg-[#0B9693] hover:text-white text-slate-700 rounded-lg text-xs font-bold transition-all flex items-center gap-1 cursor-pointer shrink-0"
                      >
                        {copiedField === "stk" ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copiedField === "stk" ? "Đã chép" : "Sao chép"}</span>
                      </button>
                    </div>

                    {/* Amount Copy */}
                    <div className="bg-white p-3 rounded-xl border border-slate-200 flex items-center justify-between gap-2">
                      <div>
                        <p className="text-[10px] uppercase font-bold text-slate-400">Số tiền thanh toán</p>
                        <p className="font-black text-sm text-[#FF4F00]">{COMPANY_BANK_INFO.amountFormatted}</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleCopy("799000", "amount")}
                        className="px-3 py-1.5 bg-slate-100 hover:bg-[#0B9693] hover:text-white text-slate-700 rounded-lg text-xs font-bold transition-all flex items-center gap-1 cursor-pointer shrink-0"
                      >
                        {copiedField === "amount" ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copiedField === "amount" ? "Đã chép" : "Sao chép"}</span>
                      </button>
                    </div>

                    {/* Transfer Memo Copy */}
                    <div className="bg-white p-3 rounded-xl border border-slate-200 flex items-center justify-between gap-2">
                      <div>
                        <p className="text-[10px] uppercase font-bold text-slate-400">Nội dung chuyển khoản</p>
                        <p className="font-black text-xs sm:text-sm text-[#0B2D46]">{transferContent}</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleCopy(transferContent, "memo")}
                        className="px-3 py-1.5 bg-slate-100 hover:bg-[#0B9693] hover:text-white text-slate-700 rounded-lg text-xs font-bold transition-all flex items-center gap-1 cursor-pointer shrink-0"
                      >
                        {copiedField === "memo" ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copiedField === "memo" ? "Đã chép" : "Sao chép"}</span>
                      </button>
                    </div>

                  </div>

                </div>

                {/* Action Buttons */}
                <div className="pt-2 max-w-md mx-auto">
                  <a
                    href={COMPANY_BANK_INFO.zaloUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#0B9693] hover:bg-[#097b78] text-white font-extrabold text-xs sm:text-sm py-3.5 px-4 rounded-2xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer text-center"
                  >
                    <MessageCircle className="w-5 h-5 shrink-0" />
                    <span>BẠN VUI LÒNG GỬI BILL CHUYỂN KHOẢN VÀO ZALO 0345.11.86.37 ĐỂ ĐƯỢC KÍCH HOẠT</span>
                  </a>
                </div>

              </div>

            )}

          </div>

          {/* RIGHT COLUMN: SIDEBAR BENEFITS & SOCIAL PROOF (5 Cols) */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Product Offer Card */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-lg space-y-4">
              
              {/* Product Cover Badge Graphic */}
              <div className="bg-gradient-to-br from-[#0B2D46] via-[#124268] to-[#0B2D46] rounded-2xl p-5 text-white text-center space-y-2 relative overflow-hidden shadow-md">
                <div className="absolute top-2 right-2 bg-[#FF4F00] text-white text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full">
                  HOT OFFER
                </div>
                <div className="w-10 h-10 mx-auto rounded-xl bg-white/10 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-amber-300" />
                </div>
                <h4 className="font-black text-lg leading-snug tracking-tight">
                  BẢN ĐỒ XÂY KÊNH Y TẾ 30 NGÀY THỰC TẾ CHIẾN CÙNG AI
                </h4>
                <p className="text-xs text-amber-300 font-semibold">Dành riêng cho Cơ sở Y tế, Bác sĩ & Marketer</p>
              </div>

              {/* Pricing breakdown */}
              <div className="space-y-1 text-center pt-1">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Giá gốc <span className="line-through text-slate-400">{COMPANY_BANK_INFO.originalPriceFormatted}</span>
                </p>
                <p className="text-2xl sm:text-3xl font-black text-[#FF4F00] tracking-tight">
                  Ưu đãi còn {COMPANY_BANK_INFO.amountFormatted}
                </p>
                <div className="inline-block bg-amber-50 text-[#FF4F00] font-black text-xs px-3 py-1 rounded-full border border-amber-200">
                  👉 Giảm đến 98% hôm nay!
                </div>
              </div>

              {/* Bullet Features List */}
              <div className="space-y-2.5 text-xs text-slate-700 pt-2 border-t border-slate-100">
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#0B9693] shrink-0 mt-0.5" />
                  <span>Trọn bộ Bản đồ xây kênh Y tế 30 ngày từng bước</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#0B9693] shrink-0 mt-0.5" />
                  <span>50+ Mẫu Prompt giúp cho AI hiểu rõ mong muốn xây kênh của bạn</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#0B9693] shrink-0 mt-0.5" />
                  <span>KHO 100+ CÔNG THỨC HOOK</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#0B9693] shrink-0 mt-0.5" />
                  <span>Quyền Truy Cập Trọn Đời</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#0B9693] shrink-0 mt-0.5" />
                  <span>Cập Nhật Mới Miễn Phí Nâng Cấp</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#0B9693] shrink-0 mt-0.5" />
                  <span>Nhóm Zalo Hỗ Trợ Trực Tiếp 24/7</span>
                </div>
              </div>

            </div>

            {/* Social Proof Card */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs space-y-2">
              <div className="flex items-center gap-2 text-sm font-black text-slate-900">
                <Heart className="w-4 h-4 text-red-500 fill-red-500" />
                <span>Hơn 200+ Học Viên Hài Lòng ❤️</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Tham gia cùng hơn 200+ chủ phòng khám, bác sĩ, dược sĩ đã tự tin sử dụng quy trình xây kênh cùng AI để phát triển cơ sở.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

