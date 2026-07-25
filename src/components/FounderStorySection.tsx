import React from "react";
import { Quote } from "lucide-react";

export const FounderStorySection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#FFFEFB] border-b border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center space-y-3 mb-10">
          <span className="text-xs font-black text-[#0B9693] uppercase tracking-wider bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
            GÓC NHÌN NGƯỜI SÁNG LẬP
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0B2D46] tracking-tight leading-snug">
            Vì sao Thành lại ngồi làm một bộ cẩm nang chi tiết để hướng dẫn đội ngũ y tế xây kênh?
          </h2>
        </div>

        {/* Editorial Essay Format */}
        <div className="prose prose-lg max-w-none text-[#201515] space-y-6 text-base sm:text-lg leading-relaxed font-normal">
          <p>
            Trong nhiều năm làm Marketing và vận hành cho các mô hình y tế, Thành thấy một tình trạng lặp đi lặp lại.
          </p>

          <div className="bg-[#FFF1E6]/80 p-5 rounded-2xl border-l-4 border-[#0B2D46] space-y-2 text-sm sm:text-base font-semibold text-[#0B2D46]">
            <p>✓ Bác sĩ và dược sĩ có chuyên môn.</p>
            <p>✓ Chủ cơ sở hiểu khách hàng.</p>
            <p>✓ Nhân sự có máy quay, phần mềm và bây giờ còn có cả AI.</p>
          </div>

          <p className="font-bold text-lg text-[#FF4F00]">
            Nhưng mỗi ngày đội ngũ vẫn hỏi: Hôm nay đăng gì?
          </p>

          <p>
            AI có thể viết rất nhanh. Nhưng nếu không có dữ liệu thật, nội dung vẫn chung chung và cơ sở nào cũng có thể dùng được.
          </p>

          <p>
            Chủ cơ sở vẫn phải sửa từng bài. Marketing báo có lượt xem, nhưng bộ phận Sale lại nói không có khách phù hợp. Khi một nhân sự nghỉ, gần như mọi thứ phải bắt đầu lại từ đầu.
          </p>

          <p>
            Lúc đó, Thành nhận ra: <strong>Cơ sở y tế không thiếu kiến thức để nói.</strong> Đội ngũ đang thiếu một bản đồ để biết phải nói gì, nói với ai, sử dụng dữ liệu nào và dẫn người xem đi đâu.
          </p>

          <p>
            Vì vậy, Thành gom toàn bộ cách đội ngũ YDVN đang triển khai thành một quy trình tám bước. Không phải để AI làm thay con người, mà để chủ cơ sở, chuyên gia và nhân sự có cùng một cách hiểu, cùng một cách giao việc và cùng một hệ thống đo kết quả.
          </p>
        </div>

        {/* Highlight Callout Box */}
        <div className="mt-10 border-insight p-6 sm:p-8 rounded-r-3xl shadow-md relative">
          <Quote className="w-10 h-10 text-[#FF4F00]/20 absolute top-4 right-4" />
          <p className="text-lg sm:text-xl md:text-2xl font-black text-[#201515] leading-snug">
            “Không thiếu chuyên môn. Đang thiếu một hệ thống biến chuyên môn thành nội dung có mục tiêu.”
          </p>
          <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mt-3">
            — Nguyễn Phương Thành (Founder YDVN.VN)
          </p>
        </div>

      </div>
    </section>
  );
};
