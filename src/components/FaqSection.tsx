import React, { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "1. Người không biết Marketing có dùng được không?",
      a: "CÓ. Bộ cẩm nang được viết bằng ngôn ngữ thực tế, ngắn gọn, không dùng thuật ngữ rườm rà. Anh chị chỉ cần điền thông tin phòng khám vào mẫu và dùng câu lệnh Prompt AI có sẵn để tạo nội dung.",
    },
    {
      q: "2. Có thể mua cho nhân viên học và triển khai không?",
      a: "RẤT TỐT. Đây là mục đích chính của bộ công cụ. Chủ cơ sở có thể giao trực tiếp Workbook và Content Calendar cho nhân viên Marketing để họ tự làm theo quy trình mà không phải hỏi 'Hôm nay đăng gì?' nữa.",
    },
    {
      q: "3. Nhân viên mới chưa có kinh nghiệm y tế có áp dụng được không?",
      a: "CÓ. Bộ checklist kiểm duyệt giúp nhân viên mới biết chính xác bài viết cần đáp ứng tiêu chuẩn gì về thuật ngữ, hình ảnh và cam kết trước khi trình bác sĩ/chủ cơ sở duyệt.",
    },
    {
      q: "4. Có cam kết tạo ra khách hàng hoặc doanh thu cụ thể không?",
      a: "KHÔNG. YDVN cung cấp đúng phương pháp, công cụ chuẩn và quy trình đo lường. Doanh thu thực tế phụ thuộc vào chất lượng dịch vụ, tay nghề chuyên môn và độ kiên trì triển khai của cơ sở.",
    },
    {
      q: "5. AI có tự làm và tự đăng toàn bộ không?",
      a: "KHÔNG. AI là công cụ gia tăng tốc độ viết kịch bản. Nội dung y tế liên quan trực tiếp đến sức khỏe con người nên bắt buộc phải qua sự kiểm duyệt chuyên môn của bác sĩ hoặc chủ cơ sở.",
    },
    {
      q: "6. Nếu không tham gia buổi Zoom đúng lịch thì sao?",
      a: "Anh chị có thể xem lại video ghi hình Replay của buổi Workshop trọn đời hoặc đăng ký tham gia buổi Zoom onboarding ở tuần kế tiếp.",
    },
    {
      q: "7. Người ở ngoài TP.HCM có bị thiếu quyền lợi so với Offline không?",
      a: "KHÔNG. Toàn bộ kiến thức, bài tập và công cụ cốt lõi đều được truyền tải đầy đủ qua bộ tài liệu và buổi Workshop Zoom. Buổi Offline tại TP.HCM chỉ là buổi giao lưu hỏi đáp thêm.",
    },
    {
      q: "8. Đây có phải dịch vụ YDVN đứng ra làm thay toàn bộ không?",
      a: "KHÔNG. Sản phẩm 799.000Đ là Bộ Cẩm Nang & Công Cụ Hướng Dẫn Tự Triển Khai. Nếu cơ sở có nhu cầu thuê YDVN tư vấn riêng 1:1, đào tạo nội bộ hoặc làm dịch vụ agency trọn gói, Team YDVN sẽ tư vấn giải pháp riêng.",
    },
  ];

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="hoi-dap" className="py-16 md:py-24 bg-[#FFF1E6]/40 border-b border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-12">
          <span className="text-xs font-black text-[#0B2D46] uppercase tracking-wider bg-white px-3.5 py-1.5 rounded-full border border-amber-200 inline-flex items-center gap-1.5">
            <HelpCircle className="w-4 h-4 text-[#FF4F00]" />
            <span>GIẢI ĐÁP THẮC MẮC TRỰC TIẾP</span>
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0B2D46] tracking-tight">
            Câu hỏi thường gặp về Bộ Cẩm Nang 799K
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Trả lời thẳng thắn, minh bạch giúp anh chị yên tâm trước khi đăng ký:
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-white border-2 border-slate-200 rounded-2xl overflow-hidden transition-all shadow-sm"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50 transition-colors"
                >
                  <span className="text-base sm:text-lg font-bold text-[#0B2D46]">
                    {faq.q}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#FFF1E6] text-[#FF4F00] flex items-center justify-center shrink-0 border border-amber-200">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="p-5 pt-0 text-sm sm:text-base text-slate-700 border-t border-slate-100 bg-[#FFFEFB] leading-relaxed animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
