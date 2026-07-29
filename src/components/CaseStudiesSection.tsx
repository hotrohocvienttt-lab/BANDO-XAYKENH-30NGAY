import React, { useState } from "react";
import { Building2, Image } from "lucide-react";
import { trackEvent } from "../utils/tracking";
import { SafeImage } from "./SafeImage";

import logoPhucNguyenDuong from "../assets/logo-phuc-nguyen-duong.png";
import drChubbyImg from "../assets/dr-chubby.jpg";
import ketQuaXayKenhImg from "../assets/ket-qua-xay-kenh-ban-hang.jpg";
import logoTamAnImg from "../assets/logo-tam-an-dental.png";
import benhVienSanteImg from "../assets/benh-vien-sante.png";
import pkBambooCareImg from "../assets/pk-san-phu-khoa-bamboocake.png";

import suKienTeamImg from "../assets/su-kien-team-2024.jpg";
import suKienSachAiImg from "../assets/su-kien-thanh-cam-sach-ai.jpg";
import daoTaoOnlineImg from "../assets/anh-thanh-dao-tao-online.jpg";
import matTienPkImg from "../assets/mat-tien-pk-hoc-vien.jpg";

export const CaseStudiesSection: React.FC = () => {
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const cases = [
    {
      id: "phuc-nguyen-duong",
      name: "PHÚC NGUYÊN ĐƯỜNG",
      image: logoPhucNguyenDuong,
      bgClass: "bg-white",
      fitClass: "object-contain p-4",
      imgPlaceholder: "DỰ ÁN PHÚC NGUYÊN ĐƯỜNG",
      desc: "Xây dựng kênh Y tế - Đông y chuẩn mực chuyên sâu",
      result: "Tăng trưởng thương hiệu & Tiếp cận hàng trăm ngàn người bệnh",
    },
    {
      id: "dr-chubby",
      name: "DR CHUBBY",
      image: drChubbyImg,
      bgClass: "bg-slate-900",
      fitClass: "object-cover",
      imgPlaceholder: "DỰ ÁN DR CHUBBY",
      desc: "Đồng hành xây dựng thương hiệu cá nhân Bác sĩ chuyên khoa",
      result: "Team Thành trực tiếp xây kênh Dr Chubby 50 ngày đạt nút bạc youtube 2020",
    },
    {
      id: "duoc-si-tra",
      name: "DƯỢC SĨ TRÀ",
      image: ketQuaXayKenhImg,
      bgClass: "bg-slate-900",
      fitClass: "object-cover",
      imgPlaceholder: "DỰ ÁN DƯỢC SĨ TRÀ",
      desc: "Quy trình chuyển đổi đơn hàng qua Video ngắn AI",
      result: "Tạo doanh thu trực tiếp từ kênh truyền thông Y dược",
    },
    {
      id: "nha-khoa-tam-an",
      name: "NHA KHOA TÂM AN",
      image: logoTamAnImg,
      bgClass: "bg-white",
      fitClass: "object-contain p-4",
      imgPlaceholder: "DỰ ÁN NHA KHOA TÂM AN",
      desc: "Chiến lược Marketing nội dung nha khoa chất lượng cao",
      result: "Bứt phá lượng khách hàng đặt lịch khám thực tế",
    },
    {
      id: "benh-vien-sante",
      name: "BỆNH VIỆN SANTE",
      image: benhVienSanteImg,
      bgClass: "bg-white",
      fitClass: "object-contain p-4",
      imgPlaceholder: "DỰ ÁN BỆNH VIỆN SANTE",
      desc: "YDVN tư vấn chiến lược truyền thông & Kỹ năng CSKH cho bệnh viện",
      result: "Chuẩn hóa quy trình truyền thông & Đào tạo kỹ năng CSKH y tế",
    },
    {
      id: "san-phu-khoa-bamboo-care",
      name: "SẢN PHỤ KHOA BAMBOO CARE",
      image: pkBambooCareImg,
      bgClass: "bg-white",
      fitClass: "object-contain p-4",
      imgPlaceholder: "DỰ ÁN SẢN PHỤ KHOA BAMBOO CARE",
      desc: "Tư vấn xây kênh Sản phụ khoa uy tín & chuẩn y khoa",
      result: "Thu hút tệp phụ nữ & gia đình quan tâm sức khỏe",
    },
  ];

  const handleSectionClick = () => {
    trackEvent("case_study_view", "Case Studies Section");
  };

  return (
    <section id="case-study" className="py-16 md:py-24 bg-[#FFF1E6]/40 border-b border-slate-200/80" onClick={handleSectionClick}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <span className="text-xs font-black text-[#0B2D46] uppercase tracking-wider bg-white px-3.5 py-1.5 rounded-full border border-amber-200">
            DỰ ÁN THỰC TẾ
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0B2D46] tracking-tight">
            Những dự án và thương hiệu Thành đã có cơ hội đồng hành
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Hình ảnh và thông tin case study được ghi nhận thực tế từ các thương hiệu y tế:
          </p>
        </div>

        {/* 6 Case Study Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((c) => (
            <div
              key={c.id}
              className="bg-white border border-slate-200 rounded-3xl p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Image / Case Study Frame */}
                <div className={`aspect-[16/10] ${c.bgClass} rounded-2xl flex flex-col items-center justify-center text-center border border-slate-200 relative overflow-hidden group shadow-inner`}>
                  {c.image && !failedImages[c.id] ? (
                    <SafeImage
                      src={c.image}
                      alt={c.name}
                      className={`w-full h-full ${c.fitClass} group-hover:scale-105 transition-transform duration-300`}
                      onError={() => {
                        setFailedImages(prev => ({ ...prev, [c.id]: true }));
                      }}
                    />
                  ) : (
                    <div className="p-4 flex flex-col items-center justify-center bg-slate-100 text-slate-700 w-full h-full">
                      <Image className="w-8 h-8 text-[#0B9693] mb-2 opacity-80" />
                      <span className="text-xs font-mono text-[#0B2D46] uppercase font-bold">
                        {c.imgPlaceholder}
                      </span>
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#0B9693]" />
                    <h3 className="text-base font-black text-[#0B2D46] tracking-tight">
                      {c.name}
                    </h3>
                  </div>

                  <div className="text-xs text-slate-600 bg-slate-50 p-2.5 rounded-xl border border-slate-100 italic">
                    {c.desc}
                  </div>

                  <div className="text-xs text-[#0B9693] font-bold bg-teal-50 p-2.5 rounded-xl border border-teal-100">
                    {c.result}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Banner: 500+ Partners & Stage/Workshop Training */}
        <div className="mt-12 bg-gradient-to-br from-[#0B2D46] via-[#0e3b5c] to-[#0B2D46] rounded-3xl p-6 sm:p-10 text-white shadow-xl border border-slate-700/60 overflow-hidden relative">
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#FF4F00]/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Text column */}
            <div className="lg:col-span-6 space-y-4 text-center lg:text-left">
              <span className="inline-block text-xs font-black text-[#FF4F00] uppercase tracking-wider bg-amber-500/10 px-3.5 py-1.5 rounded-full border border-amber-500/30">
                ⚡ QUY MÔ & TẦM INH HƯỞNG
              </span>
              
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white leading-tight">
                VÀ HƠN <span className="text-[#FF4F00]">500+ ĐỐI TÁC LỚN NHỎ</span> CẢ NƯỚC ĐÃ ĐƯỢC TƯ VẤN & ĐÀO TẠO
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Thành Thật Thà & YDVN đã trực tiếp đứng trên hàng chục sân khấu hội thảo, lớp đào tạo trực tiếp và khóa học thực chiến – truyền cảm hứng và bàn giao quy trình xây kênh AI cho hàng ngàn bác sĩ, dược sĩ, chủ cơ sở y tế khắp các tỉnh thành.
              </p>

              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <div className="bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/10 text-center">
                  <span className="block text-xl font-black text-[#FF4F00]">500+</span>
                  <span className="text-xs text-slate-300 font-medium">Đối Tác Y Tế</span>
                </div>
                <div className="bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/10 text-center">
                  <span className="block text-xl font-black text-[#0B9693]">1000+</span>
                  <span className="text-xs text-slate-300 font-medium">Dự Án Đã Tư Vấn</span>
                </div>
                <div className="bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/10 text-center">
                  <span className="block text-xl font-black text-amber-400">63</span>
                  <span className="text-xs text-slate-300 font-medium">Tỉnh Thành</span>
                </div>
              </div>
            </div>

            {/* Images Showcase */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-3.5">
              <div className="relative group rounded-2xl overflow-hidden border border-slate-600 shadow-lg aspect-[4/3] bg-slate-800">
                <SafeImage
                  src={suKienTeamImg}
                  alt="Sân khấu đào tạo YDVN"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-2.5">
                  <span className="text-[11px] font-bold text-white leading-tight">
                    🎤 Sân khấu & Sự kiện YDVN
                  </span>
                </div>
              </div>

              <div className="relative group rounded-2xl overflow-hidden border border-slate-600 shadow-lg aspect-[4/3] bg-slate-800">
                <SafeImage
                  src={suKienSachAiImg}
                  alt="Thành Thật Thà chia sẻ quy trình AI Y tế"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-2.5">
                  <span className="text-[11px] font-bold text-white leading-tight">
                    📚 Đào tạo & Chuyển giao AI
                  </span>
                </div>
              </div>

              <div className="relative group rounded-2xl overflow-hidden border border-slate-600 shadow-lg aspect-[4/3] bg-slate-800">
                <SafeImage
                  src={daoTaoOnlineImg}
                  alt="Đào tạo Online trực tiếp cho học viên"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-2.5">
                  <span className="text-[11px] font-bold text-white leading-tight">
                    💻 Lớp học thực chiến Online
                  </span>
                </div>
              </div>

              <div className="relative group rounded-2xl overflow-hidden border border-slate-600 shadow-lg aspect-[4/3] bg-slate-800">
                <SafeImage
                  src={matTienPkImg}
                  alt="Đồng hành thực địa tại các phòng khám"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-2.5">
                  <span className="text-[11px] font-bold text-white leading-tight">
                    🏥 Đồng hành tại phòng khám
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
