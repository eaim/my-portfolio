document.documentElement.classList.add("js");

const skills = ["Language", "Learning", "Cycling"];
const typedSkill = document.getElementById("typed-skill");
const ctaWork = document.getElementById("view-work-btn");
const projectsSection = document.getElementById("projects");
const navToggle = document.querySelector(".navbar-toggle");
const primaryNav = document.getElementById("primary-nav");
const siteHeader = document.querySelector(".navbar");
const yearNode = document.getElementById("year");
const navLinks = document.querySelectorAll('.navbar-menu a[href^="#"]');
const animatedNodes = document.querySelectorAll("[data-animate]");
const projectAnimatedNodes = [
  ...document.querySelectorAll('[data-animate="project-card"]'),
];
const skillAnimatedNodes = [
  ...document.querySelectorAll('[data-animate="skill-item"]'),
];
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

if (yearNode) {
  yearNode.textContent = String(new Date().getFullYear());
}

const syncHeaderState = () => {
  if (!siteHeader) return;
  siteHeader.classList.toggle("is-scrolled", window.scrollY > 12);
};

syncHeaderState();
window.addEventListener("scroll", syncHeaderState, { passive: true });

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
