export interface YdvnConfig {
  brandName: string;
  productName: string;

  currentPrice: number;
  totalValue: number;
  currency: string;

  checkoutUrl: string;
  zaloUrl: string;

  logoUrl: string;
  founderImageUrl: string;
  teamImageUrl: string;
  productCoverUrl: string;
  workshopImageUrl: string;
  heroVideoUrl?: string;

  showTotalValue: boolean;
  showScarcity: boolean;
  remainingSlots: number | null;

  zoomEnabled: boolean;
  offlineEnabled: boolean;
  replayEnabled: boolean;

  googleSheetScriptUrl?: string;

  legalName: string;
  taxCode?: string;
  address?: string;
  hotline: string;
  email: string;
}

export const CONFIG: YdvnConfig = {
  brandName: "YDVN.VN",
  productName: "BẢN ĐỒ XÂY KÊNH Y TẾ 30 NGÀY THỰC CHIẾN CÙNG AI",

  currentPrice: 799000,
  totalValue: 39000000,
  currency: "VND",

  checkoutUrl: "",
  zaloUrl: "https://zalo.me/0345118637",

  logoUrl: "/uploads/logo-ydvn.png",
  founderImageUrl: "/uploads/anh-dai-dien-anh-thanh.jpeg",
  teamImageUrl: "/uploads/su-kien-team-2024.jpg",
  productCoverUrl: "/uploads/gioi-thieu-ve-thanh-that-tha.png",
  workshopImageUrl: "/uploads/anh-thanh-dao-tao-online.jpg",
  heroVideoUrl: "https://youtu.be/VbfW-yBNNnE",

  showTotalValue: false,
  showScarcity: false,
  remainingSlots: null,

  zoomEnabled: true,
  offlineEnabled: true,
  replayEnabled: true,

  // URL Google Apps Script Web App đã triển khai
  googleSheetScriptUrl: "https://script.google.com/macros/s/AKfycbwoR0NqEeYhSpByz13jMdF3hc773upWXJxp9fKXHkySTQUT61GbO6zL0GFkYpsU2fnA/exec",

  legalName: "Công ty TNHH Đào Tạo Kinh Doanh YDVN",
  taxCode: "3703362601",
  address: "139 đường số 1, khu dân cư Xe Lửa, Phường Dĩ An, TP Hồ Chí Minh, Việt Nam",
  hotline: "0345.11.86.37",
  email: "YDVNVIETNAM@GMAIL.COM"
};
