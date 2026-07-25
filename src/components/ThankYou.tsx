import React, { useState } from "react";
import { CheckCircle2, MessageCircle, ArrowRight, Copy, Check, QrCode } from "lucide-react";
import { CONFIG } from "../config";
import { trackEvent } from "../utils/tracking";

interface ThankYouProps {
  fullName: string;
  phone: string;
}

export const ThankYou: React.FC<ThankYouProps> = ({ fullName, phone }) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const COMPANY_BANK_INFO = {
    bankName: "MB Bank (Ngân hàng Quân Đội)",
    accountNumber: "345118637",
    accountHolder: "CTY TNHH DT KINH DOANH YDVN",
    amountFormatted: "799.000 đ",
    hotlineZalo: "0345.11.86.37"
  };

  const cleanedPhoneStr = phone.replace(/[\s.-]/g, "") || "SDT";
  const cleanedNameStr = fullName.trim() || "Ho va ten";
  const transferContent = `${cleanedPhoneStr} - ${cleanedNameStr} - ban do xay kenh`;
  const qrUrl = `https://img.vietqr.io/image/MB-${COMPANY_BANK_INFO.accountNumber}-compact2.png?amount=799000&addInfo=${encodeURIComponent(transferContent)}&accountName=${encodeURIComponent(COMPANY_BANK_INFO.accountHolder)}`;

  const handleCopy = (text: string, fieldKey: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldKey);
    setTimeout(() => {
      setCopiedField(null);
    }, 2000);
  };

  const handleZaloClick = () => {
    trackEvent("zalo_click", "Thank You Page Zalo Button");
    window.open("https://zalo.me/0345118637", "_blank");
  };

  return (
    <div className="bg-white border-2 border-emerald-500/40 rounded-3xl p-6 sm:p-10 shadow-2xl text-center space-y-6 max-w-2xl mx-auto animate-in zoom-in-95 duration-300">
      <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold mx-auto border border-emerald-300">
        <CheckCircle2 className="w-10 h-10" />
      </div>

      <div className="space-y-2">
        <span className="text-xs font-black text-emerald-600 uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
          ĐĂNG KÝ THÀNH CÔNG
        </span>
        <h3 className="text-2xl sm:text-3xl font-black text-[#0B2D46]">
          YDVN đã ghi nhận thông tin của anh/chị {fullName}!
        </h3>
        <p className="text-slate-600 text-sm sm:text-base">
          Vui lòng hoàn tất thanh toán <strong>{COMPANY_BANK_INFO.amountFormatted}</strong> qua tài khoản công ty bên dưới để nhận ngay bộ cẩm nang & file kích hoạt.
        </p>
      </div>

      {/* MB BANK VIETQR CARD */}
      <div className="bg-slate-50 border-2 border-slate-200 rounded-2xl p-4 sm:p-6 space-y-4 max-w-md mx-auto text-left shadow-md">
        
        <div className="bg-white p-3.5 rounded-xl border border-slate-200/80 space-y-1">
          <p className="text-[10px] font-extrabold text-slate-500 uppercase tracking-wider">Tên Tài Khoản Thụ Hưởng</p>
          <p className="text-sm sm:text-base font-black text-[#0B2D46]">{COMPANY_BANK_INFO.accountHolder}</p>
          <div className="flex items-center justify-between text-xs pt-1 border-t border-slate-100">
            <span className="font-bold text-slate-500">Ngân hàng: <strong>{COMPANY_BANK_INFO.bankName}</strong></span>
            <span className="font-bold text-[#0B9693]">STK: <strong>{COMPANY_BANK_INFO.accountNumber}</strong></span>
          </div>
        </div>

        {/* QR Code */}
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs flex flex-col items-center justify-center space-y-2">
          <div className="flex items-center gap-2 text-xs font-black text-[#1A2B4C] border-b border-slate-100 pb-2 w-full justify-center">
            <span className="w-3 h-3 rounded-full bg-[#1A2B4C]"></span>
            <span className="tracking-widest text-sm">MB BANK</span>
          </div>
          <img
            src={qrUrl}
            alt="VietQR MB Bank"
            className="w-56 h-56 object-contain rounded-md"
          />
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            VietQR™ | Napas 247
          </p>
        </div>

        {/* Copy Details */}
        <div className="space-y-2 text-xs">
          <div className="bg-white p-2.5 rounded-xl border border-slate-200 flex items-center justify-between">
            <div>
              <p className="text-[10px] text-slate-400 font-bold uppercase">Số tài khoản</p>
              <p className="font-black text-slate-900">{COMPANY_BANK_INFO.accountNumber}</p>
            </div>
            <button
              type="button"
              onClick={() => handleCopy(COMPANY_BANK_INFO.accountNumber, "stk")}
              className="px-2.5 py-1 bg-slate-100 hover:bg-[#0B9693] hover:text-white rounded-lg text-xs font-bold transition-all flex items-center gap-1 cursor-pointer"
            >
              {copiedField === "stk" ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedField === "stk" ? "Đã chép" : "Sao chép"}</span>
            </button>
          </div>

          <div className="bg-white p-2.5 rounded-xl border border-slate-200 flex items-center justify-between">
            <div>
              <p className="text-[10px] text-slate-400 font-bold uppercase">Nội dung chuyển khoản</p>
              <p className="font-black text-[#0B2D46]">{transferContent}</p>
            </div>
            <button
              type="button"
              onClick={() => handleCopy(transferContent, "memo")}
              className="px-2.5 py-1 bg-slate-100 hover:bg-[#0B9693] hover:text-white rounded-lg text-xs font-bold transition-all flex items-center gap-1 cursor-pointer"
            >
              {copiedField === "memo" ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedField === "memo" ? "Đã chép" : "Sao chép"}</span>
            </button>
          </div>
        </div>

      </div>

      {/* CTA Button to Zalo */}
      <div className="pt-2">
        <button
          onClick={handleZaloClick}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#0B9693] hover:bg-[#097b78] text-white font-black text-xs sm:text-sm px-6 py-4 rounded-2xl shadow-xl transition-all transform hover:-translate-y-0.5 cursor-pointer text-center"
        >
          <MessageCircle className="w-5 h-5 shrink-0" />
          <span>BẠN VUI LÒNG GỬI BILL CHUYỂN KHOẢN VÀO ZALO 0345.11.86.37 ĐỂ ĐƯỢC KÍCH HOẠT</span>
          <ArrowRight className="w-5 h-5 shrink-0" />
        </button>
      </div>

      <p className="text-xs text-slate-500 italic">
        Hotline / Zalo hỗ trợ trực tiếp: <strong>{COMPANY_BANK_INFO.hotlineZalo}</strong> (Mr. Thành)
      </p>
    </div>
  );
};

