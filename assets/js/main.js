/*=============== CREATE NAV AND FOOTER ===============*/
export const createNavAndFooter = (headerId, footerId, active) => {
  const year = new Date().getFullYear();

  const nav = `
  <nav class="nav container">
    <div>
      <a href="/" class="nav__logo">QDNP</a>
    </div>

    <div id="nav-menu" class="nav__menu">
      <ul class="nav__list">
        <li class="nav__item">
          <a href="#" class="nav__link">
            <i class="ri-home-line"></i>
            <span>Accueil</span>
          </a>
        </li>

        <li class="nav__item">
          <a href="#" class="nav__link">
            <i class="ri-newspaper-line"></i>
            <span>News</span>
          </a>
        </li>

        <li class="nav__item">
          <a href="#" class="nav__link">
            <i class="ri-user-voice-line"></i>
            <span>Artistes</span>
          </a>
        </li>

        <li class="nav__item">
          <a href="#" class="nav__link">
            <i class="ri-headphone-line"></i>
            <span>Musiques</span>
          </a>
        </li>

        <li class="nav__item">
          <a href="#" class="nav__link">
            <i class="ri-video-line"></i>
            <span>Videos</span>
          </a>
        </li>
      </ul>
    </div>

    <i id="nav-theme" class="ri-moon-line nav__theme"></i>
  </nav>
`;
  const footerElement = `
  <div class="footer__container container grid">
    <div>
      <a href="#" class="footer__logo">QDNP</a>
      <p class="footer__description">Studio de production musicale</p>
    </div>

    <div class="footer__content">
      <div>
        <h3 class="footer__title">Pages</h3>

        <ul class="footer__links">
          <li>
            <a href="#" class="footer__link">News</a>
          </li>

          <li>
            <a href="#" class="footer__link">Artistes</a>
          </li>

          <li>
            <a href="#" class="footer__link">Musiques</a>
          </li>

          <li>
            <a href="#" class="footer__link">Videos</a>
          </li>
        </ul>
      </div>

      <div>
        <h3 class="footer__title">Productions</h3>

        <ul class="footer__links">
          <li>
            <a href="#" class="footer__link">Qui sommes-nous ?</a>
          </li>

          <li>
            <a href="#" class="footer__link">Nous Contactez</a>
          </li>

          <li>
            <a href="#" class="footer__link">Conditons Utilisation</a>
          </li>

          <li>
            <a href="#" class="footer__link">Mentions L&eacute;gals</a>
          </li>
        </ul>
      </div>

      <div>
        <h3 class="footer__title">R&eacute;seaux</h3>

        <ul class="footer__social">
          <a href="#" class="footer__social-link">
            <i class="ri-facebook-line"></i>
          </a>

          <a href="#" class="footer__social-link">
            <i class="ri-instagram-line"></i>
          </a>

          <a href="#" class="footer__social-link">
            <i class="ri-youtube-line"></i>
          </a>
        </ul>
      </div>
    </div>
  </div>

  <span class="footer__copyright">
    &copy; ${year.toString()} QDNP, Tous droits r&eacute;serv&eacute;s.
  </span>
`;

  const header = document.getElementById(headerId),
    footer = document.getElementById(footerId);

  header.innerHTML = nav;
  footer.innerHTML = footerElement;

  document.querySelectorAll(".nav__link")[active].classList.add("is-active");

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
      themeButton.classList.contains(iconTheme)
        ? "ri-moon-line"
        : "ri-sun-line";

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

  /*=============== SCROLLREVEAL ===============*/
  const footerReveal = ScrollReveal({
    origin: "left",
    distance: "60px",
    duration: 2000,
    delay: 400,
  });

  footerReveal.reveal(`.footer__logo, .footer__description`);
  footerReveal.reveal(`.footer__title`, { delay: 500 });
  footerReveal.reveal(`.footer__links, .footer__social`, { delay: 600 });
  footerReveal.reveal(`.footer__link, .footer__social-link`, { delay: 700 });
  footerReveal.reveal(`.footer__copyright`, { delay: 800 });
};
