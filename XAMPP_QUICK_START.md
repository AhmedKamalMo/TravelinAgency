# دليل البدء السريع مع XAMPP

## ✅ تم إعداد كل شيء بنجاح!

### 🎯 الخطوات التالية:

#### 1. **تأكد من تشغيل XAMPP**
- شغّل **Apache** و **MySQL** في XAMPP Control Panel
- تأكد من أن MySQL يعمل على المنفذ 3306

#### 2. **إنشاء ملف `.env`**
أنشئ ملف `.env` في المجلد الجذر للمشروع:

```env
# MySQL Database Configuration for XAMPP
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=
DB_NAME=wonderland_travel

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production

# Site Configuration
PUBLIC_SITE_URL=http://localhost:3001
NODE_ENV=development
```

#### 3. **إضافة البيانات التجريبية (اختياري)**
في PHPMyAdmin (`http://localhost/phpmyadmin`):

1. اختر قاعدة البيانات `wonderland_travel`
2. انقر على "SQL" في الأعلى
3. انسخ والصق البيانات التالية:

```sql
-- إدراج حزم تجريبية
INSERT INTO packages (title_ar, title_en, description_ar, description_en, price, duration_days, image_url, travel_period, featured, active, category) VALUES
('رحلة إلى دبي', 'Dubai Trip', 'رحلة سياحية مميزة إلى دبي لمدة 5 أيام', 'Amazing 5-day trip to Dubai', 2500.00, 5, '/images/packages/dubai.jpg', '5 أيام', TRUE, TRUE, 'international'),
('عمرة رمضان', 'Ramadan Umrah', 'برنامج عمرة رمضان المبارك', 'Ramadan Umrah program', 1800.00, 7, '/images/packages/umrah.jpg', '7 أيام', TRUE, TRUE, 'religious'),
('رحلة إلى تركيا', 'Turkey Trip', 'رحلة سياحية شاملة إلى تركيا', 'Comprehensive trip to Turkey', 3200.00, 8, '/images/packages/turkey.jpg', '8 أيام', FALSE, TRUE, 'international');

-- إدراج وجهات تجريبية
INSERT INTO destinations (name_ar, name_en, description_ar, description_en, image_url, active) VALUES
('الرياض', 'Riyadh', 'عاصمة المملكة العربية السعودية', 'Capital of Saudi Arabia', '/images/destinations/riyadh/main.jpg', TRUE),
('جدة', 'Jeddah', 'عروس البحر الأحمر', 'Bride of the Red Sea', '/images/destinations/jeddah/main.jpg', TRUE),
('دبي', 'Dubai', 'مدينة الإمارات الرائعة', 'Amazing UAE city', '/images/destinations/dubai/main.jpg', TRUE);

-- إدراج رسائل تجريبية
INSERT INTO contact_messages (name, email, phone, message, type, is_read) VALUES
('أحمد محمد', 'ahmed@example.com', '+966501234567', 'أريد الاستفسار عن الباقات السياحية المتاحة لتركيا', 'package', FALSE),
('فاطمة علي', 'fatima@example.com', '+966507654321', 'شكراً لكم على الخدمة الممتازة', 'general', TRUE),
('محمد السعد', 'mohammed@example.com', '+966509876543', 'هل لديكم حزم للعمرة في رمضان؟', 'package', FALSE);
```

#### 4. **تشغيل المشروع**
```bash
npm run dev
```

#### 5. **الوصول إلى لوحة التحكم**
- **الرابط**: `http://localhost:3001/admin/login`
- **البريد الإلكتروني**: `admin@wonderland.com`
- **كلمة المرور**: `admin123`

## 🎉 مبروك! لوحة التحكم جاهزة للاستخدام

### 📊 الميزات المتاحة:

#### لوحة المعلومات (`/admin/dashboard`)
- إحصائيات سريعة (الحزم، الوجهات، الرسائل، المستخدمين)
- الأنشطة الحديثة
- الباقات الأكثر شعبية
- روابط سريعة

#### إدارة الباقات (`/admin/packages`)
- عرض جميع الباقات السياحية
- إضافة حزمة جديدة
- تحرير الباقات الموجودة
- حذف الحزم
- تغيير حالة الباقات (نشط/غير نشط)

#### إدارة الوجهات (`/admin/destinations`)
- عرض جميع الوجهات السياحية
- إضافة وجهة جديدة
- تحرير الوجهات الموجودة
- حذف الوجهات
- تصنيف الوجهات (سعودي/عالمي)

#### إدارة الرسائل (`/admin/contacts`)
- عرض رسائل العملاء
- تصفية الرسائل حسب النوع والحالة
- تعيين الرسائل كمقروءة
- حذف الرسائل

## 🔧 استكشاف الأخطاء

### إذا لم تعمل لوحة التحكم:

1. **تأكد من تشغيل XAMPP**:
   - Apache و MySQL يجب أن يكونا مشغلين

2. **تحقق من ملف `.env`**:
   - تأكد من وجود الملف
   - تحقق من إعدادات قاعدة البيانات

3. **تحقق من قاعدة البيانات**:
   - تأكد من وجود قاعدة البيانات `wonderland_travel`
   - تحقق من وجود الجداول المطلوبة

4. **تحقق من المنفذ**:
   - التطبيق يعمل على `http://localhost:3001`
   - تأكد من تحديث الرابط في `.env`

### إذا لم تعمل المصادقة:

1. **تحقق من حساب المدير**:
   ```sql
   SELECT * FROM users WHERE email = 'admin@wonderland.com';
   ```

2. **تحقق من ملف المدير**:
   ```sql
   SELECT * FROM admin_profiles WHERE user_id = 1;
   ```

## 📞 الدعم

إذا واجهت أي مشاكل:
1. تحقق من سجلات الأخطاء في وحدة التحكم
2. تأكد من إعدادات XAMPP
3. تحقق من ملف `.env`
4. تأكد من وجود قاعدة البيانات والجداول

---

**🎯 الآن يمكنك البدء في إدارة موقعك من لوحة التحكم!**
