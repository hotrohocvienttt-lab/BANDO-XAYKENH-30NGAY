import React, { useState } from "react";
import { ArrowRight, ShieldCheck, Sparkles, Play, Video } from "lucide-react";
import { CONFIG } from "../config";
import { trackEvent } from "../utils/tracking";
import { YdvnLogo } from "./YdvnLogo";
import { SafeImage } from "./SafeImage";

interface HeroSectionProps {
  onPrimaryCta: () => void;
  onConsultCta?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onPrimaryCta }) => {
  const videoConfig = CONFIG.heroVideoUrl || "";
  const [isPlaying, setIsPlaying] = useState(Boolean(videoConfig));

  const handlePrimaryClick = () => {
    trackEvent("hero_cta_click", "Hero Primary 799K");
    onPrimaryCta();
  };

  const parseVideo = (url: string) => {
    if (!url) return null;
    const trimmed = url.trim();
    if (trimmed.includes("youtube.com") || trimmed.includes("youtu.be")) {
      let id = "";
      if (trimmed.includes("youtu.be/")) {
        id = trimmed.split("youtu.be/")[1]?.split("?")[0] || "";
      } else if (trimmed.includes("v=")) {
        id = trimmed.split("v=")[1]?.split("&")[0] || "";
      } else if (trimmed.includes("embed/")) {
        id = trimmed.split("embed/")[1]?.split("?")[0] || "";
      }
      if (id) return { type: "iframe", src: `https://www.youtube.com/embed/${id}?autoplay=1&rel=0` };
    }
    if (trimmed.includes("vimeo.com")) {
      const id = trimmed.split("vimeo.com/")[1]?.split("?")[0] || "";
      if (id) return { type: "iframe", src: `https://player.vimeo.com/video/${id}?autoplay=1` };
    }
    if (trimmed.includes("loom.com")) {
      const id = trimmed.split("share/")[1]?.split("?")[0] || "";
      if (id) return { type: "iframe", src: `https://www.loom.com/embed/${id}` };
    }
    return { type: "video", src: trimmed };
  };

  const embedInfo = parseVideo(videoConfig);

  return (
    <section className="relative py-12 lg:py-20 bg-gradient-to-b from-[#FFFEFB] via-[#FFF1E6]/40 to-[#FFFEFB] overflow-hidden border-b border-slate-200/60">
      {/* Background Decorative Gradient Blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0B9693]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FF4F00]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-center">
          
          {/* Left Column - Long Form Editorial Copy */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 bg-[#0B2D46] text-white px-3.5 py-2 sm:py-1.5 rounded-2xl sm:rounded-full text-xs font-extrabold sm:font-black tracking-wider uppercase shadow-sm max-w-full">
              <ShieldCheck className="w-3.5 h-3.5 text-[#0B9693] shrink-0" />
              <span className="leading-snug text-[#e7ef03]">SẢN PHẨM NÀY DÀNH CHO CHỦ CƠ SỞ Y TẾ - TP MARKETING - BÁC SĨ DƯỢC SĨ</span>
            </div>

            {/* Headline */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-[2.6rem] font-black text-[#201515] leading-[1.25] tracking-tight">
              Có chuyên môn, có đội ngũ, có cả AI… nhưng mỗi ngày vẫn phải hỏi: <span className="text-[#FF4F00] font-black underline underline-offset-4 decoration-2 decoration-[#FF4F00]/80">Hôm nay đăng gì?</span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg md:text-xl text-slate-700 font-medium leading-relaxed">
              <span className="block font-black text-[#FF4F00] text-lg sm:text-xl md:text-2xl mb-2.5 uppercase tracking-tight">
                <span className="underline underline-offset-4 decoration-2 decoration-[#FF4F00]">ĐÓ LÀ LÚC BẠN CẦN</span> - BẢN ĐỒ XÂY KÊNH Y TẾ 30 NGÀY THỰC TẾ CHIẾN CÙNG AI
              </span>
              Bộ cẩm nang này giúp <span className="font-bold underline underline-offset-2 decoration-amber-500">cơ sở y tế - bác sĩ, dược sĩ</span> và <span className="font-bold underline underline-offset-2 decoration-amber-500">đội ngũ Marketing</span> từng bước <span className="font-bold underline underline-offset-2 decoration-[#FF4F00]">xây kênh chuyển đổi, hút đúng tệp KH</span> <span className="font-bold text-[#FF4F00]">trong 30 ngày</span>: từ <span className="font-bold underline underline-offset-2 decoration-slate-400">định vị, nghiên cứu thị trường</span> đến <span className="font-bold underline underline-offset-2 decoration-slate-400">sáng tạo nội dung</span>, <span className="font-bold underline underline-offset-2 decoration-slate-400">lập kế hoạch triển khai</span> và <span className="font-bold underline underline-offset-2 decoration-[#0B9693]">đo lường hiệu quả cùng AI</span>.
            </p>

            {/* Supporting Line - Bordered Callout */}
            <div className="border-insight p-4 sm:p-5 rounded-r-2xl text-sm sm:text-base text-[#201515] font-semibold leading-relaxed shadow-sm">
              “Không cần bắt đầu bằng việc quay thật nhiều video. Hãy bắt đầu bằng <span className="font-bold underline underline-offset-2 decoration-[#FF4F00]">một mục tiêu rõ</span>, <span className="font-bold underline underline-offset-2 decoration-[#0B9693]">một nhóm khách hàng cụ thể</span> và <span className="font-extrabold underline underline-offset-2 decoration-[#FF4F00] text-[#FF4F00]">một bản đồ xây kênh chuyển đổi để làm theo</span>.”
            </div>

            {/* Price Box */}
            <div className="pt-2 flex flex-col space-y-2">
              <div className="flex flex-wrap items-center gap-2.5">
                <div className="bg-[#0B2D46] text-white px-4 py-2.5 rounded-2xl flex items-center gap-2.5 shadow-md border border-slate-700">
                  <span className="text-xs uppercase font-extrabold text-amber-300">Giá mở bán:</span>
                  <span className="text-2xl sm:text-3xl font-black text-amber-400 tracking-tight">799.000Đ</span>
                </div>

                <div className="bg-amber-50/90 border border-amber-200/90 px-3.5 py-2.5 rounded-2xl flex items-center gap-2 shadow-xs">
                  <span className="text-xs uppercase font-bold text-slate-600">Giá trị gốc:</span>
                  <span className="text-sm sm:text-base font-bold text-slate-500 line-through decoration-red-500 decoration-2">
                    39.000.000Đ
                  </span>
                  <span className="text-[11px] font-black bg-red-100 text-red-600 px-2 py-0.5 rounded-md uppercase">
                    -98%
                  </span>
                </div>
              </div>
              
              {CONFIG.showTotalValue && (
                <p className="text-[11px] leading-tight text-slate-500">
                  *Giá trị gốc quy đổi 39.000.000Đ được tính trên tổng tài liệu, công cụ, video và quyền lợi đi kèm; không phải mức giá từng bán.
                </p>
              )}
            </div>

            {/* Primary CTA */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={handlePrimaryClick}
                className="bg-[#FF4F00] hover:bg-[#E04500] text-white font-black text-base sm:text-lg px-8 py-4 rounded-2xl shadow-xl shadow-[#FF4F00]/20 transform hover:-translate-y-0.5 transition-all cursor-pointer flex items-center justify-center gap-2.5 text-center"
              >
                <span>TÔI MUỐN NHẬN TOÀN BỘ LỘ TRÌNH & CÂU LỆNH XÂY KÊNH</span>
                <ArrowRight className="w-5 h-5 shrink-0" />
              </button>
            </div>

          </div>

          {/* Right Column - Placeholders for Founder & Product Cover / Video */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Product Cover or Video Card */}
            <div className="bg-white border-2 border-[#0B2D46]/10 rounded-3xl p-3 sm:p-4 shadow-xl relative overflow-hidden group hover:border-[#0B9693]/40 transition-all">
              <div className="aspect-[16/10] sm:aspect-[4/3] bg-gradient-to-br from-[#0B2D46] via-[#0B9693] to-slate-900 rounded-2xl overflow-hidden relative shadow-inner flex flex-col justify-center items-center text-center p-4 text-white">
                
                {/* Active Video Player */}
                {isPlaying && embedInfo ? (
                  embedInfo.type === "iframe" ? (
                    <iframe
                      src={embedInfo.src}
                      title="Video Giới Thiệu Bản Đồ Xây Kênh"
                      className="w-full h-full border-0 rounded-2xl"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <video
                      src={embedInfo.src}
                      controls
                      autoPlay
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  )
                ) : (
                  <>
                    <div className="absolute inset-0 bg-black/20 pointer-events-none" />
                    
                    <Sparkles className="w-7 h-7 text-amber-400 mb-2 animate-bounce relative z-10" />
                    <span className="text-[11px] font-bold text-teal-200 uppercase tracking-wider mb-1 relative z-10">
                      BỘ CẨM NANG & CÔNG CỤ
                    </span>
                    <h3 className="text-base sm:text-lg font-black text-amber-300 leading-snug px-2 relative z-10">
                      BẢN ĐỒ XÂY KÊNH Y TẾ 30 NGÀY THỰC CHIẾN CÙNG AI
                    </h3>
                    <p className="text-[11px] text-slate-200 mt-1.5 font-medium relative z-10 max-w-xs">
                      8 Bước • 50+ Prompt • 100+ Hook • Calendar • Checklist • Dashboard
                    </p>

                    {/* Interactive Play Video Button / Trigger */}
                    <button
                      onClick={() => {
                        if (embedInfo) {
                          setIsPlaying(true);
                        } else {
                          // Prompt user gently or toggle video placeholder state
                          setIsPlaying(true);
                        }
                      }}
                      className="mt-4 px-4 py-2 bg-gradient-to-r from-[#FF4F00] to-amber-500 hover:scale-105 active:scale-95 text-white font-extrabold text-xs rounded-full shadow-lg flex items-center gap-2 cursor-pointer transition-all border border-white/30 relative z-10"
                    >
                      <Play className="w-4 h-4 fill-white shrink-0" />
                      <span>XEM VIDEO GIỚI THIỆU (3 PHÚT)</span>
                    </button>
                  </>
                )}
              </div>
            </div>

            {/* Founder Thành Thật Thà Brand Badge Frame */}
            <div className="bg-[#FFF1E6] border border-amber-200/80 rounded-3xl p-4 sm:p-5 shadow-md flex items-center gap-4">
              <div className="relative shrink-0">
                <SafeImage
                  src="/uploads/anh-dai-dien-anh-thanh.jpeg"
                  fallbackSrc="/anh-thanh.jpeg"
                  alt="THÀNH THẬT THÀ"
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover object-top border-2 border-amber-300 shadow-md"
                />
                <div className="absolute -bottom-1 -right-1 bg-[#0B2D46] text-amber-300 p-1 rounded-lg border border-amber-300/60 shadow-xs">
                  <YdvnLogo className="w-4 h-4" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-[11px] font-black text-[#FF4F00] uppercase tracking-wider">
                  NGƯỜI ĐỒNG HÀNH TRỰC TIẾP
                </span>
                <h4 className="text-base font-extrabold text-[#0B2D46] truncate">
                  THÀNH THẬT THÀ
                </h4>
                <p className="text-xs text-slate-600 mt-0.5 leading-snug">
                  Hơn 8 năm thực chiến xây dựng hệ thống Marketing - Vận hành cho các cơ sở Y tế & Sức khỏe.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
