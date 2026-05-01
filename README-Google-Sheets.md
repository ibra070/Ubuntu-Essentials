## هيكل المشروع

```
New_project/
├── index.html                 # النموذج الرئيسي
├── config.js                  # إعدادات Google Apps Script
├── google-apps-script.js      # كود Apps Script
├── view-data.html            # صفحة عرض البيانات
├── test/
│   └── test-google-sheets.html # صفحة اختبار
├── package.json              # معلومات المشروع
├── README-Google-Sheets.md   # هذا الملف
└── .gitignore               # ملفات مستبعدة
```

```bash
# تشغيل خادم محلي
npm start
# أو
python -m http.server 8000

# ثم افتح http://localhost:8000 في المتصفح
```

## الخطوات المطلوبة

### 1. إنشاء Google Sheet جديد
- اذهب إلى [sheets.google.com](https://sheets.google.com)
- أنشئ جدول بيانات جديد

### 2. إنشاء Apps Script
- في الجدول، اذهب إلى **Extensions > Apps Script**
- احذف الكود الافتراضي
- انسخ محتوى ملف `google-apps-script.js` والصقه
- احفظ المشروع (Ctrl+S)

### 3. نشر التطبيق
- اضغط على **Deploy > New deployment**
- اختر نوع **Web app**
- في **Execute as**: اختر **Me**
- في **Who has access**: اختر **Anyone**
- اضغط **Deploy**
- **انسخ الرابط** الذي سيظهر

### 4. تحديث الإعدادات
- افتح ملف `config.js`
- استبدل `YOUR_SCRIPT_ID` بالمعرف من الرابط (الجزء بين `/s/` و `/exec`)

### 5. الاختبار
- شغل النموذج محلياً
- جرب إنشاء حساب جديد
- تحقق من ظهور البيانات في Google Sheet

### 6. اختبار منفصل (اختياري)
- افتح ملف `test/test-google-sheets.html` في المتصفح
- املأ النموذج واضغط إرسال
- تحقق من حفظ البيانات في الجدول

### 7. عرض البيانات (اختياري)
- افتح ملف `view-data.html` في المتصفح
- اضغط على "تحديث البيانات" لرؤية البيانات في جدول

## ملاحظات مهمة

- **الأمان**: هذا النظام بسيط وغير آمن للإنتاج (كلمات المرور محفوظة نصاً)
- **الخصوصية**: تأكد من عدم مشاركة الرابط العام
- **الحدود**: Google Apps Script لديه حدود يومية (100 تنفيذ مجاناً)

## البدائل الأكثر أماناً

إذا كنت تريد نظاماً أكثر أماناً:
- استخدم backend server (Node.js/Express)
- استخدم قاعدة بيانات آمنة
- استخدم خدمات مثل Firebase أو Supabase