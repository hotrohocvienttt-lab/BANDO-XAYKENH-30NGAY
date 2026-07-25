import React from "react";
import { AlertCircle, HelpCircle, Users, Bot, Edit3, TrendingDown, UserX, AlertTriangle } from "lucide-react";

interface PainPointItem {
  icon: React.ElementType;
  title: string;
  desc: React.ReactNode;
}

export const PainPointsSection: React.FC = () => {
  const painPoints: PainPointItem[] = [
    {
      icon: HelpCircle,
      title: "1. Không biết phải bắt đầu xây kênh từ đâu",
      desc: (
        <>
          Đã có Facebook, TikTok hoặc Zalo nhưng <span className="font-bold underline underline-offset-2 decoration-red-400">nội dung vẫn rời rạc</span>, không có mục tiêu và thứ tự triển khai rõ ràng.
        </>
      ),
    },
    {
      icon: Users,
      title: "2. Nội dung có người xem nhưng không đúng khách hàng",
      desc: (
        <>
          Video thu hút nhiều người xem nhưng <span className="font-bold underline underline-offset-2 decoration-red-400">ít người phù hợp</span> với sản phẩm, dịch vụ hoặc địa điểm kinh doanh thực tế.
        </>
      ),
    },
    {
      icon: Bot,
      title: "3. AI viết rất nhanh nhưng bài nào cũng giống bài nào",
      desc: (
        <>
          AI chưa được cung cấp <span className="font-bold underline underline-offset-2 decoration-red-400">dữ liệu khách hàng, định vị, USP</span>, bằng chứng chuyên môn và mục tiêu thật.
        </>
      ),
    },
    {
      icon: Edit3,
      title: "4. Chủ cơ sở phải sửa từng bài",
      desc: (
        <>
          Đội ngũ chưa có brief, <span className="font-bold underline underline-offset-2 decoration-red-400">tiêu chuẩn đầu ra và checklist</span> kiểm duyệt chung để tự chủ công việc.
        </>
      ),
    },
    {
      icon: TrendingDown,
      title: "5. Marketing làm nhiều nhưng không rõ chuyển đổi",
      desc: (
        <>
          Chỉ theo dõi lượt xem, <span className="font-bold underline underline-offset-2 decoration-red-400">không nối được nội dung</span> với inbox, lead, lịch hẹn hay doanh thu thực tế.
        </>
      ),
    },
    {
      icon: UserX,
      title: "6. Nhân sự nghỉ là gần như phải làm lại",
      desc: (
        <>
          Kiến thức nằm trong đầu từng người, <span className="font-bold underline underline-offset-2 decoration-red-400">chưa được hệ thống hóa</span> thành tài liệu và quy trình bàn giao chuẩn.
        </>
      ),
    },
  ];

  return (
    <section id="vi-sao-can" className="py-16 md:py-24 bg-[#FFF1E6]/50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-2 bg-[#0B2D46]/10 text-[#0B2D46] px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider">
            <AlertCircle className="w-4 h-4 text-[#FF4F00]" />
            <span>NHẬN DIỆN VẤN ĐỀ THỰC TẾ</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#201515] tracking-tight">
            Có thể anh chị đang gặp một hoặc nhiều tình trạng này
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Những khó khăn phổ biến nhất của các phòng khám, nhà thuốc, spa và chuyên gia y tế khi cố gắng tự phát triển kênh nội dung:
          </p>
        </div>

        {/* 6 Pain points Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {painPoints.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-[#FF4F00]/40 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-11 h-11 rounded-xl bg-[#FFF1E6] text-[#FF4F00] flex items-center justify-center font-bold shrink-0 border border-amber-200">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-extrabold text-[#0B2D46] leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Concluding Statement Box */}
        <div className="mt-12 max-w-4xl mx-auto bg-[#0B2D46] text-white rounded-3xl p-6 sm:p-8 shadow-xl text-center relative overflow-hidden border border-slate-800">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#FF4F00] text-white flex items-center justify-center font-bold shrink-0 shadow-lg shadow-[#FF4F00]/20">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <p className="text-base sm:text-lg font-bold text-amber-200 leading-relaxed max-w-2xl text-left sm:text-center">
              “Điều đáng tiếc nhất không chỉ là <span className="underline underline-offset-4 decoration-amber-400 decoration-2 text-white">tiền quảng cáo</span>. Đó là nhiều tháng đội ngũ làm việc nhưng <span className="underline underline-offset-4 decoration-amber-400 decoration-2 text-white">không tạo được một hệ thống</span> có thể tiếp tục sử dụng.”
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
