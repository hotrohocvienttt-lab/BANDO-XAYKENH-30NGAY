import React from "react";
import { ShieldCheck, Award, Briefcase, ChevronRight } from "lucide-react";
import { trackEvent } from "../utils/tracking";
import { YdvnLogo } from "./YdvnLogo";
import { SafeImage } from "./SafeImage";

import { CONFIG } from "../config";

export const TrainerProfileSection: React.FC = () => {
  const handleSectionClick = () => {
    trackEvent("trainer_view", "Trainer Profile Section");
  };

  const founderImg = CONFIG.founderImageUrl || "/uploads/anh-dai-dien-anh-thanh.jpeg";

  return (
    <section id="nguoi-huong-dan" className="py-16 md:py-24 bg-[#FFFEFB] border-b border-slate-200/80" onClick={handleSectionClick}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <span className="text-xs font-black text-[#0B9693] uppercase tracking-wider bg-teal-50 px-3.5 py-1.5 rounded-full border border-teal-200">
            CHUYÊN GIA ĐỒNG HÀNH
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0B2D46] tracking-tight">
            Người hướng dẫn: Thành Thật Thà & Cộng sự
          </h2>
        </div>

        {/* Profile Card */}
        <div className="bg-[#FFF1E6]/60 border-2 border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Avatar image for Founder */}
          <div className="md:col-span-5 flex flex-col items-center text-center">
            <div className="w-full aspect-square max-w-[280px] rounded-3xl overflow-hidden shadow-xl border-4 border-white relative group">
              <SafeImage
                src={founderImg}
                fallbackSrc="/anh-thanh.jpeg"
                alt="THÀNH THẬT THÀ"
                className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-3 left-3 right-3 bg-[#0B2D46]/90 backdrop-blur-md p-2.5 rounded-xl text-white border border-white/20">
                <span className="text-xs font-black text-amber-300 block">THÀNH THẬT THÀ</span>
                <span className="text-[10px] text-teal-200 font-semibold block">FOUNDER YDVN.VN</span>
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="md:col-span-7 space-y-5">
            <div>
              <span className="text-xs font-black text-[#FF4F00] uppercase tracking-wider block">
                HLV THÀNH THẬT THÀ
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-[#0B2D46] mt-1">
                FOUNDER THƯƠNG HIỆU YDVN.VN
              </h3>
            </div>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium bg-amber-50/80 p-3.5 rounded-2xl border border-amber-200/80">
              “Thành Thật Thà không chỉ dạy xây kênh. Công việc của Thành và YDVN là giúp cơ sở y tế nghiên cứu thị trường, tìm ra điểm mạnh, thiết kế lại phễu, mô hình kinh doanh trước khi làm nội dung, quảng cáo, Sale, CSKH và vận hành thành một hệ thống có thể đo lường”
            </p>

            <div className="space-y-3 pt-1">
              <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-800 font-semibold">
                <ChevronRight className="w-5 h-5 text-[#FF4F00] shrink-0 mt-0.5" />
                <span>Thành đã có hơn 10 năm kinh nghiệm tự kinh doanh nhà thuốc phòng khám + hơn 6 năm đào tạo & setup hệ thống Sale/ Marketing và quy trình vận hành thực chiến trong ngành y tế.</span>
              </div>
              <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-800 font-semibold">
                <ChevronRight className="w-5 h-5 text-[#FF4F00] shrink-0 mt-0.5" />
                <span>Trực tiếp tham gia cố vấn và thiết lập hệ thống cho hơn 1000 dự án phòng khám, bệnh viện & bác sĩ/dược sĩ trên cả nước.</span>
              </div>
              <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-800 font-semibold">
                <ChevronRight className="w-5 h-5 text-[#FF4F00] shrink-0 mt-0.5" />
                <span>Có đủ trải nghiệm toàn diện từ làm kịch bản Content, chạy Ads đến quy trình chốt lịch Sale & CSKH.</span>
              </div>
              <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-800 font-semibold">
                <ChevronRight className="w-5 h-5 text-[#FF4F00] shrink-0 mt-0.5" />
                <span>Có hệ thống hóa toàn bộ kinh nghiệm thành Workbook, Prompt, Checklist, SOP và Dashboard sẵn sàng chuyển giao.</span>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-2 text-xs font-extrabold text-[#0B9693]">
              <ShieldCheck className="w-4 h-4" />
              <span>Cam kết chia sẻ 100% quy trình thật, không giấu nghề.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
