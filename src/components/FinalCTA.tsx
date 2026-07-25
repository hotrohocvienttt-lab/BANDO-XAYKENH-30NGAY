import React from "react";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { trackEvent } from "../utils/tracking";

interface FinalCTAProps {
  onRegisterClick: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onRegisterClick }) => {
  const handleClick = () => {
    trackEvent("hero_cta_click", "Final CTA Section Button");
    onRegisterClick();
  };

  return (
    <section className="py-16 md:py-20 bg-[#0B2D46] text-white border-b border-slate-800 text-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
        
        <span className="text-xs font-black text-amber-400 uppercase tracking-widest bg-white/10 px-3.5 py-1.5 rounded-full border border-white/20 inline-block">
          SẴN SÀNG CHUẨN HÓA KÊNH Y TẾ 30 NGÀY?
        </span>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight leading-snug">
          Bắt đầu xây kênh y tế đúng tệp, đúng định vị và đo lường được hiệu quả từ hôm nay.
        </h2>

        <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
          Sở hữu trọn bộ Workbook, 50+ Prompt, 100+ Hook, Calendar, Checklist và quyền tham gia Workshop Zoom hướng dẫn trực tiếp.
        </p>

        <div className="pt-2">
          <button
            onClick={handleClick}
            className="inline-flex items-center justify-center gap-2.5 bg-[#FF4F00] hover:bg-[#E04500] text-white font-black text-base sm:text-lg px-8 py-4 rounded-2xl shadow-xl shadow-[#FF4F00]/20 transform hover:-translate-y-0.5 transition-all cursor-pointer"
          >
            <Sparkles className="w-5 h-5 text-amber-300" />
            <span>TÔI MUỐN NHẬN TOÀN BỘ LỘ TRÌNH & CÂU LỆNH XÂY KÊNH</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <div className="text-xs text-slate-400 font-semibold flex items-center justify-center gap-1.5 pt-2">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Thanh toán một lần 799.000Đ • Bàn giao ngay sau xác nhận</span>
        </div>

      </div>
    </section>
  );
};
