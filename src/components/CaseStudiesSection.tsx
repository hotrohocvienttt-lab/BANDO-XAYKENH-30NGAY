import React from "react";
import { Building2, Image } from "lucide-react";
import { trackEvent } from "../utils/tracking";

export const CaseStudiesSection: React.FC = () => {
  const cases = [
    {
      id: "phuc-nguyen-duong",
      name: "PHÚC NGUYÊN ĐƯỜNG",
      image: "/uploads/logo-phuc-nguyen-duong.png",
      imgPlaceholder: "ĐẶT ẢNH CASE STUDY PHÚC NGUYÊN ĐƯỜNG",
      desc: "Xây dựng kênh Y tế - Đông y chuẩn mực chuyên sâu",
      result: "Tăng trưởng thương hiệu & Tiếp cận hàng trăm ngàn người bệnh",
    },
    {
      id: "dr-chubby",
      name: "DR CHUBBY",
      image: "/uploads/bac-si-ydvn-xay-kenh.jpg",
      imgPlaceholder: "ĐẶT ẢNH CASE STUDY DR CHUBBY",
      desc: "Đồng hành xây dựng thương hiệu cá nhân Bác sĩ chuyên khoa",
      result: "Phát triển kênh TikTok & Facebook Y tế uy tín",
    },
    {
      id: "duoc-si-tra",
      name: "DƯỢC SĨ TRÀ",
      image: "/uploads/ket-qua-xay-kenh-ban-hang.jpg",
      imgPlaceholder: "ĐẶT ẢNH CASE STUDY DƯỢC SĨ TRÀ",
      desc: "Quy trình chuyển đổi đơn hàng qua Video ngắn AI",
      result: "Tạo doanh thu trực tiếp từ kênh truyền thông Y dược",
    },
    {
      id: "nha-khoa-tam-an",
      name: "NHA KHOA TÂM AN",
      image: "/uploads/logo-tam-an-dental.png",
      imgPlaceholder: "ĐẶT ẢNH CASE STUDY NHA KHOA TÂM AN",
      desc: "Chiến lược Marketing nội dung nha khoa chất lượng cao",
      result: "Bứt phá lượng khách hàng đặt lịch khám thực tế",
    },
    {
      id: "benh-vien-sante",
      name: "BỆNH VIỆN SANTE",
      image: "/uploads/mat-tien-pk-hoc-vien.jpg",
      imgPlaceholder: "ĐẶT ẢNH CASE STUDY BỆNH VIỆN SANTE",
      desc: "Mặt tiền & Hình ảnh phòng khám chuyên nghiệp YDVN",
      result: "Chuẩn hóa quy trình Marketing đa kênh Y tế",
    },
    {
      id: "san-phu-khoa-hamec",
      name: "SẢN PHỤ KHOA HAMEC",
      image: "/uploads/pk-san-phu-khoa-bamboocake.png",
      imgPlaceholder: "ĐẶT ẢNH CASE STUDY SẢN PHỤ KHOA HAMEC",
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
                <div className="aspect-[16/10] bg-slate-900 rounded-2xl flex flex-col items-center justify-center text-center text-slate-300 border border-slate-700 relative overflow-hidden group">
                  {c.image ? (
                    <img
                      src={c.image}
                      alt={c.name}
                      className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                    />
                  ) : (
                    <div className="p-4 flex flex-col items-center justify-center">
                      <Image className="w-8 h-8 text-teal-400 mb-2 opacity-80" />
                      <span className="text-xs font-mono text-amber-300 uppercase font-bold">
                        {c.imgPlaceholder}
                      </span>
                      <span className="text-[10px] text-slate-400 mt-1">
                        (Khung hiển thị hình ảnh dự án)
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

      </div>
    </section>
  );
};
