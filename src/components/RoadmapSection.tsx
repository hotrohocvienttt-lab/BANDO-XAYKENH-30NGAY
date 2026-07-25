import React from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { trackEvent } from "../utils/tracking";

interface RoadmapSectionProps {
  onRegisterClick: () => void;
}

export const RoadmapSection: React.FC<RoadmapSectionProps> = ({ onRegisterClick }) => {
  const steps = [
    {
      num: "01",
      title: "Xác định mục tiêu",
      desc: "Chốt mục tiêu kênh, hành động chính và KPI cần theo dõi.",
      detail: "Xác định kênh phục vụ tăng nhận diện thương hiệu, thu hút lead đăng ký khám hay bán hàng trực tiếp.",
    },
    {
      num: "02",
      title: "Xây định vị",
      desc: "Xác định ngách, điểm mạnh, USP, thông điệp và bằng chứng.",
      detail: "Tìm ra điểm khác biệt cốt lõi của phòng khám/chuyên gia để bệnh nhân ghi nhớ ngay lập tức.",
    },
    {
      num: "03",
      title: "Thấu hiểu khách hàng",
      desc: "Phân tích nhu cầu, vấn đề, cảm xúc, mong muốn và rào cản.",
      detail: "Nghiên cứu nỗi đau thầm kín của bệnh nhân để tạo ra thông điệp chạm đúng cảm xúc và nhu cầu.",
    },
    {
      num: "04",
      title: "Tạo từ khóa nghiên cứu",
      desc: "Tìm cách khách hàng thật sự tìm kiếm và đặt câu hỏi.",
      detail: "Chuyển hóa thuật ngữ y khoa phức tạp thành ngôn ngữ tìm kiếm hàng ngày của người dân.",
    },
    {
      num: "05",
      title: "Phân tích thị trường",
      desc: "Bóc bài nổi bật, bình luận, đối thủ và khoảng trống nội dung.",
      detail: "Phân tích các video nhiều tim/comment để tìm ra ngách nội dung đối thủ chưa khai thác.",
    },
    {
      num: "06",
      title: "Xây phễu nội dung",
      desc: "Sắp xếp chủ đề theo Lạnh – Ấm – Nóng.",
      detail: "Xây dựng ma trận nội dung từ nhận biết (Lạnh), cân nhắc (Ấm) đến ra quyết định đến khám (Nóng).",
    },
    {
      num: "07",
      title: "Sáng tạo và sản xuất",
      desc: "Viết chủ đề, kịch bản, Hook, CTA và phân cảnh.",
      detail: "Sử dụng bộ Prompt AI chuẩn y tế để tạo 30 kịch bản video ngắn và bài viết chuẩn kiểm duyệt.",
    },
    {
      num: "08",
      title: "Quản lý và đo lường",
      desc: "Theo dõi nội dung, lead, lịch hẹn, đơn hàng, khách đến và hiệu quả kinh doanh.",
      detail: "Thiết lập bảng theo dõi chỉ số từ view, comment, inbox cho đến số ca khám thực tế.",
    },
  ];

  const handleStepClick = () => {
    trackEvent("roadmap_view", "Roadmap 8 Steps Section");
  };

  return (
    <section id="tam-buoc" className="py-16 md:py-24 bg-[#FFFEFB] border-b border-slate-200/80" onClick={handleStepClick}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <span className="text-xs font-black text-[#0B9693] uppercase tracking-wider bg-teal-50 px-3.5 py-1.5 rounded-full border border-teal-200">
            QUY TRÌNH THỰC CHIẾN CHUẨN YDVN
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0B2D46] tracking-tight leading-snug">
            Lộ trình <span className="text-[#FF4F00]">8 bước</span> <span className="bg-amber-100/80 text-[#0B2D46] px-2 py-0.5 rounded-lg border border-amber-300/60 inline-block">xây kênh y tế 30 ngày</span> cùng <span className="text-[#0B9693]">AI</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Từng bước được thiết kế logic giúp chủ cơ sở và nhân sự cùng áp dụng dễ dàng, không bị ngợp:
          </p>
        </div>

        {/* 8 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div
              key={s.num}
              className="bg-[#FFF1E6]/40 border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-md hover:border-[#0B9693] transition-all flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-slate-200/80 pb-3">
                  <span className="text-2xl font-black text-[#FF4F00] group-hover:scale-110 transition-transform">
                    {s.num}
                  </span>
                  <CheckCircle2 className="w-5 h-5 text-[#0B9693]" />
                </div>
                <h3 className="text-lg font-extrabold text-[#0B2D46] group-hover:text-[#0B9693] transition-colors">
                  {s.title}
                </h3>
                <p className="text-xs font-bold text-slate-800 leading-snug">
                  {s.desc}
                </p>
                <p className="text-xs text-slate-600 leading-relaxed pt-1">
                  {s.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-12 text-center">
          <button
            onClick={() => {
              trackEvent("hero_cta_click", "Roadmap Section Button");
              onRegisterClick();
            }}
            className="inline-flex items-center gap-2 bg-[#FF4F00] hover:bg-[#E04500] text-white font-black text-sm sm:text-base px-8 py-4 rounded-2xl shadow-xl transition-all transform hover:-translate-y-0.5 cursor-pointer"
          >
            <span>BẮT ĐẦU VỚI LỘ TRÌNH 8 BƯỚC – CHI PHÍ 799K</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
};
