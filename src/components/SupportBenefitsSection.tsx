import React from "react";
import { Video, MapPin, CheckCircle, Info, Clock, Users } from "lucide-react";
import { CONFIG } from "../config";

export const SupportBenefitsSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#FFF1E6]/40 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <span className="text-xs font-black text-[#0B2D46] uppercase tracking-wider bg-white px-3.5 py-1.5 rounded-full border border-amber-200">
            QUYỀN LỢI ĐỒNG HÀNH KÈM THEO
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0B2D46] tracking-tight leading-snug">
            Không chỉ nhận tài liệu — anh chị được hướng dẫn cách bắt đầu
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Workshop Zoom hoặc gặp gỡ Offline là quyền lợi hướng dẫn thực hành theo nhóm giúp anh chị tạo ra kết quả đầu tiên nhanh nhất:
          </p>
        </div>

        {/* 2 Main Benefits Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Benefit 1: Workshop Zoom */}
          <div className="bg-white border-2 border-slate-200 rounded-3xl p-6 sm:p-8 space-y-5 shadow-sm relative overflow-hidden flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#0B2D46] text-amber-400 flex items-center justify-center font-bold">
                    <Video className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#0B9693] uppercase tracking-wider block">QUYỀN LỢI 1</span>
                    <h3 className="text-xl font-black text-[#0B2D46]">WORKSHOP ZOOM ONBOARDING</h3>
                  </div>
                </div>
                <span className="text-xs font-extrabold bg-teal-50 text-[#0B9693] px-3 py-1 rounded-full border border-teal-200">
                  ONLINE HÀNG TUẦN
                </span>
              </div>

              <p className="text-sm font-semibold text-slate-800 leading-relaxed">
                “Mỗi tuần, YDVN bố trí một buổi Zoom onboarding theo lịch công bố dành cho người đăng ký mới.”
              </p>

              <div className="space-y-2 text-xs sm:text-sm text-slate-600">
                <p className="font-bold text-[#0B2D46]">Nội dung hướng dẫn chính trong buổi Zoom:</p>
                <ul className="space-y-1.5 pl-1">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#0B9693] shrink-0 mt-0.5" />
                    <span>Cách sử dụng bộ tài liệu & công cụ hiệu quả nhất.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#0B9693] shrink-0 mt-0.5" />
                    <span>Cách chọn bước cần làm trước phù hợp với hiện trạng cơ sở.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#0B9693] shrink-0 mt-0.5" />
                    <span>Cách điền dữ liệu thật của phòng khám vào mẫu.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#0B9693] shrink-0 mt-0.5" />
                    <span>Cách ra lệnh cho AI sinh kịch bản chuẩn y tế.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#0B9693] shrink-0 mt-0.5" />
                    <span>Giải đáp thắc mắc và kiểm tra bài tập theo nhóm.</span>
                  </li>
                </ul>
              </div>

              {CONFIG.replayEnabled && (
                <div className="bg-teal-50 border border-teal-200 p-3 rounded-xl text-xs text-[#0B9693] font-bold flex items-center gap-2">
                  <Clock className="w-4 h-4 shrink-0" />
                  <span>Có quyền xem lại nội dung Workshop trọn đời.</span>
                </div>
              )}
            </div>

            <div className="pt-4 border-t border-slate-100 text-xs text-slate-500 space-y-1">
              <p>• Mỗi người mua được đăng ký 01 buổi onboarding phù hợp.</p>
              <p>• Đây là buổi hướng dẫn nhóm, không phải tư vấn riêng 1:1.</p>
            </div>
          </div>

          {/* Benefit 2: Offline HCMC */}
          <div className="bg-white border-2 border-slate-200 rounded-3xl p-6 sm:p-8 space-y-5 shadow-sm relative overflow-hidden flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#FF4F00] text-white flex items-center justify-center font-bold">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#FF4F00] uppercase tracking-wider block">QUYỀN LỢI 2</span>
                    <h3 className="text-xl font-black text-[#0B2D46]">GIAO LƯU OFFLINE TP.HCM</h3>
                  </div>
                </div>
                <span className="text-xs font-extrabold bg-amber-50 text-[#FF4F00] px-3 py-1 rounded-full border border-amber-200">
                  TẠI TP. HỒ CHÍ MINH
                </span>
              </div>

              <p className="text-sm font-semibold text-slate-800 leading-relaxed">
                “Người mua tại TP.HCM có thể đăng ký buổi giao lưu và hỏi đáp trực tiếp theo lịch YDVN công bố.”
              </p>

              <div className="bg-amber-50 border border-amber-200 p-4 rounded-2xl space-y-2 text-xs sm:text-sm text-slate-800 font-medium">
                <div className="flex items-center gap-2 font-bold text-[#FF4F00]">
                  <Users className="w-4 h-4" />
                  <span>Giới hạn tối đa 10 người / buổi</span>
                </div>
                <p className="text-slate-700">
                  Buổi gặp gỡ giúp các chủ cơ sở, bác sĩ và dược sĩ tại TP.HCM kết nối trực tiếp với Founder Thành Thật Thà để hỏi đáp chuyên sâu về định vị và quy trình xây kênh.
                </p>
              </div>

              <div className="space-y-1.5 text-xs text-slate-600">
                <p className="font-bold text-[#0B2D46]">Quy định tham gia Offline:</p>
                <p>• Cần đăng ký trước qua Zalo xác nhận của YDVN.</p>
                <p>• Ưu tiên xếp chỗ theo thứ tự xác nhận hoàn tất đăng ký.</p>
                <p>• Không phải dịch vụ tư vấn riêng độc quyền cho một cơ sở.</p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 text-xs text-slate-500 italic flex items-center gap-1.5">
              <Info className="w-4 h-4 text-slate-400 shrink-0" />
              <span>*YDVN thông báo lịch tổ chức khi đủ số lượng học viên đăng ký tại TP.HCM.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
