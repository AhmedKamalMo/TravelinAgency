# نظام إدارة المحتوى (CMS) - Wonder Land Traveling Agency

## نظرة عامة

تم إنشاء نظام إدارة محتوى شامل لموقع Wonder Land Traveling Agency يتيح للإدارة تعديل جميع محتويات الموقع والتصميم من لوحة التحكم.

## المميزات

### 🗄️ إدارة قاعدة البيانات
- **جداول CMS**: `cms_pages`, `cms_sections`, `cms_content_blocks`, `cms_media`, `cms_navigation`, `cms_site_settings`
- **إدارة الصفحات**: إنشاء وتعديل وحذف الصفحات
- **إدارة الأقسام**: أقسام قابلة للتخصيص (Hero, About, Services, Testimonials, Contact)
- **إدارة المحتوى**: كتل محتوى مرنة (نص، صور، فيديو، أزرار، معارض)
- **إدارة الوسائط**: مكتبة صور وملفات
- **إدارة القوائم**: قوائم تنقل ديناميكية
- **إعدادات الموقع**: إعدادات عامة، تواصل، وسائل التواصل الاجتماعي، SEO

### 🎨 مكونات قابلة للتخصيص
- **CMSHero**: قسم البطل الرئيسي مع خلفيات وأزرار
- **CMSAbout**: قسم من نحن مع بطاقات الميزات والإحصائيات
- **CMSServices**: قسم الخدمات مع بطاقات تفاعلية
- **CMSTestimonials**: قسم الشهادات مع تقييمات النجوم
- **CMSContact**: قسم التواصل مع نموذج اتصال
- **CMSGeneric**: قسم عام لجميع أنواع المحتوى
- **CMSRenderer**: مكون عرض ديناميكي للأقسام

### 🔧 API Endpoints

#### إدارة الصفحات
- `GET /api/cms/pages` - قائمة الصفحات
- `POST /api/cms/pages` - إنشاء صفحة جديدة
- `GET /api/cms/pages/[id]` - تفاصيل الصفحة
- `PUT /api/cms/pages/[id]` - تحديث الصفحة
- `DELETE /api/cms/pages/[id]` - حذف الصفحة

#### إدارة الأقسام
- `POST /api/cms/sections` - إنشاء قسم جديد
- `PUT /api/cms/sections/[id]` - تحديث القسم

#### إعدادات الموقع
- `GET /api/cms/site-settings` - جلب الإعدادات
- `PUT /api/cms/site-settings` - تحديث الإعدادات

#### إدارة القوائم
- `GET /api/cms/navigation` - جلب قوائم التنقل

#### API العامة (للزوار)
- `GET /api/public/pages/[slug]` - صفحة عامة
- `GET /api/public/site-settings` - إعدادات عامة
- `GET /api/public/navigation` - قوائم عامة

### 🖥️ صفحات الإدارة

#### لوحة تحكم CMS
- **الصفحة الرئيسية**: `/admin/cms` - نظرة عامة وإحصائيات
- **إدارة الصفحات**: `/admin/cms/pages` - قائمة وتعديل الصفحات
- **إعدادات الموقع**: `/admin/cms/settings` - إعدادات عامة

#### ميزات الإدارة
- ✅ واجهة سهلة الاستخدام
- ✅ تحرير مباشر للمحتوى
- ✅ معاينة فورية للتغييرات
- ✅ إدارة الصور والوسائط
- ✅ تحرير SEO (العناوين، الأوصاف، الكلمات المفتاحية)
- ✅ إدارة قوائم التنقل
- ✅ إعدادات وسائل التواصل الاجتماعي

### 🎯 أنواع الأقسام المدعومة

#### Hero Section
- عنوان رئيسي وعنوان فرعي
- خلفية ملونة أو صورة
- أزرار عمل
- صور أو فيديو

#### About Section
- بطاقات الميزات
- إحصائيات
- صور
- نصوص

#### Services Section
- بطاقات الخدمات
- أيقونات
- روابط
- دعوة للعمل

#### Testimonials Section
- شهادات العملاء
- صور العملاء
- تقييمات النجوم
- مناصب العملاء

#### Contact Section
- معلومات التواصل
- نموذج اتصال
- وسائل التواصل الاجتماعي
- خريطة (اختياري)

#### Generic Section
- نصوص
- صور
- معارض
- فيديو
- أزرار
- اقتباسات

### 🔧 Composable: useCMS

```typescript
const {
  // State
  siteSettings,
  navigation,
  currentPage,
  
  // Methods
  loadSiteSettings,
  loadNavigation,
  loadPage,
  getSetting,
  getMenu,
  getCurrentPage,
  getPageSection,
  getPageSections,
  getSectionBlocks,
  initializeCMS
} = useCMS()
```

### 📱 الاستخدام

#### في الصفحات
```vue
<template>
  <div>
    <CMSRenderer
      v-for="section in pageData.sections"
      :key="section.id"
      :section="section"
    />
  </div>
</template>

<script setup>
const { loadPage } = useCMS()
const pageData = await loadPage('home')
</script>
```

#### في المكونات
```vue
<template>
  <div>
    <h1>{{ getSetting('general', 'site_name') }}</h1>
    <p>{{ getSetting('contact', 'contact_phone') }}</p>
  </div>
</template>

<script setup>
const { getSetting } = useCMS()
</script>
```

### 🚀 التثبيت والإعداد

1. **تحديث قاعدة البيانات**:
   ```bash
   cd mysql
   npm run setup
   ```

2. **الوصول للإدارة**:
   - اذهب إلى `/admin/login`
   - استخدم: `admin@wonderland.com` / `admin123`

3. **إنشاء المحتوى**:
   - اذهب إلى `/admin/cms`
   - أنشئ صفحات جديدة
   - أضف أقسام ومحتوى
   - عدّل الإعدادات

### 📋 أنواع كتل المحتوى

- **text**: نص مع HTML
- **image**: صورة مع تسمية توضيحية
- **video**: فيديو من YouTube/Vimeo
- **button**: زر مع رابط
- **gallery**: معرض صور
- **card**: بطاقة محتوى
- **quote**: اقتباس
- **feature**: ميزة مع أيقونة
- **stat**: إحصائية

### 🎨 التخصيص

#### الألوان
- `background_color`: لون الخلفية
- `text_color`: لون النص
- دعم أكواد الألوان HEX

#### التخطيط
- `order_index`: ترتيب الأقسام
- `is_active`: تفعيل/إلغاء تفعيل
- `settings`: إعدادات JSON مخصصة

### 🔒 الأمان

- ✅ مصادقة JWT
- ✅ صلاحيات الأدوار
- ✅ حماية API endpoints
- ✅ تنظيف HTML
- ✅ التحقق من صحة البيانات

### 📊 الإحصائيات

- عدد الصفحات
- الصفحات المنشورة
- المسودات
- عناصر القوائم

### 🛠️ التطوير المستقبلي

- [ ] محرر WYSIWYG
- [ ] معاينة مباشرة
- [ ] نسخ احتياطي
- [ ] إدارة المستخدمين
- [ ] تحليلات المحتوى
- [ ] دعم متعدد اللغات
- [ ] قوالب مخصصة
- [ ] إدارة الملفات المتقدمة

---

## الدعم

للمساعدة أو الاستفسارات، يرجى التواصل مع فريق التطوير.

**تم تطوير نظام إدارة المحتوى بواسطة فريق Wonder Land Traveling Agency**
