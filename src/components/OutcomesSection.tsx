import React from "react";
import { CheckCircle, ShieldCheck } from "lucide-react";

export const OutcomesSection: React.FC = () => {
  const outcomes = [
    "Một mục tiêu xây kênh rõ ràng và đo lường được",
    "Một nhóm sản phẩm hoặc dịch vụ ưu tiên tạo doanh số",
    "Một đến hai chân dung khách hàng bệnh nhân mục tiêu",
    "Một câu định vị thương hiệu y tế ngắn gọn, độc đáo",
    "Bộ USP điểm mạnh thật sự có bằng chứng kiểm chứng",
    "Kho từ khóa nghiên cứu theo ngôn ngữ bệnh nhân",
    "30 chủ đề nội dung phân bổ theo phễu Lạnh – Ấm – Nóng",
    "Kịch bản video ngắn và bài viết chuẩn y tế",
    "Bộ công thức Hook thu hút và lời kêu gọi hành động CTA",
    "Bảng phân cảnh chi tiết cho bộ phận quay dựng",
    "Lịch biên tập Content Calendar 30 ngày sẵn sàng giao việc",
    "Checklist kiểm duyệt chuyên môn & Bảng đo lường kết quả",
  ];

  return (
    <section className="py-16 md:py-24 bg-[#FFF1E6]/60 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <span className="text-xs font-black text-[#0B2D46] uppercase tracking-wider bg-white px-3.5 py-1.5 rounded-full border border-amber-200">
            KẾT QUẢ ĐẦU RA THỰC TẾ
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B2D46] tracking-tight leading-snug">
            Sau khi triển khai, anh chị không chỉ có thêm ý tưởng. Anh chị có một hệ thống làm việc.
          </h2>
          <p className="text-slate-700 text-sm sm:text-base">
            12 tài sản truyền thông được hoàn thành trực tiếp cho phòng khám/cơ sở của anh chị:
          </p>
        </div>

        {/* 12 Outcomes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {outcomes.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-amber-200/80 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all flex items-start gap-3.5"
            >
              <div className="w-8 h-8 rounded-xl bg-teal-50 text-[#0B9693] flex items-center justify-center font-bold shrink-0 border border-teal-200 mt-0.5">
                <CheckCircle className="w-5 h-5 text-[#0B9693]" />
              </div>
              <p className="text-sm font-extrabold text-[#201515] leading-snug">
                {item}
              </p>
            </div>
          ))}
        </div>

        {/* Callout Footer */}
        <div className="mt-10 text-center max-w-2xl mx-auto bg-white p-4 rounded-2xl border border-slate-200 text-xs sm:text-sm font-semibold text-[#0B2D46]">
          <ShieldCheck className="w-5 h-5 text-[#0B9693] inline mr-1.5" />
          <span>Tất cả tài liệu và mẫu biểu đều có thể bàn giao trực tiếp cho nhân viên Marketing hoặc ê-kíp quay dựng triển khai ngay.</span>
        </div>

      </div>
    </section>
  );
};
