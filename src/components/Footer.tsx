import React, { useState } from "react";
import { CONFIG } from "../config";
import { Phone, Mail, User, ShieldCheck, FileText, X } from "lucide-react";
import { YdvnLogo } from "./YdvnLogo";

export const Footer: React.FC = () => {
  const [modalType, setModalType] = useState<"terms" | "privacy" | null>(null);

  return (
    <footer className="bg-[#211817] text-slate-300 py-12 border-t border-slate-800 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-3">
              {CONFIG.logoUrl ? (
                <img
                  src={CONFIG.logoUrl}
                  alt={CONFIG.brandName}
                  className="w-10 h-10 sm:w-11 sm:h-11 object-contain shrink-0"
                  onError={(e) => {
                    (e.currentTarget as HTMLElement).style.display = 'none';
                  }}
                />
              ) : (
                <YdvnLogo className="w-10 h-10 sm:w-11 sm:h-11 shrink-0" />
              )}
              <div className="flex flex-col">
                <span className="font-black text-xl text-white tracking-wider leading-snug">
                  {CONFIG.brandName}
                </span>
                <span className="text-xs text-amber-400 font-semibold tracking-wide">
                  Đồng hành nâng tầm y dược Việt
                </span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-md pt-1">
              Đào tạo và thiết lập hệ thống Marketing – Sale – CSKH – vận hành cho lĩnh vực y tế và sức khỏe.
            </p>
          </div>

          {/* Contact & Legal */}
          <div className="md:col-span-6 space-y-3 text-xs sm:text-sm">
            <h4 className="font-extrabold text-white text-sm uppercase tracking-wider">
              THÔNG TIN PHÁP LÝ & LIÊN HỆ
            </h4>
            <div className="space-y-2 text-slate-400">
              <p className="flex items-start gap-2">
                <User className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span><strong>Công ty TNHH Đào Tạo Kinh Doanh YDVN</strong></span>
              </p>
              <p className="flex items-start gap-2">
                <FileText className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Mã số thuế: <strong>3703362601</strong></span>
              </p>
              <p className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Địa chỉ: <strong>139 đường số 1, khu dân cư Xe Lửa, Phường Dĩ An, TP Hồ Chí Minh, Việt Nam</strong></span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Hotline / Zalo: <strong>0345.11.86.37</strong></span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Email: <strong>{CONFIG.email}</strong></span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom bar & Legal Modals */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {CONFIG.brandName}. Bản quyền thuộc về Nguyễn Phương Thành.</p>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setModalType("terms")}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Điều khoản sử dụng
            </button>
            <span>•</span>
            <button
              onClick={() => setModalType("privacy")}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Chính sách bảo mật
            </button>
          </div>
        </div>

      </div>

      {/* Legal Modal */}
      {modalType && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#FFFEFB] text-[#201515] rounded-3xl max-w-xl w-full p-6 sm:p-8 space-y-4 relative max-h-[80vh] overflow-y-auto">
            <button
              onClick={() => setModalType(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-lg font-black text-[#0B2D46] border-b pb-2">
              {modalType === "terms" ? "ĐIỀU KHỎAN SỬ DỤNG" : "CHÍNH SÁCH BẢO MẬT"}
            </h3>

            <div className="text-xs sm:text-sm space-y-3 leading-relaxed text-slate-700">
              {modalType === "terms" ? (
                <>
                  <p>1. Sản phẩm 'Bản đồ xây kênh y tế 30 ngày cùng AI' do YDVN cung cấp dưới dạng quyền truy cập bộ tài liệu, công cụ và buổi hướng dẫn thực hành theo nhóm.</p>
                  <p>2. Khách hàng cam kết bảo vệ quyền sở hữu trí tuệ, không sao chép, thương mại hóa lại bộ Prompt và Workbook cho bên thứ ba khi chưa có sự đồng ý bằng văn bản của YDVN.</p>
                  <p>3. YDVN không chịu trách nhiệm đối với các nội dung y tế đăng tải do người dùng tự duyệt phát hành mà chưa qua kiểm định chuyên môn.</p>
                </>
              ) : (
                <>
                  <p>1. YDVN thu thập thông tin họ tên, số điện thoại, email và mô hình hoạt động nhằm mục đích xác nhận thanh toán, bàn giao sản phẩm và hướng dẫn tham gia Workshop.</p>
                  <p>2. Thông tin của anh/chị được lưu trữ an toàn và bảo mật 100%, không chia sẻ cho bất kỳ bên thứ ba nào vì mục đích quảng cáo rác.</p>
                  <p>3. Anh/chị có quyền yêu cầu chỉnh sửa hoặc xóa thông tin cá nhân khỏi hệ thống YDVN bất kỳ lúc nào qua hotline {CONFIG.hotline}.</p>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
