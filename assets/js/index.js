/*=============== NEWS ===============*/
const showAll = (id) => {
  window.addEventListener("resize", () => {
    const element = document.getElementById(id);
    if (document.body.offsetWidth >= 640)
      element.classList.remove("swiper-slide");
    else element.classList.add("swiper-slide");
  });
};
showAll("show-all");

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
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",

  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
});
