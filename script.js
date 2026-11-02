// 1. تحديد العناصر من الـ DOM
const htmlElement = document.documentElement;
const themeToggleBtn = document.getElementById('theme-toggle-btn');
const themeIcon = document.getElementById('theme-icon');
const themeText = document.getElementById('theme-text');
const colorDots = document.querySelectorAll('.color-dot');

// ==========================================
// 2. منطق التبديل بين وضع النهار والليل (Dark / Light)
// ==========================================

themeToggleBtn.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    
    if (currentTheme === 'light') {
        // التحويل للوضع الليلي
        htmlElement.setAttribute('data-theme', 'dark');
        themeIcon.className = 'fa-solid fa-moon';
        themeText.textContent = 'الوضع الليلي';
    } else {
        // التحويل لوضع النهار
        htmlElement.setAttribute('data-theme', 'light');
        themeIcon.className = 'fa-solid fa-sun';
        themeText.textContent = 'وضع النهار';
    }
});

// ==========================================
// 3. منطق تغيير لوحة الألوان (Color Palette)
// ==========================================

colorDots.forEach(dot => {
    dot.addEventListener('click', () => {
        // إزالة الكلاس active من كل النقاط
        colorDots.forEach(d => d.classList.remove('active'));
        
        // إضافة الكلاس للنقطة التي تم الضغط عليها
        dot.classList.add('active');
        
        // جلب اسم اللون المختار وتطبيقه على الـ HTML
        const selectedColor = dot.getAttribute('data-color');
        htmlElement.setAttribute('data-color-theme', selectedColor);
    });
});