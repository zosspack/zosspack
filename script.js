// عند تحميل الصفحة
window.addEventListener("DOMContentLoaded", () => {
  // Dark Mode
  if (localStorage.getItem("darkMode") === "on") {
    document.body.classList.add("dark");
  }

  // اللغة
  if (localStorage.getItem("lang") === "en") {
    switchToEnglish();
  }
});

// زر الرجوع للأعلى
window.onscroll = function () {
  const btn = document.getElementById("scrollTopBtn");
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// زر اللغة
function switchLanguage() {
  const currentLang = document.documentElement.lang;
  if (currentLang === "ar") {
    switchToEnglish();
    localStorage.setItem("lang", "en");
  } else {
    switchToArabic();
    localStorage.setItem("lang", "ar");
  }
}

// اللغة العربية
function switchToArabic() {
  document.documentElement.lang = "ar";
  document.body.dir = "rtl";

  document.querySelector(".nav-home").textContent = "الرئيسية";
  document.querySelector(".nav-services").textContent = "خدماتنا";
  document.querySelector(".nav-about").textContent = "من نحن";
  document.querySelector(".nav-contact").textContent = "تواصل";

  document.querySelector(".hero-title").innerHTML = "تغليف يُعبّر عن منتجك ✨<br>وهوية بصرية تُميزك";
  document.querySelector(".hero-subtitle").textContent = "في Zoss Pack، نصنع التصاميم التي تروي قصة علامتك";
  document.querySelector(".hero-btn").textContent = "ابدأ مشروعك الآن 🚀";

  document.querySelector(".title-services").textContent = "خدماتنا";
document.querySelector(".srv-title-1").textContent = "الطباعة";
document.querySelector(".srv-text-1").textContent = "خدمات طباعة رقمية وأوفست وذات تنسيقات كبيرة، بجودة عالية لتلبية كل احتياجاتك.";

document.querySelector(".srv-title-2").textContent = "التغليف";
document.querySelector(".srv-text-2").textContent = "حلول تغليف مبتكرة ومخصصة تعكس هوية علامتك وتحافظ على منتجك.";

document.querySelector(".srv-title-3").textContent = "توريد الورق";
document.querySelector(".srv-text-3").textContent = "نوفر أجود أنواع الورق لمطابع الإمارات، بجودة عالمية وتنوع في الخيارات.";

  document.querySelector(".title-about").textContent = "من نحن";
  document.querySelector(".about-text").innerHTML =
    "نحن في <strong>Zoss Pack</strong> نؤمن أن التغليف هو أول انطباع عن منتجك، والهوية البصرية هي روح علامتك. نبتكر لك حلول تصميم تليق برؤية علامتك وتجذب جمهورك المستهدف.";
document.querySelector(".nav-portfolio").textContent = "المعرض";
document.querySelector(".title-portfolio").textContent = "معرض أعمالنا";

document.querySelector(".title-contact").textContent = "تواصل معنا";
document.querySelector(".contact-subtitle-text").textContent = "نحن هنا من أجلك! أرسل لنا استفسارك وسنرد بأسرع وقت.";
document.querySelector(".input-name").placeholder = "اسمك الكامل";
document.querySelector(".input-email").placeholder = "البريد الإلكتروني";
document.querySelector(".input-msg").placeholder = "رسالتك...";
document.querySelector(".btn-text").textContent = "إرسال";
document.querySelector(".info-location").textContent = "المقطع 1، أم القيوين، الإمارات";
document.querySelector(".info-phone").textContent = "+971 50 123 4567";
document.querySelector(".info-email").textContent = "info@zoss.ae";


  document.querySelector(".footer-text").textContent = "© 2025 Zoss Pack. جميع الحقوق محفوظة.";
}

// اللغة الإنجليزية
function switchToEnglish() {
  document.documentElement.lang = "en";
  document.body.dir = "ltr";

  document.querySelector(".nav-home").textContent = "Home";
  document.querySelector(".nav-services").textContent = "Services";
  document.querySelector(".nav-about").textContent = "About";
  document.querySelector(".nav-contact").textContent = "Contact";

  document.querySelector(".hero-title").innerHTML = "Packaging that speaks ✨<br>Branding that stands out";
  document.querySelector(".hero-subtitle").textContent = "At Zoss Pack, we design packaging that tells your story.";
  document.querySelector(".hero-btn").textContent = "Start Your Project 🚀";

  document.querySelector(".title-services").textContent = "Our Services";
document.querySelector(".srv-title-1").textContent = "Printing";
document.querySelector(".srv-text-1").textContent = "Digital, offset, and large-format printing with top quality.";

document.querySelector(".srv-title-2").textContent = "Packaging";
document.querySelector(".srv-text-2").textContent = "Custom packaging that protects and promotes your products.";

document.querySelector(".srv-title-3").textContent = "Paper Supply";
document.querySelector(".srv-text-3").textContent = "We supply top-grade paper to presses across the UAE.";

  document.querySelector(".title-about").textContent = "About Us";
  document.querySelector(".about-text").innerHTML =
    "At <strong>Zoss Pack</strong>, we believe packaging is your product’s first impression, and branding is its soul. We create design solutions that reflect your vision and attract your ideal audience.";

    document.querySelector(".nav-portfolio").textContent = "Portfolio";
document.querySelector(".title-portfolio").textContent = "Our Portfolio";

document.querySelector(".whatsapp-btn").title = "Contact via WhatsApp";
document.querySelector(".email-btn").title = "Send us an email";

document.querySelector(".title-contact").textContent = "Contact Us";
document.querySelector(".contact-subtitle-text").textContent = "We're here to help! Send us your inquiry and we'll get back to you.";
document.querySelector(".input-name").placeholder = "Full Name";
document.querySelector(".input-email").placeholder = "Email";
document.querySelector(".input-msg").placeholder = "Your message...";
document.querySelector(".btn-text").textContent = "Send";
document.querySelector(".info-location").textContent = "Al Muqta 1, Um Al Quwain, UAE";
document.querySelector(".info-phone").textContent = "+971 50 123 4567";
document.querySelector(".info-email").textContent = "info@zoss.ae";

document.querySelector(".footer-text").textContent = "© 2025 Zoss Pack. All rights reserved.";
}

// زر "ابدأ الآن"
function sayHello() {
  alert("مرحبًا بك في Zoss Pack! 🚀");
}

// شاشة التحميل
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  
  // نبدأ التلاشي بعد 2.2 ثانية (تبقى ظاهرة)
  setTimeout(() => {
    loader.style.opacity = "0";
    loader.style.visibility = "hidden";
  }, 2200); // ⬅ مدة الانتظار قبل التلاشي

  // نزيلها تمامًا بعد التلاشي (بعد 3 ثواني)
  setTimeout(() => {
    loader.style.display = "none";
  }, 3000);
});
// أنيميشن عند التنقل بين الأقسام
document.querySelectorAll("a[href^='#']").forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  loader.style.opacity = 0;
  setTimeout(() => {
    loader.style.display = "none";

    // ▶️ أزرار التواصل: حركة دخول
    const contactBtns = document.querySelector(".contact-floating");
    contactBtns.classList.add("show");

  }, 700); // مدة شاشة التحميل (ممكن تزيدها)
});
function simulateSend(event) {
  event.preventDefault();
  const btnText = document.querySelector(".btn-text");
  const loader = document.querySelector(".btn-loader");

  btnText.style.display = "none";
  loader.style.display = "inline";

  setTimeout(() => {
    alert("✅ تم إرسال رسالتك بنجاح!");
    loader.style.display = "none";
    btnText.style.display = "inline";
    event.target.reset(); // إعادة تعيين النموذج
  }, 2000);

  return false;
}
