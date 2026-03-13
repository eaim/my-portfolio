document.documentElement.classList.add("js");

const skills = ["Java Development", "Cloud Platforms", "Data Analytics"];
const typedSkill = document.getElementById("typed-skill");
const ctaWork = document.getElementById("view-work-btn");
const projectsSection = document.getElementById("experience");
const navToggle = document.querySelector(".navbar-toggle");
const primaryNav = document.getElementById("primary-nav");
const yearNode = document.getElementById("year");
const navLinks = document.querySelectorAll('.navbar-menu a[href^="#"]');
const languageToggle = document.getElementById("language-toggle");
const animatedNodes = document.querySelectorAll("[data-animate]");
const projectAnimatedNodes = [
  ...document.querySelectorAll('[data-animate="project-card"]'),
];
const skillAnimatedNodes = [
  ...document.querySelectorAll('[data-animate="skill-item"]'),
];
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

const languageCycle = ["EN", "JP", "MM"];
const pageTranslations = {
  EN: {
    langCode: "en",
    strings: {
      "common.skip": "Skip to content",
      "nav.about": "About",
      "nav.journey": "Journey",
      "nav.experience": "Experience",
      "nav.skills": "Skills",
      "nav.certifications": "Certifications",
      "nav.contact": "Contact",
      "hero.eyebrow": "DEVELOPER PORTFOLIO",
      "hero.taglineLine1": "Software Engineer",
      "hero.taglineLine2": "Data Analytics & Cloud",
      "hero.summaryMain":
        "Software engineer currently working in a Data Analytics team in Japan. Experienced in enterprise software development, cloud platforms, backend systems, and data analytics solutions.",
      "hero.button": "View Work",
      "hero.summaryTitle": "Professional Summary",
      "hero.summaryPanel":
        "Software engineer currently working in a Data Analytics team in Japan. Experienced in enterprise software development, cloud platforms, backend systems, and data analytics solutions.",
      "hero.focusTitle": "Current Focus",
      "hero.focus1": "Data Analytics",
      "hero.focus2": "Backend Development",
      "hero.focus3": "Cloud Platforms",
      "hero.focus4": "Databricks",
      "hero.focus5": "Cross-border Communication",
      "about.title": "👩‍💻 About",
      "about.p1": "EAIM is a software engineer from Myanmar currently working in Japan.",
      "about.p2":
        "She is currently working as a Development Engineer in a Data Analytics Team, focusing on backend systems, analytics platforms, and cloud-based data solutions.",
      "about.p3":
        "She has experience working in multiple Japanese IT companies and has contributed to enterprise software systems, digital strategy platforms, and data-driven applications.",
      "about.p4":
        "Her technical strengths include Java development, cloud architecture, data analytics technologies, and communication between Myanmar and Japanese teams.",
      "journey.title": "🎓 Journey",
      "journey.highSchool": "High School",
      "journey.highSchoolGrad": "Graduated: March 2011",
      "journey.university": "University",
      "journey.universityMajor": "Major: Japanese (Foreign Languages)",
      "journey.universityEnrollment": "Enrollment: 3 Dec 2012",
      "journey.universityGraduation": "Graduation: Jan 2016",
      "experience.title": "💼 Experience",
      "experience.subtitle":
        "Enterprise software, cloud systems, and analytics engineering roles.",
      "experience.role1": "Japanese Translator / Software Project Support",
      "experience.role1Bullet1": "Translation work for offshore projects with Japan",
      "experience.role1Bullet2": "Interpretation support for communication with Japanese teams",
      "experience.role1Bullet3": "Software documentation development",
      "experience.role1Bullet4": "System design evaluation support",
      "experience.role1Bullet5": "Technical communication and coordination",
      "experience.role2": "Software Engineer",
      "experience.role2Bullet1": "Enterprise software development",
      "experience.role2Bullet2": "Backend system engineering",
      "experience.role2Bullet3": "System implementation support",
      "experience.role3": "IT Engineer",
      "experience.role3Bullet1": "Software development",
      "experience.role3Bullet2": "IT system implementation",
      "experience.role4": "Software Engineer - Strategic Digital Division",
      "experience.role4Bullet1": "Enterprise system development",
      "experience.role4Bullet2": "Digital strategy platform development",
      "experience.role4Bullet3": "Backend system implementation",
      "experience.role5": "Development Engineer - Data Analytics Team",
      "experience.role5Bullet1": "Data analytics platform development",
      "experience.role5Bullet2": "Backend software development",
      "experience.role5Bullet3": "System analysis and architecture design",
      "experience.role5Bullet4": "Cloud data platform integration",
      "skills.title": "⚙️ Skills",
      "skills.programming": "Programming",
      "skills.cloudData": "Cloud & Data",
      "skills.tools": "Tools",
      "skills.languages": "Languages",
      "certifications.title": "🏆 Certifications",
      "certifications.item1": "JLPT N1 (Japanese Language Proficiency Test)",
      "certifications.item2": "TOEIC",
      "certifications.item3": "Information Technology Engineers Examination (IP)",
      "certifications.item4": "Business Japanese Test (BJT)",
      "certifications.item5": "Oracle Certified Java Programmer Bronze",
      "certifications.item6": "Oracle Certified Java Programmer Silver",
      "certifications.item7": "Google Professional Cloud Architect",
      "certifications.item8": "Databricks Data Analyst Associate",
      "certifications.desc1": "Japanese language proficiency test at N1 level.",
      "certifications.desc2": "English communication and business proficiency score certification.",
      "certifications.desc3": "National IT engineering foundational qualification exam.",
      "certifications.desc4": "Business Japanese communication competency evaluation test.",
      "certifications.desc5": "Entry-level Java programming certification by Oracle.",
      "certifications.desc6": "Intermediate Java programming certification by Oracle.",
      "certifications.desc7": "Professional-level cloud architecture and design certification.",
      "certifications.desc8": "Associate-level certification for analytics on Databricks.",
      "contact.title": "📬 Contact",
      "contact.cta": "Let's build reliable, data-driven products together.",
      "contact.githubLabel": "GitHub:",
      "contact.emailLabel": "Email:",
      "contact.phoneLabel": "Phone:",
      "contact.githubButton": "GitHub",
      "contact.emailButton": "Email",
      "contact.phoneButton": "Phone",
      "footer.rights": "All rights reserved.",
    },
  },
  JP: {
    langCode: "ja",
    strings: {
      "common.skip": "コンテンツへスキップ",
      "nav.about": "概要",
      "nav.journey": "学歴",
      "nav.experience": "経験",
      "nav.skills": "スキル",
      "nav.certifications": "資格・認定",
      "nav.contact": "連絡先",
      "hero.eyebrow": "DEVELOPER PORTFOLIO",
      "hero.taglineLine1": "ソフトウェアエンジニア",
      "hero.taglineLine2": "データ分析・クラウド",
      "hero.summaryMain":
        "日本のデータ分析チームで働くソフトウェアエンジニア。エンタープライズ開発、クラウド基盤、バックエンド、データ分析ソリューションの経験があります。",
      "hero.button": "実務を見る",
      "hero.summaryTitle": "Professional Summary",
      "hero.summaryPanel":
        "日本のデータ分析チームで働くソフトウェアエンジニア。エンタープライズ開発、クラウド基盤、バックエンド、データ分析ソリューションの経験があります。",
      "hero.focusTitle": "Current Focus",
      "hero.focus1": "データ分析",
      "hero.focus2": "バックエンド開発",
      "hero.focus3": "クラウドプラットフォーム",
      "hero.focus4": "Databricks",
      "hero.focus5": "越境コミュニケーション",
      "about.title": "👩‍💻 概要",
      "about.p1": "EAIMはミャンマー出身で、現在日本で働くソフトウェアエンジニアです。",
      "about.p2":
        "現在はデータ分析チームの開発エンジニアとして、バックエンド、分析基盤、クラウド型データソリューションを担当しています。",
      "about.p3":
        "日本の複数IT企業で、エンタープライズシステム、デジタル戦略基盤、データ駆動型アプリケーションに携わってきました。",
      "about.p4":
        "Java開発、クラウドアーキテクチャ、データ分析技術、そしてミャンマーと日本チーム間のコミュニケーションが強みです。",
      "journey.title": "🎓 学歴",
      "journey.highSchool": "高校",
      "journey.highSchoolGrad": "卒業: 2011年3月",
      "journey.university": "大学",
      "journey.universityMajor": "専攻: 日本語 (外国語学部)",
      "journey.universityEnrollment": "入学: 2012年12月3日",
      "journey.universityGraduation": "卒業: 2016年1月",
      "experience.title": "💼 経験",
      "experience.subtitle": "エンタープライズ、クラウド、分析領域での実務経験。",
      "experience.role1": "日英通訳・ソフトウェアプロジェクト支援",
      "experience.role1Bullet1": "日本向けオフショア案件の翻訳業務",
      "experience.role1Bullet2": "日本チームとの通訳・コミュニケーション支援",
      "experience.role1Bullet3": "ソフトウェア文書作成",
      "experience.role1Bullet4": "システム設計評価支援",
      "experience.role1Bullet5": "技術コミュニケーションと調整",
      "experience.role2": "ソフトウェアエンジニア",
      "experience.role2Bullet1": "エンタープライズソフトウェア開発",
      "experience.role2Bullet2": "バックエンドシステム開発",
      "experience.role2Bullet3": "導入・実装支援",
      "experience.role3": "ITエンジニア",
      "experience.role3Bullet1": "ソフトウェア開発",
      "experience.role3Bullet2": "ITシステム導入",
      "experience.role4": "ソフトウェアエンジニア - 戦略デジタル部門",
      "experience.role4Bullet1": "エンタープライズシステム開発",
      "experience.role4Bullet2": "デジタル戦略プラットフォーム開発",
      "experience.role4Bullet3": "バックエンド実装",
      "experience.role5": "開発エンジニア - データ分析チーム",
      "experience.role5Bullet1": "データ分析プラットフォーム開発",
      "experience.role5Bullet2": "バックエンド開発",
      "experience.role5Bullet3": "システム分析・アーキテクチャ設計",
      "experience.role5Bullet4": "クラウドデータ基盤連携",
      "skills.title": "⚙️ スキル",
      "skills.programming": "プログラミング",
      "skills.cloudData": "クラウド・データ",
      "skills.tools": "ツール",
      "skills.languages": "言語",
      "certifications.title": "🏆 資格・認定",
      "certifications.item1": "JLPT N1（日本語能力試験）",
      "certifications.item2": "TOEIC",
      "certifications.item3": "情報処理技術者試験（IP）",
      "certifications.item4": "ビジネス日本語テスト（BJT）",
      "certifications.item5": "Oracle Certified Java Programmer Bronze",
      "certifications.item6": "Oracle Certified Java Programmer Silver",
      "certifications.item7": "Google Professional Cloud Architect",
      "certifications.item8": "Databricks Data Analyst Associate",
      "certifications.desc1": "日本語能力を測る N1 レベルの試験。",
      "certifications.desc2": "英語コミュニケーション能力を示すスコア認定。",
      "certifications.desc3": "IT エンジニア基礎知識を評価する国家試験。",
      "certifications.desc4": "ビジネス日本語運用力を評価する試験。",
      "certifications.desc5": "Oracle による Java 初級レベル認定。",
      "certifications.desc6": "Oracle による Java 中級レベル認定。",
      "certifications.desc7": "クラウド設計・アーキテクチャのプロフェッショナル認定。",
      "certifications.desc8": "Databricks 分析スキルのアソシエイト認定。",
      "contact.title": "📬 連絡先",
      "contact.cta": "データ駆動型の信頼できるプロダクトを一緒に作りましょう。",
      "contact.githubLabel": "GitHub:",
      "contact.emailLabel": "メール:",
      "contact.phoneLabel": "電話:",
      "contact.githubButton": "GitHub",
      "contact.emailButton": "Email",
      "contact.phoneButton": "Phone",
      "footer.rights": "All rights reserved.",
    },
  },
  MM: {
    langCode: "my",
    strings: {
      "common.skip": "အဓိကအကြောင်းအရာသို့ ကျော်ရန်",
      "nav.about": "အကြောင်းအရာ",
      "nav.journey": "ပညာရေးခရီးစဉ်",
      "nav.experience": "အလုပ်အတွေ့အကြုံ",
      "nav.skills": "ကျွမ်းကျင်မှုများ",
      "nav.certifications": "အောင်လက်မှတ်များ",
      "nav.contact": "ဆက်သွယ်ရန်",
      "hero.eyebrow": "DEVELOPER PORTFOLIO",
      "hero.taglineLine1": "Software Engineer",
      "hero.taglineLine2": "Data Analytics & Cloud",
      "hero.summaryMain":
        "ဂျပန်နိုင်ငံရှိ Data Analytics team တွင် လက်ရှိအလုပ်လုပ်နေသော software engineer ဖြစ်သည်။ enterprise software development, cloud platforms, backend systems နှင့် data analytics solutions များတွင် အတွေ့အကြုံရှိသည်။",
      "hero.button": "လုပ်ငန်းအတွေ့အကြုံကြည့်ရန်",
      "hero.summaryTitle": "ပရော်ဖက်ရှင်နယ် အကျဉ်းချုပ်",
      "hero.summaryPanel":
        "ဂျပန်နိုင်ငံရှိ Data Analytics team တွင် လက်ရှိအလုပ်လုပ်နေသော software engineer ဖြစ်သည်။ enterprise software development, cloud platforms, backend systems နှင့် data analytics solutions များတွင် အတွေ့အကြုံရှိသည်။",
      "hero.focusTitle": "လက်ရှိအာရုံစိုက်နေသော အပိုင်းများ",
      "hero.focus1": "Data Analytics",
      "hero.focus2": "Backend Development",
      "hero.focus3": "Cloud Platforms",
      "hero.focus4": "Databricks",
      "hero.focus5": "Cross-border Communication",
      "about.title": "👩‍💻 အကြောင်းအရာ",
      "about.p1": "EAIM သည် Myanmar မှ software engineer တစ်ဦးဖြစ်ပြီး လက်ရှိတွင် Japan တွင် အလုပ်လုပ်လျက်ရှိသည်။",
      "about.p2":
        "လက်ရှိတွင် Data Analytics Team တွင် Development Engineer အဖြစ် တာဝန်ထမ်းဆောင်နေပြီး backend systems, analytics platforms နှင့် cloud-based data solutions များကို အဓိကကိုင်တွယ်နေသည်။",
      "about.p3":
        "Japan ရှိ IT ကုမ္ပဏီများစွာတွင် လုပ်ကိုင်ခဲ့ပြီး enterprise software systems, digital strategy platforms နှင့် data-driven applications များတွင် ပါဝင်ကူညီခဲ့သည်။",
      "about.p4":
        "အဓိကအားသာချက်များမှာ Java development, cloud architecture, data analytics technologies နှင့် Myanmar-Japan teams အကြား ဆက်သွယ်ရေး ဖြစ်သည်။",
      "journey.title": "🎓 ပညာရေးခရီးစဉ်",
      "journey.highSchool": "အထက်တန်းကျောင်း",
      "journey.highSchoolGrad": "ဘွဲ့ရ: March 2011",
      "journey.university": "တက္ကသိုလ်",
      "journey.universityMajor": "အထူးပြုဘာသာ: Japanese (Foreign Languages)",
      "journey.universityEnrollment": "တက်ရောက်စတင်: 3 Dec 2012",
      "journey.universityGraduation": "ဘွဲ့ရ: Jan 2016",
      "experience.title": "💼 အလုပ်အတွေ့အကြုံ",
      "experience.subtitle":
        "Enterprise software, cloud systems နှင့် analytics engineering ဆိုင်ရာ အလုပ်အတွေ့အကြုံများ။",
      "experience.role1": "Japanese Translator / Software Project Support",
      "experience.role1Bullet1": "Japan အတွက် offshore projects များတွင် ဘာသာပြန်လုပ်ငန်းဆောင်ရွက်ခြင်း",
      "experience.role1Bullet2": "Japanese teams နှင့် ဆက်သွယ်ရေးအတွက် စကားပြန်ပံ့ပိုးခြင်း",
      "experience.role1Bullet3": "Software documentation ပြုစုခြင်း",
      "experience.role1Bullet4": "System design evaluation ပံ့ပိုးခြင်း",
      "experience.role1Bullet5": "Technical communication နှင့် coordination ဆောင်ရွက်ခြင်း",
      "experience.role2": "Software Engineer",
      "experience.role2Bullet1": "Enterprise software development ဆောင်ရွက်ခြင်း",
      "experience.role2Bullet2": "Backend system engineering ဆောင်ရွက်ခြင်း",
      "experience.role2Bullet3": "System implementation ပံ့ပိုးခြင်း",
      "experience.role3": "IT Engineer",
      "experience.role3Bullet1": "Software development ဆောင်ရွက်ခြင်း",
      "experience.role3Bullet2": "IT system implementation ဆောင်ရွက်ခြင်း",
      "experience.role4": "Software Engineer - Strategic Digital Division",
      "experience.role4Bullet1": "Enterprise system development ဆောင်ရွက်ခြင်း",
      "experience.role4Bullet2": "Digital strategy platform development ဆောင်ရွက်ခြင်း",
      "experience.role4Bullet3": "Backend system implementation ဆောင်ရွက်ခြင်း",
      "experience.role5": "Development Engineer - Data Analytics Team",
      "experience.role5Bullet1": "Data analytics platform development ဆောင်ရွက်ခြင်း",
      "experience.role5Bullet2": "Backend software development ဆောင်ရွက်ခြင်း",
      "experience.role5Bullet3": "System analysis နှင့် architecture design ဆောင်ရွက်ခြင်း",
      "experience.role5Bullet4": "Cloud data platform integration ဆောင်ရွက်ခြင်း",
      "skills.title": "⚙️ ကျွမ်းကျင်မှုများ",
      "skills.programming": "Programming",
      "skills.cloudData": "Cloud & Data",
      "skills.tools": "Tools",
      "skills.languages": "Languages",
      "certifications.title": "🏆 အောင်လက်မှတ်များ",
      "certifications.item1": "JLPT N1 (Japanese Language Proficiency Test)",
      "certifications.item2": "TOEIC",
      "certifications.item3": "Information Technology Engineers Examination (IP)",
      "certifications.item4": "Business Japanese Test (BJT)",
      "certifications.item5": "Oracle Certified Java Programmer Bronze",
      "certifications.item6": "Oracle Certified Java Programmer Silver",
      "certifications.item7": "Google Professional Cloud Architect",
      "certifications.item8": "Databricks Data Analyst Associate",
      "certifications.desc1": "ဂျပန်ဘာသာစကား အရည်အချင်းစစ် စာမေးပွဲ N1 အဆင့်။",
      "certifications.desc2": "အင်္ဂလိပ်စာ ဆက်သွယ်ရေးနှင့် လုပ်ငန်းသုံးစွမ်းရည်ကို တိုင်းတာသော အောင်လက်မှတ်။",
      "certifications.desc3": "IT အင်ဂျင်နီယာ အခြေခံကျွမ်းကျင်မှုကို တိုင်းတာသော အမျိုးသားစာမေးပွဲ။",
      "certifications.desc4": "လုပ်ငန်းသုံး ဂျပန်ဘာသာ ဆက်သွယ်ရေးစွမ်းရည်ကို တိုင်းတာသော စာမေးပွဲ။",
      "certifications.desc5": "Oracle မှ ထုတ်ပေးသော Java အခြေခံအဆင့် အောင်လက်မှတ်။",
      "certifications.desc6": "Oracle မှ ထုတ်ပေးသော Java အလယ်အလတ်အဆင့် အောင်လက်မှတ်။",
      "certifications.desc7": "Cloud architecture နှင့် design စွမ်းရည်အတွက် Professional အောင်လက်မှတ်။",
      "certifications.desc8": "Databricks ပေါ်တွင် data analytics စွမ်းရည်အတွက် Associate အောင်လက်မှတ်။",
      "contact.title": "📬 ဆက်သွယ်ရန်",
      "contact.cta": "ယုံကြည်ရပြီး data-driven ဖြစ်သော products များကို အတူတကွ တည်ဆောက်ကြပါစို့။",
      "contact.githubLabel": "GitHub:",
      "contact.emailLabel": "အီးမေးလ်:",
      "contact.phoneLabel": "ဖုန်း:",
      "contact.githubButton": "GitHub",
      "contact.emailButton": "Email",
      "contact.phoneButton": "Phone",
      "footer.rights": "မူပိုင်ခွင့်အားလုံး ရယူထားသည်။",
    },
  },
};

