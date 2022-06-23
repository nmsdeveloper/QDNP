/*=============== NEWS ===============*/
const showAll = (id) => {
  window.addEventListener("resize", () => {
    const element = document.getElementById(id);
    if (document.body.offsetWidth >= 640)
      element.classList.remove("swiper-slide");
    else element.classList.add("swiper-slide");
  });
};
showAll("news-all");
showAll("artists-all");
showAll("musics-all");
showAll("videos-all");

/*=============== TYPED ===============*/
var options = {
  strings: [
    "Quoi De Neuf? Prodution",
    "Studio De Production Musicale",
    "Par Dylane 241",
  ],
  typeSpeed: 90,
  backSpeed: 70,
  loop: true,
};
var typed = new Typed(".head__description", options);

/*=============== SWIPER ===============*/
/* NEWS */
var swiperNews = new Swiper(".news__container", {
  spaceBetween: 32,
  centeredSlides: true,
  slidesPerView: "auto",

  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
});

/* ARTISTS */
var swiperArtists = new Swiper(".artists__container", {
  spaceBetween: 32,
  centeredSlides: true,
  slidesPerView: "auto",

  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
});

/* MUSICS */
var swiperMusics = new Swiper(".musics__container", {
  spaceBetween: 32,
  centeredSlides: true,
  slidesPerView: "auto",

  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
});

/* VIDEOS */
var swiperVideos = new Swiper(".videos__container", {
  spaceBetween: 32,
  centeredSlides: true,
  slidesPerView: "auto",

  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
});

/*=============== SCROLLREVEAL ===============*/
const homeReveal = ScrollReveal({
  origin: "left",
  distance: "60px",
  duration: 2500,
  delay: 400,
  reset: true,
});

homeReveal.reveal(`.head__title`, { origin: "top" });
homeReveal.reveal(`.head__img`, { delay: 500, origin: "top" });
homeReveal.reveal(`.socials__link`);
homeReveal.reveal(`.section__subtitle`);
homeReveal.reveal(`.section__title`, {
  delay: 500,
  reset: false,
});
homeReveal.reveal(`.right-align`, { origin: "right" });
homeReveal.reveal(`.right-align-2`, {
  delay: 500,
  origin: "right",
  reset: false,
});
// homeReveal.reveal(`.footer__copyright`, { delay: 800 });
