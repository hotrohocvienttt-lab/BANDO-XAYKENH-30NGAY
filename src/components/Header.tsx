import React, { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { CONFIG } from "../config";
import { trackEvent } from "../utils/tracking";
import { YdvnLogo } from "./YdvnLogo";

interface HeaderProps {
  onRegisterClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onRegisterClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Vì sao cần", href: "#vi-sao-can" },
    { label: "Tám bước", href: "#tam-buoc" },
    { label: "Bộ công cụ", href: "#bo-cong-cu" },
    { label: "Người hướng dẫn", href: "#nguoi-huong-dan" },
    { label: "Case study", href: "#case-study" },
    { label: "Hỏi đáp", href: "#hoi-dap" },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleCtaClick = () => {
    trackEvent("hero_cta_click", "Header Navbar Button");
    onRegisterClick();
  };

  return (
    <header className="relative z-30 bg-[#FFFEFB] border-b border-slate-200/60 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <YdvnLogo className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 transition-transform group-hover:scale-105" />
          <div className="flex flex-col justify-center">
            <span className="font-extrabold text-lg sm:text-xl text-[#0B2D46] tracking-tight group-hover:text-[#0B9693] transition-colors leading-snug">
              {CONFIG.brandName}
            </span>
            <span className="text-[10px] sm:text-[11px] text-slate-600 font-semibold tracking-wide -mt-0.5">
              Đồng hành nâng tầm y dược Việt
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-semibold text-slate-700">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="hover:text-[#0B9693] transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA & Admin link */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="#admin"
            className="text-xs font-semibold text-slate-500 hover:text-slate-800 px-3 py-2 rounded-lg transition-colors border border-slate-200 hover:border-slate-300"
            title="Quản trị Leads"
          >
            Quản trị
          </a>

          <button
            onClick={handleCtaClick}
            className="bg-[#FF4F00] hover:bg-[#E04500] text-white font-black text-xs sm:text-sm px-5 py-2.5 rounded-xl shadow-md transition-all transform hover:-translate-y-0.5 cursor-pointer flex items-center gap-1.5"
          >
            <span>ĐĂNG KÝ 799K</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-slate-900 bg-slate-50 hover:bg-slate-100 rounded-xl border border-slate-200/80 cursor-pointer shadow-2xs"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FFFEFB] border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 animate-in fade-in duration-150">
          <nav className="flex flex-col space-y-2 text-base font-semibold text-slate-800 border-b border-slate-100 pb-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="py-2 px-3 rounded-lg hover:bg-slate-100 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#admin"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg text-slate-500 hover:bg-slate-100 text-sm"
            >
              ⚙ Quản trị Leads (#admin)
            </a>
          </nav>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              handleCtaClick();
            }}
            className="w-full bg-[#FF4F00] hover:bg-[#E04500] text-white font-black text-sm py-3 rounded-xl shadow-md text-center cursor-pointer flex items-center justify-center gap-2"
          >
            <span>TÔI MUỐN NHẬN TOÀN BỘ LỘ TRÌNH & CÂU LỆNH XÂY KÊNH</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </header>
  );
};