const applyLanguage = (langKey) => {
  const content = pageTranslations[langKey];
  if (!content) return;

  document.documentElement.lang = content.langCode;
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (!key) return;
    const translated = content.strings[key];
    if (typeof translated === "string") {
      node.textContent = translated;
    }
  });

  if (languageToggle) languageToggle.textContent = langKey;
};

if (yearNode) {
  yearNode.textContent = String(new Date().getFullYear());
}

let languageIndex = 0;
applyLanguage(languageCycle[languageIndex]);

if (languageToggle) {
  languageToggle.addEventListener("click", () => {
    languageIndex = (languageIndex + 1) % languageCycle.length;
    applyLanguage(languageCycle[languageIndex]);
  });
}

if (navToggle && primaryNav) {
  navToggle.addEventListener("click", () => {
    const expanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!expanded));
    primaryNav.classList.toggle("is-open", !expanded);
  });

  document.addEventListener("click", (event) => {
    if (
      primaryNav.classList.contains("is-open") &&
      !primaryNav.contains(event.target) &&
      !navToggle.contains(event.target)
    ) {
      primaryNav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
}

if (typedSkill) {
  let skillIndex = 0;
  let charIndex = 0;
  let deleting = false;

  const tick = () => {
    const currentSkill = skills[skillIndex];

    if (!deleting) {
      charIndex += 1;
      typedSkill.textContent = currentSkill.slice(0, charIndex);
      if (charIndex === currentSkill.length) {
        deleting = true;
        setTimeout(tick, 1200);
        return;
      }
    } else {
      charIndex -= 1;
      typedSkill.textContent = currentSkill.slice(0, charIndex);
      if (charIndex === 0) {
        deleting = false;
        skillIndex = (skillIndex + 1) % skills.length;
      }
    }

    const speed = deleting ? 55 : 95;
    setTimeout(tick, speed);
  };

  tick();
}

if (ctaWork && projectsSection) {
  ctaWork.addEventListener("click", (event) => {
    event.preventDefault();
    projectsSection.scrollIntoView({
      behavior: prefersReducedMotion.matches ? "auto" : "smooth",
      block: "start",
    });
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");
    if (!targetId) return;
    const target = document.querySelector(targetId);
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({
      behavior: prefersReducedMotion.matches ? "auto" : "smooth",
      block: "start",
    });

    if (primaryNav && navToggle) {
      primaryNav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
});

if (animatedNodes.length) {
  const revealImmediately = () => {
    animatedNodes.forEach((node) => node.classList.add("is-visible"));
  };

  if (prefersReducedMotion.matches || !("IntersectionObserver" in window)) {
    revealImmediately();
  } else {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const { target } = entry;
          let delayMs = 0;

          if (target.dataset.animate === "project-card") {
            delayMs = projectAnimatedNodes.indexOf(target) * 100;
          } else if (target.dataset.animate === "skill-item") {
            delayMs = skillAnimatedNodes.indexOf(target) * 50;
          }

          target.style.transitionDelay = `${delayMs}ms`;
          target.classList.add("is-visible");
          observer.unobserve(target);
        });
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    animatedNodes.forEach((node) => observer.observe(node));
  }
}
