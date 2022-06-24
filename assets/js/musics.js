/*=============== MUSICS ===============*/
const filterActive = () => {
  const filter = document.querySelectorAll(".filter__option");

  filter.forEach((f) =>
    f.addEventListener("click", () => {
      filter.forEach((c) => c.classList.remove("active"));
      f.classList.add("active");
    })
  );
};
filterActive();

/*=============== SWIPER ===============*/
/* HEAD */
var swiperHead = new Swiper(".head__container", {
  spaceBetween: 32,
  centeredSlides: true,
  slidesPerView: "auto",

  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});
