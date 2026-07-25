import React from "react";
import { CheckCircle2, XCircle } from "lucide-react";

export const AudienceSection: React.FC = () => {
  const suitable = [
    "Chủ phòng khám, nhà thuốc, spa muốn chuẩn hóa quy trình giao việc cho đội ngũ.",
    "Bác sĩ, dược sĩ và chuyên gia y tế muốn tự xây dựng thương hiệu cá nhân uy tín.",
    "Nhân sự Marketing mới tiếp nhận kênh y tế cần bộ khung lộ trình thực chiến.",
    "Người đã dùng AI nhưng nội dung ra chung chung, bài nào cũng giống bài nào.",
    "Cơ sở đang đăng nội dung đều đặn nhưng chưa đo lường được chuyển đổi ra lead/lịch hẹn.",
    "Chủ cơ sở muốn mua bộ công cụ để đào tạo và bàn giao cho nhân viên thực hiện.",
  ];

  const unsuitable = [
    "Chỉ tìm kiếm vài câu Hook giật gân để đăng thử mà không có chiến lược.",
    "Không sẵn sàng cung cấp dữ liệu thật (USP, case lâm sàng, tệp bệnh nhân) cho AI.",
    "Kỳ vọng AI tự nghĩ, tự viết và tự đăng toàn bộ 100% không cần người duyệt chuyên môn.",
    "Muốn sao chép hoàn toàn nguyên mẫu kênh đối thủ mà không xây định vị riêng.",
    "Chỉ quan tâm đến chỉ số lượt xem (view) ảo mà không quan tâm đến chuyển đổi khám thực tế.",
    "Muốn cam kết chắc chắn 100% doanh thu hoặc số lượng bệnh nhân.",
    "Muốn YDVN làm thay toàn bộ dịch vụ agency với mức giá 799.000 đồng.",
  ];

  return (
    <section className="py-16 md:py-24 bg-[#FFFEFB] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <span className="text-xs font-black text-[#0B9693] uppercase tracking-wider bg-teal-50 px-3.5 py-1.5 rounded-full border border-teal-200">
            XÁC ĐỊNH MỤC TIÊU MUA HÀNG
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0B2D46] tracking-tight">
            Bộ sản phẩm này có phù hợp với anh chị?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Thành chia sẻ thẳng thắn để anh chị cân nhắc kỹ trước khi quyết định đăng ký:
          </p>
        </div>

        {/* 2 Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Column 1: Suitable */}
          <div className="bg-teal-50/50 border-2 border-teal-200 rounded-3xl p-6 sm:p-8 space-y-5">
            <div className="flex items-center gap-3 border-b border-teal-200 pb-4">
              <div className="w-10 h-10 rounded-xl bg-[#0B9693] text-white flex items-center justify-center font-bold">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-[#0B2D46]">
                RẤT PHÙ HỢP VỚI ANH CHỊ NẾU:
              </h3>
            </div>

            <ul className="space-y-3">
              {suitable.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-800 font-semibold leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-[#0B9693] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Unsuitable */}
          <div className="bg-amber-50/50 border-2 border-amber-200 rounded-3xl p-6 sm:p-8 space-y-5">
            <div className="flex items-center gap-3 border-b border-amber-200 pb-4">
              <div className="w-10 h-10 rounded-xl bg-[#FF4F00] text-white flex items-center justify-center font-bold">
                <XCircle className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-[#0B2D46]">
                KHÔNG PHÙ HỢP NẾU ANH CHỊ:
              </h3>
            </div>

            <ul className="space-y-3">
              {unsuitable.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                  <XCircle className="w-4 h-4 text-[#FF4F00] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};
