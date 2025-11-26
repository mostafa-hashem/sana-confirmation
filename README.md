# Sana Account Confirmation Page

صفحة تأكيد الحساب لتطبيق سانا - Account confirmation page for Sana app

## المميزات / Features

- ✅ تصميم متجاوب يدعم جميع الأجهزة / Responsive design for all devices
- ✅ ألوان تطبيق سانا الأصلية / Original Sana app colors
- ✅ دعم اللغتين العربية والإنجليزية / Arabic and English language support
- ✅ خطوط التطبيق الأصلية (Cairo & Poppins) / Original app fonts (Cairo & Poppins)
- ✅ أزرار تفاعلية لفتح التطبيق أو تحميله / Interactive buttons to open or download the app
- ✅ تحليلات وتتبع الأحداث / Analytics and event tracking
- ✅ إمكانية الطباعة / Print functionality
- ✅ دعم إمكانية الوصول / Accessibility support

## كيفية النشر على GitHub Pages / How to Deploy to GitHub Pages

### الخطوة 1: إنشاء Repository جديد / Step 1: Create New Repository

1. اذهب إلى GitHub وأنشئ repository جديد / Go to GitHub and create a new repository
2. سمِّه `sana-confirmation` أو أي اسم تفضله / Name it `sana-confirmation` or any name you prefer

### الخطوة 2: رفع الملفات / Step 2: Upload Files

```bash
# إذا كان لديك GitHub Desktop أو Git CLI / If you have GitHub Desktop or Git CLI
git init
git add .
git commit -m "Initial commit - Sana account confirmation page"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

أو يمكنك رفع الملفات يدوياً من خلال GitHub.com / Or you can upload files manually through GitHub.com

### الخطوة 3: تفعيل GitHub Pages / Step 3: Enable GitHub Pages

1. اذهب إلى Repository Settings / Go to Repository Settings
2. ابحث عن "Pages" في القائمة الجانبية / Find "Pages" in the sidebar
3. تحت "Source" اختر "Deploy from a branch" / Under "Source" select "Deploy from a branch"
4. اختر الفرع "main" والمجلد "/ (root)" / Select branch "main" and folder "/ (root)"
5. احفظ التغييرات / Save changes

### الخطوة 4: الحصول على رابط الصفحة / Step 4: Get Page URL

بعد دقائق قليلة، ستحصل على رابط مثل: / After a few minutes, you'll get a URL like:
```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
```

## تخصيص الصفحة / Page Customization

### تغيير ألوان التطبيق / Change App Colors

عدّل المتغيرات في `styles.css`: / Edit variables in `styles.css`:

```css
:root {
    --primary-color: #00A896;    /* اللون الأساسي / Primary color */
    --secondary-color: #F0803C;  /* اللون الثانوي / Secondary color */
    --success-color: #4CAF50;    /* لون النجاح / Success color */
    /* ... باقي الألوان / other colors ... */
}
```

### تحديث روابط التطبيق / Update App Links

في `script.js`، عدّل هذه المتغيرات: / In `script.js`, edit these variables:

```javascript
const appStoreUrl = 'https://play.google.com/store/apps/details?id=com.sana.app';
const appUrl = 'sana://'; // Custom URL scheme for the app
```

### تخصيص النصوص / Customize Text

عدّل النصوص في `index.html`: / Edit text in `index.html`:

```html
<h1 class="arabic-title">تم تأكيد الحساب بنجاح</h1>
<h1 class="english-title">Account Confirmed Successfully</h1>
```

## كيفية استخدام الصفحة / How to Use the Page

### في رابط التأكيد / In Confirmation Link

عند إرسال رابط التأكيد للمستخدمين، استخدم تنسيق مثل: / When sending confirmation links to users, use format like:

```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/?token=CONFIRMATION_TOKEN&user_id=USER_ID&email=user@example.com
```

### في Supabase Auth / In Supabase Auth

في إعدادات Supabase، يمكنك تخصيص رابط التأكيد ليؤدي إلى هذه الصفحة: / In Supabase settings, you can customize the confirmation link to point to this page:

```javascript
// في Supabase Edge Function أو في التطبيق / In Supabase Edge Function or in the app
const confirmationUrl = `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/?token=${token}&user_id=${userId}&email=${email}`;
```

## دعم المتصفحات / Browser Support

- Chrome 70+
- Firefox 65+
- Safari 12+
- Edge 79+

## الميزات الإضافية / Additional Features

- **تحليلات**: يتتبع الصفحة الأحداث الأساسية / **Analytics**: Tracks basic events
- **إمكانية الوصول**: تدعم قارئات الشاشة / **Accessibility**: Screen reader support
- **طباعة**: يمكن طباعة الصفحة / **Print**: Page can be printed
- **PWA Ready**: جاهز للتحويل إلى Progressive Web App / **PWA Ready**: Ready to convert to PWA

## استكشاف الأخطاء / Troubleshooting

### الخطوط لا تظهر / Fonts Not Showing

تأكد من أن ملفات الخطوط في مجلد `fonts/` موجودة / Make sure font files in `fonts/` folder exist

### الألوان غير صحيحة / Colors Not Correct

تحقق من متغيرات CSS في `:root` / Check CSS variables in `:root`

### الأزرار لا تعمل / Buttons Not Working

تأكد من أن روابط التطبيق صحيحة في `script.js` / Make sure app links are correct in `script.js`

## الترخيص / License

هذا المشروع مملوك لتطبيق سانا / This project is owned by Sana app

---

تم إنشاء هذه الصفحة بواسطة فريق سانا / Created by Sana team
