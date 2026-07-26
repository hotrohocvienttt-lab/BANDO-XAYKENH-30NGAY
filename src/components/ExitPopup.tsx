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
            <span>⚡ BẠN MUỐN LÀ NGƯỜI DẪN DẮT THỊ TRƯỜNG Y TẾ?</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-[#0B2D46] leading-tight">
            HÃY ĐĂNG KÝ NGAY <br className="hidden sm:inline" />ĐỂ XÂY KÊNH TRƯỚC KHI ĐỐI THỦ CỦA BẠN CHIẾM LĨNH!
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            Đối thủ trong cùng khu vực/chuyên khoa của bạn cũng đang tìm cách tiếp cận bệnh nhân trên mạng xã hội mỗi ngày. Sở hữu ngay <strong className="text-[#FF4F00]">Bản Đồ Xây Kênh 30 Ngày cùng AI</strong> để bứt phá truyền thông và dẫn đầu thị trường ngay hôm nay.
          </p>
        </div>

        <div className="pt-2">
          <button
            onClick={handleAction}
            className="w-full bg-[#FF4F00] hover:bg-[#E04500] text-white font-black text-sm sm:text-base py-4 px-6 rounded-2xl shadow-xl transition-all transform hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2 text-center"
          >
            <span>ĐĂNG KÝ BỨT PHÁ TRƯỚC ĐỐI THỦ</span>
            <ArrowRight className="w-5 h-5 shrink-0" />
          </button>
        </div>

        <p className="text-xs text-slate-500 font-medium">
          ⚡ Hỗ trợ kích hoạt tức thì • Nhận trọn bộ cẩm nang & công cụ YDVN
        </p>
      </div>
    </div>
  );
};

