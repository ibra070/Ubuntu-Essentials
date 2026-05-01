// Google Apps Script Code for saving form data to Google Sheets
// 1. Create a new Google Sheet
// 2. Go to Extensions > Apps Script
// 3. Replace the default code with this
// 4. Deploy as Web App (Execute as: Me, Who has access: Anyone)
// 5. Copy the web app URL and replace YOUR_SCRIPT_ID in config.js

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // إضافة رؤوس إذا كانت الورقة فارغة
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['الاسم', 'البريد الإلكتروني', 'كلمة المرور', 'تاريخ التسجيل']);
    }

    // إضافة البيانات الجديدة
    sheet.appendRow([
      data.name,
      data.email,
      data.password,
      new Date(data.timestamp).toLocaleString('ar-SA')
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = sheet.getDataRange().getValues();

    // تحويل البيانات إلى JSON
    const headers = data[0];
    const rows = data.slice(1).map(row => {
      const obj = {};
      headers.forEach((header, index) => {
        obj[header] = row[index];
      });
      return obj;
    });

    return ContentService
      .createTextOutput(JSON.stringify({ success: true, data: rows }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// اختبار الدالة (يمكن حذفها بعد الاختبار)
function test() {
  const testData = {
    name: "اسم تجريبي",
    email: "test@example.com",
    password: "password123",
    timestamp: new Date().toISOString()
  };

  const e = {
    postData: {
      contents: JSON.stringify(testData)
    }
  };

  Logger.log(doPost(e).getContent());
}