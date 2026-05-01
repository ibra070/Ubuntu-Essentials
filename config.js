// إعدادات Google Apps Script

const CONFIG = {
    GOOGLE_SCRIPT_URL: 'https://script.google.com/macros/s/AKfycbyAL9vdkAtPjFoB7IqOT0IQ9MU578zfif-wZbF2jEoPi8NYKmbUwBtYAR-MajSqlE8tRw/exec',
    
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