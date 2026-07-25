/**
 * ==============================================================================
 * GOOGLE APPS SCRIPT SYNC HỌC VIÊN / KHÁCH HÀNG YDVN.VN VÀO GOOGLE SHEET
 * ==============================================================================
 * Tác giả: YDVN - Xây Kênh Y Tế 30 Ngày Cùng AI
 * Công dụng: Tự động ghi nhận tất cả lượt điền form (Mua hàng, Đăng ký, Khảo sát)
 * vào Google Sheet theo thời gian thực.
 * ==============================================================================
 */

// Tên trang tính (Sheet Name). Đổi nếu bạn muốn dùng sheet có tên khác.
var SHEET_NAME = "Trang tính1"; // Hoặc "Sheet1"

function doPost(e) {
  try {
    var lock = LockService.getScriptLock();
    // Đợi tối đa 10 giây để tránh bị ghi trùng lặp khi có nhiều người đăng ký cùng lúc
    lock.waitLock(10000);

    var doc = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = doc.getSheetByName(SHEET_NAME);
    if (!sheet) {
      sheet = doc.getSheets()[0]; // Lấy trang tính đầu tiên nếu không tìm thấy SHEET_NAME
    }

    // Tự động khởi tạo dòng tiêu đề (Header) nếu bảng tính còn trống
    initHeadersIfNeeded(sheet);

    // Lấy dữ liệu gửi lên
    var data = {};
    if (e && e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (err) {
        data = e.parameter || {};
      }
    } else if (e && e.parameter) {
      data = e.parameter;
    }

    // Chuẩn hóa thông tin từng trường dữ liệu
    var timestamp = data.createdAt || new Date().toLocaleString("vi-VN", { timeZone: "Asia/Ho_Chi_Minh" });
    var formType = data.formType || "Đăng ký Landing Page 799K";
    var fullName = data.fullName || data.name || data.hoTen || "";
    var phone = data.phone || data.sdt || data.zalo || "";
    var email = data.email || "";
    var role = data.role || data.chucVu || "";
    var businessType = data.businessType || data.loaiHinh || "";
    var participationPreference = data.participationPreference || data.hinhThuc || "";
    var surveyOrNotes = data.notes || data.khaoSat || data.answers || "";

    // Nếu object khảo sát truyền vào dưới dạng JSON/Object thì chuyển thành chuỗi
    if (typeof surveyOrNotes === "object") {
      surveyOrNotes = JSON.stringify(surveyOrNotes);
    }

    // Thêm 1 dòng mới vào Google Sheet
    sheet.appendRow([
      timestamp,
      formType,
      fullName,
      "'" + phone, // Dấu ' giúp giữ nguyên số 0 ở đầu số điện thoại
      email,
      role,
      businessType,
      participationPreference,
      surveyOrNotes
    ]);

    // Định dạng lại các ô vừa thêm cho đẹp mắt
    var lastRow = sheet.getLastRow();
    sheet.getRange(lastRow, 1, 1, 9).setVerticalAlignment("middle");

    // Giải phóng khóa
    lock.releaseLock();

    return ContentService
      .createTextOutput(JSON.stringify({ status: "success", message: "Ghi nhận dữ liệu thành công!" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: "error", message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Kiểm tra và tạo dòng tiêu đề cột nếu sheet đang trống
function initHeadersIfNeeded(sheet) {
  if (sheet.getLastRow() === 0) {
    var headers = [
      "Thời Gian",
      "Loại Form",
      "Họ Và Tên",
      "Số Điện Thoại / Zalo",
      "Email",
      "Chức Vụ",
      "Mô Hình Cơ Sở",
      "Hình Thức Học",
      "Khảo Sát / Ghi Chú"
    ];
    sheet.appendRow(headers);
    
    // Định dạng dòng Tiêu Đề
    var headerRange = sheet.getRange(1, 1, 1, headers.length);
    headerRange.setBackground("#0B2D46");
    headerRange.setFontColor("#FFFFFF");
    headerRange.setFontWeight("bold");
    headerRange.setHorizontalAlignment("center");
    headerRange.setVerticalAlignment("middle");
    sheet.setRowHeight(1, 35);
  }
}

// Hàm kiểm tra nhanh Web App có hoạt động hay không khi truy cập trình duyệt
function doGet(e) {
  return ContentService
    .createTextOutput("YDVN Web App Google Apps Script đang hoạt động bình thường! Đã sẵn sàng nhận dữ liệu form.")
    .setMimeType(ContentService.MimeType.TEXT);
}
