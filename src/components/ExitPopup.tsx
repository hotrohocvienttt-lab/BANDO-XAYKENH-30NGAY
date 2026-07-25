import React, { useState, useEffect, useRef } from "react";
import { X, HelpCircle, ArrowRight } from "lucide-react";
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
      <div className="bg-[#FFFEFB] border-2 border-[#0B2D46] rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-5 text-center relative shadow-2xl">
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

        <div className="w-14 h-14 rounded-2xl bg-[#FFF1E6] text-[#FF4F00] flex items-center justify-center font-bold mx-auto border border-amber-200 mt-2 sm:mt-0">
          <HelpCircle className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-black text-[#FF4F00] uppercase tracking-wider bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            HỖ TRỢ TƯ VẤN MIỄN PHÍ
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-[#0B2D46]">
            ANH/CHỊ CÒN BĂN KHOĂN?
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            Để lại thông tin, Team YDVN sẽ giúp anh/chị kiểm tra xem bộ cẩm nang & công cụ 30 ngày này có phù hợp nhất với mô hình phòng khám/chuyên gia của mình hay không.
          </p>
        </div>

        <div className="pt-2">
          <button
            onClick={handleAction}
            className="w-full bg-[#FF4F00] hover:bg-[#E04500] text-white font-black text-sm sm:text-base py-4 rounded-2xl shadow-xl transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <span>TÔI CẦN ĐƯỢC TƯ VẤN</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <p className="text-xs text-slate-400 italic">
          Không chèo kéo • Không spam • Tư vấn đúng nhu cầu thực tế
        </p>
      </div>
    </div>
  );
};
