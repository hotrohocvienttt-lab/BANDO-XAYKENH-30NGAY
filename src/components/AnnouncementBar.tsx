import React, { useState, useEffect } from "react";
import { Sparkles, CheckCircle2, UserCheck, ChevronRight } from "lucide-react";

interface AnnouncementItem {
  id: number;
  type: "promo" | "buyer";
  title: string;
  badge: string;
  detail?: string;
  location?: string;
  timeAgo?: string;
}

const ANNOUNCEMENTS: AnnouncementItem[] = [
  {
    id: 1,
    type: "promo",
    badge: "ƯU ĐÃI MỞ BÁN",
    title: "GIÁ MỞ BÁN 799.000Đ (GỐC 39.000.000Đ) — TẶNG BUỔI HƯỚNG DẪN TRIỂN KHAI 1:1",
    detail: "Tiết kiệm 98% cho 50 suất đăng ký đầu tiên",
  },
  {
    id: 2,
    type: "buyer",
    badge: "ĐÃ ĐĂNG KÝ",
    title: "DS. Nguyễn Văn Minh",
    location: "TP. Hồ Chí Minh",
    detail: "vừa đăng ký thành công Cẩm Nang 30 Ngày YDVN (799K)",
    timeAgo: "1 phút trước",
  },
  {
    id: 3,
    type: "buyer",
    badge: "ĐÃ ĐĂNG KÝ",
    title: "BS. Lê Thị Thanh Mai",
    location: "Hà Nội",
    detail: "vừa hoàn tất nhận Bộ Công Cụ YDVN",
    timeAgo: "vừa xong",
  },
  {
    id: 4,
    type: "promo",
    badge: "HOT DEAL",
    title: "NHẬN NGAY BỘ 8 BƯỚC + HƠN 20 TÀI LIỆU & FILE MẪU CHUẨN Y KHOA",
    detail: "Cam kết bàn giao đủ file ngay sau khi xác nhận",
  },
  {
    id: 5,
    type: "buyer",
    badge: "ĐÃ ĐĂNG KÝ",
    title: "DS. Phạm Thu Hà",
    location: "Cần Thơ",
    detail: "vừa đăng ký Cẩm Nang & Video Hướng Dẫn",
    timeAgo: "3 phút trước",
  },
  {
    id: 6,
    type: "buyer",
    badge: "ĐÃ ĐĂNG KÝ",
    title: "BS. Trần Hoàng Nam",
    location: "Đà Nẵng",
    detail: "vừa tham gia chương trình Đồng Hành YDVN",
    timeAgo: "5 phút trước",
  },
  {
    id: 7,
    type: "buyer",
    badge: "ĐÃ ĐĂNG KÝ",
    title: "Chủ PK. Lê Quốc Tuấn",
    location: "Bình Dương",
    detail: "vừa nhận trọn bộ tài liệu & file quy trình",
    timeAgo: "2 phút trước",
  },
  {
    id: 8,
    type: "buyer",
    badge: "ĐÃ ĐĂNG KÝ",
    title: "DS. Hoàng Ngọc Bích",
    location: "Thái Nguyên",
    detail: "vừa hoàn tất đăng ký gói Mở Bán 799K",
    timeAgo: "vừa xong",
  },
  {
    id: 9,
    type: "buyer",
    badge: "ĐÃ ĐĂNG KÝ",
    title: "BS. Vũ Thanh Tùng",
    location: "Hải Phòng",
    detail: "vừa nhận quyền truy cập cẩm nang 30 ngày",
    timeAgo: "4 phút trước",
  },
  {
    id: 10,
    type: "buyer",
    badge: "ĐÃ ĐĂNG KÝ",
    title: "DS. Trịnh Thu Hương",
    location: "Đồng Nai",
    detail: "vừa đăng ký thành công Cẩm Nang YDVN",
    timeAgo: "1 phút trước",
  },
];

export const AnnouncementBar: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % ANNOUNCEMENTS.length);
        setIsFading(false);
      }, 300);
    }, 4200);

    return () => clearInterval(interval);
  }, [isPaused]);

  const current = ANNOUNCEMENTS[currentIndex];

  const handleBarClick = () => {
    const el = document.querySelector("#dang-ky");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      onClick={handleBarClick}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="sticky top-0 z-50 bg-[#0B2D46] text-white text-xs sm:text-sm font-medium py-2.5 px-3 border-b border-slate-800 shadow-md cursor-pointer select-none overflow-hidden hover:bg-[#082236] transition-colors"
      title="Bấm để chuyển đến phần đăng ký"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-center min-h-[22px]">
        <div
          className={`flex items-center justify-center flex-wrap gap-x-2 gap-y-1 text-center transition-all duration-300 transform ${
            isFading ? "opacity-0 scale-98 -translate-y-1" : "opacity-100 scale-100 translate-y-0"
          }`}
        >
          {current.type === "promo" ? (
            <>
              <span className="inline-flex items-center gap-1 bg-[#FF4F00] text-white text-[10px] sm:text-xs font-black px-2 py-0.5 rounded-full uppercase tracking-wider shrink-0">
                <Sparkles className="w-3 h-3" />
                {current.badge}
              </span>
              <span className="font-bold text-amber-300">
                {current.title}
              </span>
            </>
          ) : (
            <>
              <span className="inline-flex items-center gap-1 bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-[10px] sm:text-xs font-black px-2 py-0.5 rounded-full uppercase tracking-wider shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <UserCheck className="w-3 h-3 text-emerald-400" />
                {current.badge}
              </span>

              <div className="inline-flex items-center gap-1.5 flex-wrap justify-center">
                <span className="font-black text-amber-300">
                  {current.title}
                </span>
                {current.location && (
                  <span className="text-[11px] sm:text-xs bg-slate-800 text-slate-300 px-1.5 py-0.2 rounded font-semibold">
                    📍 {current.location}
                  </span>
                )}
                <span className="text-slate-200">
                  {current.detail}
                </span>
                {current.timeAgo && (
                  <span className="text-[10px] sm:text-xs text-amber-200/80 italic font-normal">
                    ({current.timeAgo})
                  </span>
                )}
              </div>
            </>
          )}

          <ChevronRight className="w-3.5 h-3.5 text-slate-400 hidden sm:inline-block ml-1 opacity-70 group-hover:translate-x-0.5 transition-transform" />
        </div>
      </div>
    </div>
  );
};

