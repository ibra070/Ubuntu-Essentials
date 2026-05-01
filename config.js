// إعدادات Google Apps Script

const CONFIG = {
    GOOGLE_SCRIPT_URL: 'https://script.google.com/macros/s/AKfycbz6IyKR8afzg3Zx5fxDAccc0KkEPYq0qkRFVo9c2if741dwpHbs4zeR2Qwg65_KGYQplg/exec',

    // رؤوس الأعمدة في Google Sheet
    SHEET_HEADERS: [
        'الاسم',
        'البريد الإلكتروني',
        'كلمة المرور',
        'تاريخ التسجيل'
    ]
};

// تصدير للاستخدام في HTML أو Node
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}