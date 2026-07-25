import React from "react";
import { BookOpen, Database, Sparkles, Calendar, CheckSquare, BarChart3, ArrowRight } from "lucide-react";
import { trackEvent } from "../utils/tracking";

interface ProductStackProps {
  onRegisterClick: () => void;
}

export const ProductStackSection: React.FC<ProductStackProps> = ({ onRegisterClick }) => {
  const stackItems = [
    {
      num: "01",
      icon: BookOpen,
      title: "EDITORIAL WORKBOOK",
      subtitle: "Bản đồ xây kênh y tế 30 ngày thực chiến cùng AI",
      desc: "Tài liệu thực hành cốt lõi gồm quy trình 8 bước, phần giải thích tư duy chuẩn y tế, khung chuẩn bị dữ liệu, bài tập áp dụng, Prompt AI mẫu và checklist bàn giao.",
      tag: "CẨM NANG CỐT LÕI",
    },
    {
      num: "02",
      icon: Database,
      title: "THƯ VIỆN 50+ PROMPT AI Y TẾ",
      subtitle: "Bộ câu lệnh tối ưu riêng cho ngành Y - Dược & Sức Khỏe",
      desc: "Prompt đã được kiểm định thực tế cho nghiên cứu khách hàng, tìm USP, tạo chủ đề video ngắn, viết bài fanpage, tạo Hook/CTA và chăm sóc bệnh nhân.",
      tag: "PROMPT COMMANDS",
    },
    {
      num: "03",
      icon: Sparkles,
      title: "KHO 100+ CÔNG THỨC HOOK",
      subtitle: "Bộ mở đầu video ngắn giữ chân bệnh nhân trong 3 giây đầu",
      desc: "Phân chia theo 8 dạng: Gọi đối tượng, Tò mò, Thay đổi nhận thức, Đồng cảm, Case study, Con số, Thương hiệu chuyên gia và Chuyển đổi đặt lịch.",
      tag: "HOOK FORMULAS",
    },
    {
      num: "04",
      icon: Calendar,
      title: "CONTENT CALENDAR 30 NGÀY",
      subtitle: "Lịch biên tập và quản lý tiến độ sản xuất nội dung",
      desc: "File quản lý sẵn mẫu: Chủ đề, tuyến Lạnh-Ấm-Nóng, mục tiêu, CTA, người thực hiện, người duyệt chuyên môn, trạng thái và link thành phẩm.",
      tag: "MANAGEMENT TEMPLATE",
    },
    {
      num: "05",
      icon: CheckSquare,
      title: "CHECKLIST KIỂM DUYỆT",
      subtitle: "Bộ tiêu chuẩn an toàn cho kênh nội dung Y tế",
      desc: "Kiểm soát chặt chẽ: Độ chính xác chuyên môn, dữ kiện khoa học, ngôn ngữ cam kết quảng cáo, hình ảnh nhạy cảm, quyền riêng tư bệnh nhân và lỗi chính tả.",
      tag: "QUALITY CHECKLIST",
    },
    {
      num: "06",
      icon: BarChart3,
      title: "BẢNG ĐO LƯỜNG VÀ DỮ LIỆU",
      subtitle: "Bảng kết nối nội dung với hiệu quả kinh doanh thực tế",
      desc: "Theo dõi chính xác: Nội dung đăng -> Lượt xem -> Inbox/Comment -> Lead -> Lịch hẹn -> Khách đến cơ sở -> Đơn hàng -> Doanh thu thực tế.",
      tag: "PERFORMANCE TRACKER",
    },
  ];

  const handleSectionClick = () => {
    trackEvent("product_stack_view", "Product Stack Section");
  };

  return (
    <section id="bo-cong-cu" className="py-16 md:py-24 bg-[#FFFEFB] border-b border-slate-200/80" onClick={handleSectionClick}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <span className="text-xs font-black text-[#FF4F00] uppercase tracking-wider bg-amber-50 px-3.5 py-1.5 rounded-full border border-amber-200">
            TRỌN BỘ SẢN PHẨM & CÔNG CỤ
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0B2D46] tracking-tight leading-snug">
            Anh chị nhận được những gì trong Bộ Triển Khai này?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Toàn bộ 6 thành phần được thiết kế như một hệ thống vận hành hoàn chỉnh:
          </p>
        </div>

        {/* Product Stack Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stackItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.num}
                className="bg-white border-2 border-slate-200 hover:border-[#0B9693] rounded-3xl p-6 sm:p-7 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between group relative overflow-hidden"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#0B2D46] text-white flex items-center justify-center font-bold shadow-md">
                      <Icon className="w-6 h-6 text-amber-400" />
                    </div>
                    <span className="text-xs font-black bg-[#FFF1E6] text-[#FF4F00] px-2.5 py-1 rounded-full uppercase tracking-wider border border-amber-200">
                      {item.tag}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-black text-[#0B2D46] group-hover:text-[#0B9693] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs font-bold text-[#FF4F00] mt-0.5">
                      {item.subtitle}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] font-bold text-slate-400 flex items-center justify-between">
                  <span>MÔ ĐUN #{item.num}</span>
                  <span className="text-[#0B9693]">Bàn giao file số</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-14 bg-gradient-to-r from-[#0B2D46] to-slate-900 text-white rounded-3xl p-8 sm:p-10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-800">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-black text-amber-300">
              Sở Hữu Trọn Bộ 6 Công Cụ Thực Chiến Cùng YDVN
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Nhận file truy cập ngay sau khi hoàn tất xác nhận đăng ký 799.000Đ.
            </p>
          </div>
          <button
            onClick={() => {
              trackEvent("hero_cta_click", "Product Stack CTA Button");
              onRegisterClick();
            }}
            className="w-full md:w-auto bg-[#FF4F00] hover:bg-[#E04500] text-white font-black text-sm sm:text-base px-8 py-4 rounded-2xl shadow-xl transition-all transform hover:-translate-y-0.5 cursor-pointer shrink-0 flex items-center justify-center gap-2"
          >
            <span>ĐĂNG KÝ NGAY 799K</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
};
