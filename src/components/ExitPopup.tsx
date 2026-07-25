import React, { useState, useEffect, useRef } from "react";
import { X, Gift, ArrowRight, Sparkles } from "lucide-react";
import { trackEvent } from "../utils/tracking";

interface ExitPopupProps {
  onConsultClick: () => void;
}

export const ExitPopup: React.FC<ExitPopupProps> = ({ onConsultClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const mountTimeRef = useRef<number>(Date.now());

  useEffect(() => {
    // Check if seen before
    const seen = localStorage.getItem("ydvn_exit_popup_seen");
    if (seen) return;

    const handleMouseLeave = (e: MouseEvent) => {
      // Require at least 12 seconds spent on page before showing popup
      const timeSpentSec = (Date.now() - mountTimeRef.current) / 1000;
      if (timeSpentSec < 12) return;

      if (e.clientY <= 0) {
        setIsOpen(true);
        localStorage.setItem("ydvn_exit_popup_seen", "true");
        trackEvent("exit_popup_open", "Exit intent triggered on desktop after delay");
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, []);

  if (!isOpen) return null;

  const handleAction = () => {
    setIsOpen(false);
    onConsultClick();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-300">
      <div className="bg-[#FFFEFB] border-2 border-[#FF4F00] rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-5 text-center relative shadow-2xl overflow-hidden">
        {/* Decorative Top Accent Bar */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#FF4F00] via-amber-400 to-[#0B9693]" />

        {/* Highly Visible Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-slate-100 hover:bg-[#FF4F00] text-slate-700 hover:text-white border border-slate-200/80 shadow-md rounded-full p-2.5 transition-all cursor-pointer flex items-center justify-center gap-1 group"
          title="Đóng cửa sổ"
          aria-label="Đóng cửa sổ"
        >
          <X className="w-5 h-5 transition-transform group-hover:scale-110" />
          <span className="hidden sm:inline text-xs font-bold pr-1">Đóng</span>
        </button>

        <div className="w-16 h-16 rounded-2xl bg-amber-100 text-[#FF4F00] flex items-center justify-center font-bold mx-auto border-2 border-amber-300 mt-2 sm:mt-0 shadow-sm">
          <Gift className="w-9 h-9 animate-bounce" />
        </div>

        <div className="space-y-2.5">
          <div className="inline-flex items-center gap-1.5 text-xs font-black text-[#FF4F00] uppercase tracking-wider bg-amber-100/80 px-3.5 py-1 rounded-full border border-amber-300">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ƯU ĐÃI ĐẶC BIỆT KHI ĐĂNG KÝ NGAY</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-[#0B2D46] leading-tight">
            NHẬN MÃ GIẢM 100K & BỘ MẪU KỊCH BẢN Y TẾ!
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            Đăng ký sở hữu Bản Đồ Xây Kênh 30 Ngày ngay bây giờ để áp dụng ưu đãi <strong className="text-[#FF4F00]">giảm 100K (chỉ còn 699.000đ)</strong> cùng trọn bộ Quà Tặng Độc Quyền từ YDVN.
          </p>
        </div>

        <div className="pt-2">
          <button
            onClick={handleAction}
            className="w-full bg-[#FF4F00] hover:bg-[#E04500] text-white font-black text-sm sm:text-base py-4 px-6 rounded-2xl shadow-xl transition-all transform hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2 text-center"
          >
            <span>NHẬN ƯU ĐÃI & ĐĂNG KÝ NGAY</span>
            <ArrowRight className="w-5 h-5 shrink-0" />
          </button>
        </div>

        <p className="text-xs text-slate-500 font-medium">
          ⚡ Áp dụng duy nhất trong lượt truy cập này • Hỗ trợ kích hoạt tức thì qua Zalo
        </p>
      </div>
    </div>
  );
};

