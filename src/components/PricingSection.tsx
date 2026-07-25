import React from "react";
import { Check, ShieldCheck, ArrowRight, HelpCircle, Sparkles } from "lucide-react";
import { CONFIG } from "../config";
import { trackEvent } from "../utils/tracking";

interface PricingSectionProps {
  onRegisterClick: () => void;
  onConsultClick: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({
  onRegisterClick,
  onConsultClick,
}) => {
  const benefits = [
    "Editorial Workbook 'Bản đồ xây kênh y tế 30 ngày cùng AI'",
    "Thư viện 50+ Prompt AI chuyên dụng cho ngành Y - Dược",
    "Kho 100+ công thức Hook thu hút bệnh nhân trong 3 giây",
    "Content Calendar 30 ngày chuẩn hóa quy trình biên tập",
    "Checklist kiểm duyệt tiêu chuẩn chuyên môn & an toàn",
    "Bảng đo lường hiệu quả chuyển đổi từ view đến đơn hàng",
    "Quyền lợi tham gia 01 buổi Workshop Zoom Onboarding",
    "Quyền đăng ký danh sách giao lưu Offline tại TP.HCM",
  ];

  const handlePrimaryClick = () => {
    trackEvent("pricing_view", "Pricing Primary 799K");
    onRegisterClick();
  };

  const handleConsultClick = () => {
    trackEvent("pricing_view", "Pricing Consult Advice");
    onConsultClick();
  };

  return (
    <section id="khung-gia" className="py-16 md:py-24 bg-[#0B2D46] text-white border-b border-slate-800 relative overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-[#0B9693]/10 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-10">
          <span className="text-xs font-black text-amber-400 uppercase tracking-widest bg-white/10 px-3.5 py-1.5 rounded-full border border-white/20">
            CHI PHÍ ĐẦU TƯ DUY NHẤT
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Sở Hữu Hệ Thống Xây Kênh Y Tế 30 Ngày
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Nhận toàn bộ tài liệu, công cụ và quyền lợi đồng hành hướng dẫn trực tiếp:
          </p>
        </div>

        {/* Pricing Card */}
        <div className="bg-gradient-to-b from-slate-900 to-slate-950 border-2 border-amber-400/50 rounded-3xl p-6 sm:p-10 shadow-2xl relative">
          
          <div className="text-center space-y-4 border-b border-slate-800 pb-8">
            {/* Original Value & Discount Badge */}
            <div className="flex flex-wrap items-center justify-center gap-2.5">
              <div className="inline-flex items-center gap-2 bg-slate-800/90 px-4 py-2 rounded-2xl border border-slate-700 shadow-inner">
                <span className="text-xs font-black text-slate-300 uppercase tracking-wider">
                  GIÁ TRỊ GỐC:
                </span>
                <span className="text-base sm:text-lg font-extrabold text-slate-400 line-through decoration-red-500 decoration-2">
                  39.000.000Đ
                </span>
              </div>

              <span className="bg-gradient-to-r from-red-600 to-amber-500 text-white font-black text-xs px-3.5 py-2 rounded-2xl uppercase tracking-wider shadow-md">
                TIẾT KIỆM 98%
              </span>
            </div>

            {/* Launch Price */}
            <div className="space-y-1.5 pt-1">
              <span className="inline-block text-xs font-black text-amber-400 uppercase tracking-widest bg-amber-400/10 px-4 py-1.5 rounded-full border border-amber-400/30 shadow-sm">
                GIÁ MỞ BÁN ƯU ĐÃI
              </span>
              <div className="flex items-baseline justify-center gap-1.5 pt-1">
                <span className="text-4xl sm:text-6xl font-black text-amber-400 tracking-tight drop-shadow-lg">
                  799.000
                </span>
                <span className="text-2xl sm:text-3xl font-black text-amber-400">
                  Đ
                </span>
              </div>
            </div>

            {CONFIG.showTotalValue && (
              <p className="text-[11px] sm:text-xs text-slate-400 italic max-w-lg mx-auto pt-1 leading-relaxed">
                *Giá trị gốc quy đổi 39.000.000Đ được tính trên tổng tài liệu, công cụ, video và quyền lợi hướng dẫn đi kèm; không phải mức giá sản phẩm đã từng bán.
              </p>
            )}
          </div>

          {/* Benefit Items */}
          <div className="py-8 space-y-3.5">
            <p className="text-xs font-bold text-teal-300 uppercase tracking-wider text-center">
              TRỌN BỘ QUYỀN LỢI BAO GỒM:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-200">
              {benefits.map((b, i) => (
                <div key={i} className="flex items-start gap-2.5 bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="font-medium">{b}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action buttons */}
          <div className="space-y-3 pt-2">
            <button
              onClick={handlePrimaryClick}
              className="w-full bg-[#FF4F00] hover:bg-[#E04500] text-white font-black text-base sm:text-lg py-4 rounded-2xl shadow-xl shadow-[#FF4F00]/20 transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <Sparkles className="w-5 h-5 text-amber-300" />
              <span>TÔI MUỐN NHẬN TOÀN BỘ LỘ TRÌNH & CÂU LỆNH XÂY KÊNH</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <button
              onClick={handleConsultClick}
              className="w-full bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-sm py-3.5 rounded-2xl transition-all cursor-pointer border border-slate-700 flex items-center justify-center gap-2"
            >
              <HelpCircle className="w-4 h-4 text-[#0B9693]" />
              <span>TÔI CẦN ĐƯỢC TƯ VẤN</span>
            </button>
          </div>

          {/* Transparent notes */}
          <div className="mt-8 pt-6 border-t border-slate-800 text-[11px] sm:text-xs text-slate-400 space-y-1.5 text-center">
            <div className="flex items-center justify-center gap-1.5 text-slate-300 font-semibold">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Thanh toán một lần • Không tự động gia hạn</span>
            </div>
            <p>• Workshop Zoom và giao lưu Offline được tổ chức theo nhóm.</p>
            <p>• Không cam kết chắc chắn về con số doanh thu kinh doanh.</p>
            <p>• Mọi nội dung y tế đăng tải cần được người có chuyên môn duyệt kỹ.</p>
          </div>

        </div>

      </div>
    </section>
  );
};
