import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { trackEvent } from "../utils/tracking";

interface StickyMobileCTAProps {
  onRegisterClick: () => void;
}

export const StickyMobileCTA: React.FC<StickyMobileCTAProps> = ({ onRegisterClick }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled > 500px down and not at bottom
      const scrolled = window.scrollY > 500;
      const isAtBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 400;
      setVisible(scrolled && !isAtBottom);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  const handleClick = () => {
    trackEvent("hero_cta_click", "Sticky Mobile CTA Bar");
    onRegisterClick();
  };

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0B2D46] border-t-2 border-[#FF4F00] px-3.5 py-2.5 pb-[calc(0.65rem+env(safe-area-inset-bottom))] shadow-2xl animate-in slide-in-from-bottom duration-200">
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider">
              BẢN ĐỒ 30 NGÀY XÂY KÊNH
            </span>
            <span className="text-[10px] font-medium text-slate-400 line-through decoration-red-400">
              39.000.000Đ
            </span>
          </div>
          <span className="text-lg font-black text-amber-400 leading-tight">
            799.000Đ
          </span>
        </div>

        <button
          onClick={handleClick}
          className="bg-[#FF4F00] hover:bg-[#E04500] text-white font-black text-xs px-5 py-3 rounded-xl shadow-lg cursor-pointer flex items-center gap-1.5"
        >
          <span>ĐĂNG KÝ NGAY</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
