import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// In-memory leads storage for demo & lead management with sequential STT order
interface Lead {
  stt: number;
  id: string;
  fullName: string;
  phone: string;
  email: string;
  role: string;
  organization: string;
  city: string;
  packageChoice: string;
  workshopAttendance: boolean;
  offlineHcmcInterest: boolean;
  notes?: string;
  createdAt: string;
}

const leadsDatabase: Lead[] = [
  {
    stt: 1,
    id: "lead_101",
    fullName: "BS. CKI. Nguyễn Văn Minh",
    phone: "0908***456",
    email: "dr.minh@phongkhamnhikhoa.vn",
    role: "Chủ phòng khám",
    organization: "Phòng Khám Nhi Đồng Sài Gòn",
    city: "TP. Hồ Chí Minh",
    packageChoice: "VIP - Offline TP.HCM",
    workshopAttendance: true,
    offlineHcmcInterest: true,
    notes: "Đã cọc giữ suất Offline TP.HCM",
    createdAt: new Date(Date.now() - 1000 * 60 * 5).toISOString(), // 5 min ago
  },
  {
    stt: 2,
    id: "lead_102",
    fullName: "ThS. DS. Lê Thị Hồng",
    phone: "0987***321",
    email: "ds.hong.pharmacy@gmail.com",
    role: "Dược sĩ / Chủ nhà thuốc",
    organization: "Chuỗi Nhà Thuốc An Tâm",
    city: "Đà Nẵng",
    packageChoice: "Gói Thực Chiến 30 Ngày",
    workshopAttendance: true,
    offlineHcmcInterest: false,
    notes: "Đã hoàn thành đăng ký Zoom",
    createdAt: new Date(Date.now() - 1000 * 60 * 18).toISOString(), // 18 min ago
  },
  {
    stt: 3,
    id: "lead_103",
    fullName: "BS. Hoàng Đức Trung",
    phone: "0912***889",
    email: "dr.trung.dalieu@gmail.com",
    role: "Bác sĩ Da liễu / Lão hóa",
    organization: "Phòng Khám Thẩm Mỹ Da Trung Dr.",
    city: "Hà Nội",
    packageChoice: "VIP - Offline TP.HCM",
    workshopAttendance: true,
    offlineHcmcInterest: true,
    notes: "Đăng ký bay vào TP.HCM học Offline",
    createdAt: new Date(Date.now() - 1000 * 60 * 42).toISOString(), // 42 min ago
  },
  {
    stt: 4,
    id: "lead_104",
    fullName: "DS. Trần Mai Phương",
    phone: "0934***112",
    email: "maiphuong.pharmacy@gmail.com",
    role: "Chủ nhà thuốc",
    organization: "Nhà Thuốc Phương Mai 24/7",
    city: "Bình Dương",
    packageChoice: "Gói Thực Chiến 30 Ngày",
    workshopAttendance: true,
    offlineHcmcInterest: false,
    notes: "Đã giữ suất thành công",
    createdAt: new Date(Date.now() - 1000 * 60 * 75).toISOString(),
  },
  {
    stt: 5,
    id: "lead_105",
    fullName: "BS. CKI. Đỗ Tuấn Anh",
    phone: "0978***554",
    email: "tuananh.taimuihong@gmail.com",
    role: "Bác sĩ Tai Mũi Họng",
    organization: "Phòng Khám TMH Tuấn Anh",
    city: "TP. Hồ Chí Minh",
    packageChoice: "VIP - Offline TP.HCM",
    workshopAttendance: true,
    offlineHcmcInterest: true,
    notes: "Đã chuyển khoản giữ suất VIP",
    createdAt: new Date(Date.now() - 1000 * 60 * 120).toISOString(),
  },
  {
    stt: 6,
    id: "lead_106",
    fullName: "ThS. BS. Phạm Ngọc Bích",
    phone: "0903***778",
    email: "ngocbich.sannhi@gmail.com",
    role: "Bác sĩ Sản Nhi",
    organization: "Phòng Khám Sản Nhi Phúc An",
    city: "Cần Thơ",
    packageChoice: "Gói Thực Chiến 30 Ngày",
    workshopAttendance: true,
    offlineHcmcInterest: false,
    notes: "Đăng ký tham gia qua Zoom",
    createdAt: new Date(Date.now() - 1000 * 60 * 180).toISOString(),
  },
  {
    stt: 7,
    id: "lead_107",
    fullName: "BS. Răng Hàm Mặt Vũ Thanh Nam",
    phone: "0982***665",
    email: "dr.nam.nhakhoa@gmail.com",
    role: "Chủ Nha khoa",
    organization: "Nha Khoa Thẩm Mỹ Nam Smile",
    city: "Hải Phòng",
    packageChoice: "Gói Thực Chiến 30 Ngày",
    workshopAttendance: true,
    offlineHcmcInterest: false,
    notes: "Đã nhận mã tham gia Zoom",
    createdAt: new Date(Date.now() - 1000 * 60 * 240).toISOString(),
  },
  {
    stt: 8,
    id: "lead_108",
    fullName: "DS. CK1. Nguyễn Thị Thu Trang",
    phone: "0945***990",
    email: "thutrang.duoc@gmail.com",
    role: "Dược sĩ Lâm sàng",
    organization: "Chuỗi Nhà Thuốc Đức Trí",
    city: "Đồng Nai",
    packageChoice: "VIP - Offline TP.HCM",
    workshopAttendance: true,
    offlineHcmcInterest: true,
    notes: "Đã cọc 50% suất Offline",
    createdAt: new Date(Date.now() - 1000 * 60 * 310).toISOString(),
  },
];

