/*=============== HEADER SCROLL ===============*/
const scrollHeader = (headerId) => {
  const header = document.getElementById(headerId);
  if (window.scrollY >= 75) header.classList.add("is-scroll");
  else header.classList.remove("is-scroll");
};
window.addEventListener("scroll", () => scrollHeader("header"));

/*=============== SCROLL UP ===============*/
const scrollUp = (scrollupId) => {
  const scrollUp = document.getElementById(scrollupId);
  scrollUp.onclick = () => {
    window.scrollTo(0, 0);
  };
};
scrollUp("scroll-up");

/*=============== SHOW SCROLL UP ===============*/
const showScrollUp = (scrollupId) => {
  const scrollUp = document.getElementById(scrollupId);

  if (window.scrollY >= 350) scrollUp.classList.add("show-scrollup");
  else scrollUp.classList.remove("show-scrollup");
};
window.addEventListener("scroll", () => showScrollUp("scroll-up"));

/*=============== DARK @ LIGHT THEME ===============*/
const themeButton = document.getElementById("nav-theme"),
  darkTheme = "dark-theme",
  iconTheme = "ri-sun-line",
  selectedTheme = localStorage.getItem("selected-theme"),
  selectedIcon = localStorage.getItem("selected-icon"),
  getCurrentTheme = () =>
    document.body.classList.contains(darkTheme) ? "dark" : "light",
  getCurrentIcon = () =>
    themeButton.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line";

if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](
    iconTheme
  );
}

themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});
