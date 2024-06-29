window.addEventListener("scroll", function () {
  const header = this.document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

//portfolio section

const portfolioModels = document.querySelectorAll(".portfolio-model");
const imgCards = document.querySelectorAll(".img-card");
const portfolioCloseBtns = document.querySelectorAll(".portfolio-close-btn");

var portfolioModel = function (modelClick) {
  portfolioModels[modelClick].classList.add("active");
};

imgCards.forEach((imgCard, i) => {
  imgCard.addEventListener("click", () => {
    portfolioModel(i);
  });
});

portfolioCloseBtns.forEach((portfolioCloseBtns) => {
  portfolioCloseBtns.addEventListener("click", () => {
    portfolioModels.forEach((portfolioModelView) => {
      portfolioModelView.classList.remove("active");
    });
  });
});

//Our Clients Swipper
var swiper = new Swiper(".client-swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const scrollTopBtn = document.querySelector(".scrolltotop-btn");

window.addEventListener("scroll", function () {
  scrollTopBtn.classList.toggle("active", window.scrollY > 500);
});

scrollTopBtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    let sectionHeight = current.offsetHeight;
    let sectionTop = current.offsetTop - 50;
    let id = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav-items a[href*=" + id + "]")
        .classList.add("active");
    } else {
      document
        .querySelector(".nav-items a[href*=" + id + "]")
        .classList.remove("active");
    }
  });
});

const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");
const navItems = document.querySelectorAll(".nav-items a");

menuBtn.addEventListener("click", () => {
  navigation.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  navigation.classList.remove("active");
});

navItems.forEach((navItem) => {
  navItem.addEventListener("click", () => {
    navigation.classList.remove("active");
  });
});

//Scroll Reveal Animations
//Common reveal options to create reveal animations
ScrollReveal({
  reset: true,
  distance: "60px",
  duration: 1000,
  delay: 100,
});

//Target elements and specify options to create reveal animations
ScrollReveal().reveal(".home .info h2, .section-title-01, .section-title-02", {
  delay: 400,
  origin: "left"
});
ScrollReveal().reveal(".home .info h3, .home .info p, .about-info .btn", {
  delay: 500,
  origin: "right"
});
ScrollReveal().reveal(".home .info .btn", { dealy: 700, origin: "bottom" });
ScrollReveal().reveal(".media-icons i, .contact-left li", {
  delay: 400,
  origin: "left",
  interval: 200
});
ScrollReveal().reveal(".home-img, .about-img", {
  delay: 400,
  origin: "bottom"
});
ScrollReveal().reveal(".about .description, .contact-right", {
  delay: 500,
  origin: "right"
});
ScrollReveal().reveal(".about .professional-list li", {
  delay: 400,
  origin: "right",
  interval: 200
});
ScrollReveal().reveal(
  ".skills-description, .contact-card, .client-swiper, .contact-left-h2",
  {
    delay: 600,
    origin: "left"
  }
);
ScrollReveal().reveal(
  ".experience-card, .services-card, .education, .portfolio .img-card",
  {
    delay: 700,
    origin: "bottom",
    interval: 200
  }
);
ScrollReveal().reveal("footer .group", {
  delay: 400,
  origin: "top",
  interval: 200
});