// API Routes
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "Medical Channel 30-Day AI Roadmap API Running" });
});

// Default Google Apps Script URL
const GOOGLE_SHEET_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwoR0NqEeYhSpByz13jMdF3hc773upWXJxp9fKXHkySTQUT61GbO6zL0GFkYpsU2fnA/exec";

async function syncToGoogleSheet(data: any) {
  const url = process.env.GOOGLE_SHEET_SCRIPT_URL || GOOGLE_SHEET_SCRIPT_URL;
  if (!url) return;
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    console.log("Synced lead to Google Sheet:", response.status);
  } catch (err) {
    console.error("Failed to sync lead to Google Sheet:", err);
  }
}

// Lead Submission Handler
const handleLeadSubmission = (req: express.Request, res: express.Response) => {
  try {
    const { fullName, phone, email, role, organization, businessType, packageChoice, workshopAttendance, participationPreference, offlineHcmcInterest, notes, formType } = req.body;

    if (!fullName || !phone) {
      return res.status(400).json({ error: "Họ tên và số điện thoại là bắt buộc." });
    }

    const nextStt = (leadsDatabase.length > 0 ? Math.max(...leadsDatabase.map(l => l.stt || 0)) : 0) + 1;

    // Mask phone for privacy in public demo view if needed
    const maskedPhone = phone.length >= 7 ? phone.substring(0, 4) + "***" + phone.substring(phone.length - 3) : phone;

    const newLead: Lead = {
      stt: nextStt,
      id: "lead_" + Date.now(),
      fullName,
      phone: maskedPhone,
      email: email || "",
      role: role || "Bác sĩ / Dược sĩ",
      organization: organization || businessType || "Tự do / Phòng khám riêng",
      city: "TP.HCM",
      packageChoice: packageChoice || "Gói Thực Chiến 30 Ngày",
      workshopAttendance: workshopAttendance ?? true,
      offlineHcmcInterest: offlineHcmcInterest ?? false,
      notes: notes || "Giữ suất thành công",
      createdAt: new Date().toISOString(),
    };

    leadsDatabase.unshift(newLead);

    // Forward full lead data (with unmasked phone) to Google Sheet via Google Apps Script
    syncToGoogleSheet({
      formType: formType || "Đăng ký mua Bản Đồ Xây Kênh 799K",
      fullName: fullName,
      phone: phone, // Full unmasked phone number
      email: email || "",
      role: role || "",
      businessType: businessType || organization || "",
      participationPreference: participationPreference || (offlineHcmcInterest ? "Offline TP.HCM" : "Zoom Online"),
      notes: notes || "",
      createdAt: new Date().toLocaleString("vi-VN", { timeZone: "Asia/Ho_Chi_Minh" }),
    });

    return res.json({
      success: true,
      message: "Đăng ký thành công! Đội ngũ cố vấn sẽ liên hệ xác nhận trong thời gian sớm nhất.",
      lead: newLead,
    });
  } catch (err: any) {
    console.error("Lead registration error:", err);
    return res.status(500).json({ error: "Lỗi hệ thống khi đăng ký. Vui lòng thử lại." });
  }
};

app.post("/api/register", handleLeadSubmission);
app.post("/api/leads", handleLeadSubmission);

// Get All Leads (Admin view)
app.get("/api/leads", (req, res) => {
  res.json({
    total: leadsDatabase.length,
    leads: leadsDatabase,
  });
});

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req: express.Request, res: express.Response) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
