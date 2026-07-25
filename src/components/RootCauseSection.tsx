import React from "react";
import { XCircle, CheckCircle2, ArrowRight } from "lucide-react";

export const RootCauseSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#0B2D46] text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <span className="text-xs font-black text-amber-400 uppercase tracking-widest bg-white/10 px-3.5 py-1.5 rounded-full border border-white/20">
            SO SÁNH PHƯƠNG PHÁP TRIỂN KHAI
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-snug">
            AI không viết dở. Nhân sự cũng chưa chắc yếu. Vấn đề thường nằm ở dữ liệu và cách giao việc.
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Sự khác biệt rõ ràng giữa việc ra lệnh chung chung cho AI và việc cung cấp đúng dữ liệu đầu vào:
          </p>
        </div>

        {/* 2 Column Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Column 1: Generic Prompting */}
          <div className="bg-slate-900/90 border border-red-500/30 rounded-3xl p-6 sm:p-8 space-y-5 relative overflow-hidden">
            <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
              <div className="w-10 h-10 rounded-xl bg-red-500/20 text-red-400 flex items-center justify-center font-bold">
                <XCircle className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-red-400 uppercase tracking-wider block">CÁCH BÌNH THƯỜNG</span>
                <h3 className="text-lg font-black text-white">GIAO VIỆC CHUNG CHUNG</h3>
              </div>
            </div>

            {/* Example prompt */}
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-xs font-mono text-slate-300 italic">
              “Viết cho tôi một video về đau lưng để thu hút khách hàng.”
            </div>

            <div className="space-y-3 text-sm text-slate-300">
              <p className="font-bold text-red-300">Hậu quả trực tiếp:</p>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li className="flex items-start gap-2 text-slate-300">
                  <span className="text-red-400 font-bold shrink-0">✕</span>
                  <span><strong>Không rõ đối tượng:</strong> Bài viết lan man, ai xem cũng được nhưng không ai cần đến khám.</span>
                </li>
                <li className="flex items-start gap-2 text-slate-300">
                  <span className="text-red-400 font-bold shrink-0">✕</span>
                  <span><strong>Không rõ vấn đề:</strong> Nói chung chung về bệnh y khoa thay vì đánh đúng nỗi đau bệnh nhân.</span>
                </li>
                <li className="flex items-start gap-2 text-slate-300">
                  <span className="text-red-400 font-bold shrink-0">✕</span>
                  <span><strong>Không rõ sản phẩm/dịch vụ:</strong> Không thể hiện được giải pháp độc quyền của cơ sở.</span>
                </li>
                <li className="flex items-start gap-2 text-slate-300">
                  <span className="text-red-400 font-bold shrink-0">✕</span>
                  <span><strong>Không có USP & Bằng chứng:</strong> Thiếu lý do vì sao khách hàng phải chọn phòng khám này.</span>
                </li>
                <li className="flex items-start gap-2 text-slate-300">
                  <span className="text-red-400 font-bold shrink-0">✕</span>
                  <span><strong>Không biết mục tiêu:</strong> Đăng bài chỉ để đủ chỉ tiêu số lượng, không đo được tương tác.</span>
                </li>
                <li className="flex items-start gap-2 text-slate-300">
                  <span className="text-red-400 font-bold shrink-0">✕</span>
                  <span><strong>CTA chung chung:</strong> “Hãy liên hệ ngay” không tạo động lực đăng ký khám.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 2: Data-Driven Prompting */}
          <div className="bg-gradient-to-b from-[#0B9693]/20 to-slate-900 border border-[#0B9693]/50 rounded-3xl p-6 sm:p-8 space-y-5 relative overflow-hidden shadow-2xl">
            <div className="flex items-center gap-3 border-b border-teal-800/60 pb-4">
              <div className="w-10 h-10 rounded-xl bg-[#0B9693]/30 text-teal-300 flex items-center justify-center font-bold">
                <CheckCircle2 className="w-6 h-6 text-teal-300" />
              </div>
              <div>
                <span className="text-xs font-bold text-teal-300 uppercase tracking-wider block">PHƯƠNG PHÁP YDVN</span>
                <h3 className="text-lg font-black text-amber-300">GIAO VIỆC BẰNG DỮ LIỆU THẬT</h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-200">
              Cung cấp cho AI đầy đủ 9 tham số dữ liệu chuyên môn chuẩn xác trước khi viết:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-100 font-medium">
              <div className="bg-slate-950/80 p-2.5 rounded-xl border border-teal-800/40">
                <span className="text-amber-300 font-bold">1. Nhóm khách hàng:</span> Tệp cụ thể
              </div>
              <div className="bg-slate-950/80 p-2.5 rounded-xl border border-teal-800/40">
                <span className="text-amber-300 font-bold">2. Độ tuổi & Hoàn cảnh:</span> Chi tiết
              </div>
              <div className="bg-slate-950/80 p-2.5 rounded-xl border border-teal-800/40">
                <span className="text-amber-300 font-bold">3. Vấn đề & Nhu cầu:</span> Cụ thể
              </div>
              <div className="bg-slate-950/80 p-2.5 rounded-xl border border-teal-800/40">
                <span className="text-amber-300 font-bold">4. Dịch vụ ưu tiên:</span> Độc quyền
              </div>
              <div className="bg-slate-950/80 p-2.5 rounded-xl border border-teal-800/40">
                <span className="text-amber-300 font-bold">5. Điểm mạnh thật (USP):</span> Rõ ràng
              </div>
              <div className="bg-slate-950/80 p-2.5 rounded-xl border border-teal-800/40">
                <span className="text-amber-300 font-bold">6. Bằng chứng y khoa:</span> Ca lâm sàng
              </div>
              <div className="bg-slate-950/80 p-2.5 rounded-xl border border-teal-800/40">
                <span className="text-amber-300 font-bold">7. Mức độ nhận thức:</span> Lạnh/Ấm/Nóng
              </div>
              <div className="bg-slate-950/80 p-2.5 rounded-xl border border-teal-800/40">
                <span className="text-amber-300 font-bold">8. Hành động mong muốn:</span> Inbox/Đặt lịch
              </div>
              <div className="bg-slate-950/80 p-2.5 rounded-xl border border-teal-800/40 sm:col-span-2">
                <span className="text-amber-300 font-bold">9. Nguồn lực sản xuất:</span> Thiết bị, nhân sự
              </div>
            </div>

            <div className="pt-2 text-xs font-semibold text-teal-200 flex items-center gap-1.5">
              <ArrowRight className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Kết quả: Bài viết giữ nguyên văn phong y tế, chuẩn SEO, đúng tệp khách hàng.</span>
            </div>
          </div>

        </div>

        {/* Closing Quote */}
        <div className="mt-12 text-center max-w-3xl mx-auto">
          <p className="text-lg sm:text-xl font-bold text-amber-300 leading-snug bg-white/5 p-6 rounded-2xl border border-white/10">
            “AI chỉ phát huy hiệu quả khi được giao đúng dữ liệu, đúng nhiệm vụ và đúng tiêu chuẩn đầu ra.”
          </p>
        </div>

      </div>
    </section>
  );
};
