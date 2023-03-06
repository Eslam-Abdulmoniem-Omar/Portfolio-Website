/*=============== CHANGE BACKGROUND HEADER ===============*/
const header = document.getElementById("header");

function scrollHeader() {
  if (this.scrollY > 50) header.classList.add("scroll-header");
}

window.addEventListener("scroll", scrollHeader);

// ================ Services MOdal =====================
const modalViews = document.querySelectorAll(".services__modal");
const modalBtns = document.querySelectorAll(".services__card-btn");
const modalClose = document.querySelectorAll(".services__modal-close");

modalBtns.forEach((btn, index) => {
  btn.addEventListener("click", (e) => {
    modalViews[index].classList.add("active-modal");
  });
});

modalClose.forEach((close, index) => {
  close.addEventListener("click", (e) => {
    modalViews[index].classList.remove("active-modal");
  });
});

// =============== MIXITUP FILTER PORTFOLIO ============
let mixerPortfolio = mixitup(".work__container", {
  selectors: {
    target: ".work__card",
  },
  animation: {
    duration: 300,
  },
});

// ============ ACTIVE WORK ===============
const linkWork = document.querySelectorAll(".work__filters-item");

linkWork.forEach((item) => {
  item.addEventListener("click", (e) => {
    document.querySelector(".active-work").classList.remove("active-work");
    e.target.classList.add("active-work");
  });
});

// ==================== SWIPER TESTIMONIAL ====================    var swiper = new Swiper(".mySwiper", {
let swiperTestimonial = new Swiper(".testimonial__container", {
  spaceBetween: 24,
  loop: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 48,
    },
  },
});

// ===================== SCROLL ACTIVE LINK ======================
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;
  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 30;
    const sectionId = section.getAttribute("id");
    if (scrollY > sectionTop && scrollY <= sectionHeight + sectionTop) {
      document
        .querySelector(`.nav-item a[href*='${sectionId}']`)
        .classList.add("active-link");
    } else {
      document
        .querySelector(`.nav-item a[href*='${sectionId}']`)
        .classList.remove("active-link");
    }
  });
}

window.addEventListener("scroll", scrollActive);

// ================= LIGHT AND DARK THEME =========================
let lightMode = localStorage.getItem("lightMode");
const themeIcon = document.querySelector(".change-theme");
const body = document.body;

function enableLightMode() {
  body.classList.add("light-theme");
  themeIcon.classList.add("bx-sun");
  localStorage.setItem("lightMode", "enabled");
}

function disableLightMode() {
  body.classList.remove("light-theme");
  themeIcon.classList.remove("bx-sun");
  localStorage.setItem("lightMode", null);
}

if (lightMode === "enabled") {
  enableLightMode();
}

themeIcon.addEventListener("click", (e) => {
  lightMode = localStorage.getItem("lightMode");
  if (lightMode !== "enabled") {
    enableLightMode();
  } else {
    disableLightMode();
  }
});

// ======================== SCROLL REVEAL ANIMATION =====================
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
});

sr.reveal(`.home__data ,.home__buttons `);
sr.reveal(`.home__handle`, { delay: 700 });
sr.reveal(`.home__social ,.home__scroll`, { delay: 900  , origin: 'bottom'});
