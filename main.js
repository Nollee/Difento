document.addEventListener('DOMContentLoaded', function () {
  content();

  const sections = [...document.querySelectorAll('.sub')]
  console.log(sections);




  //  =========================VANTA BIRDS FRA VANTAJS ===================================
  VANTA.BIRDS({
    el: "#birds",
    mouseControls: true,
    touchControls: true,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    backgroundColor: 0x172430,
    color1: 0xff593e,
    color2: 0xfe2806,
    colorMode: "varianceGradient",
    birdSize: 1.20,
    wingSpan: 14.00,
    speedLimit: 1.90,
    separation: 50.00,
    alignment: 59.00,
    cohesion: 16.00,
    quantity: 3.00
  });


  // SWIPER SLIDER

  let mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 2,
    spaceBetween: 200,
    centeredSlides: true,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
    /*
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    */
  });

/* weather api */
const apiCall = 'https://api.openweathermap.org/data/2.5/weather?q=aarhus,dk&units=metric&appid=b892cb50e6b072e2bd37a1bc8049ee3a';

/* fetch(apiCall)
.then(response => response.json())
.then(data => console.log(data)); */

fetch(apiCall)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
    appendWeather(data);
  });

  fetch(apiCall)
    .then(response => response.json())
    .then(data => console.log(data));

  function appendWeather(data) {
    let htmlTemplate = "";
    Math.round(data.main.temp);
    let temp = Math.round(`${data.main.temp}`);
      htmlTemplate += `
        <div id="weather-container">
        <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">
          <h2>${data.name}, <span>${temp}</span> ºC</h2>
        </div>
      `;
    document.querySelector("#weather").innerHTML = htmlTemplate;
  }



  window.addEventListener("scroll", () => {


  window.addEventListener("scroll", () => {

    if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
      document.querySelector(".tabbar").classList.add("pop")

    } else {
      document.querySelector(".tabbar").classList.remove("pop")
    }
  });


  function content() {
    document.querySelector('#content').innerHTML += /*html*/ `
    <nav class="tabbar">
      <div class="nav-container">
      <img id="nav-logo" src="./images/logo-sign.svg" alt="logo">
      <a id="caselink" href="#cases"><i class="fas fa-layer-group"></i>
      <div id="casedesc" class="link-desc">
      <p>CASES</p>
      </div>
      </a>
      <a id="servicelink" href="#services-anchor"><i class="fas fa-hourglass-half"></i>
      <div id="procesdesc" class="link-desc">
      <p>PROCES</p>
      </div>
      </a>
      <a id="aboutlink" href="#about-anchor"><i class="fas fa-user-friends"></i>
      <div id="aboutdesc" class="link-desc">
      <p>OM OS</p>
      </div>
      </a>
      <a id="recommendlink" href="#recommend-anchor"><i class="fas fa-laugh"></i>
      <div id="contactdesc" class="link-desc">
      <p>ANBEFALINGER</p>
      </div>
      <a id="contactlink" href="#contact-anchor"><i class="fas fa-paper-plane"></i>
      <div id="contactdesc" class="link-desc">
      <p>KONTAKT</p>
      </div>
      </a>
      </div>
      </nav>

    <article id="hero" class="hero-forside">

    <nav class="top-nav">

    <div class="logo">
    <img id="butterfly" src="./images/logo-sign.svg" alt="logo">
    <img id="logo-text"src="./images/logo-word.svg" alt="logo">
    </div>

    <div class="top-links">
    <a href="#cases-anchor">
    <i class="fas fa-layer-group"></i>
    <p>CASES</p>
    </a>
    <a href="#services-anchor">
    <i class="fas fa-hourglass-half"></i>
    <p>PROCES</p>
    </a>
    <a href="#about-anchor">
    <i class="fas fa-user-friends"></i>
    <p>OM OS</p>
    </a>
    <a href="#recommend-anchor">
    <i class="fas fa-laugh"></i>
    <p>ANBEFALINGER</p>
    </a>
    <a href="#contact-anchor">
    <i class="fas fa-paper-plane"></i>
    <p>KONTAKT</p>
    </a>
    </div>
    </nav>

    <div class="hero-text">
      <div class="hero-head">
        <h1>VI SKABER MINDER</h1>
        <div class="square"></div>
    </div>
      <p>Lorem Ipsum er ganske enkelt fyldtekst fra print- og typografiindustrien. Lorem Ipsum har været standard fyldtekst siden 1500-tallet, hvor en ukendt trykker sammensatte en tilfældig spalte for at trykke en bog til sammenligning af forskellige skrifttyper. Lorem Ipsum har ikke alene.</p>
      <div class="hero-btns">
      <a class="btn-grey" href="#cases-anchor"><div>cases <i class="fas fa-layer-group"></i></div></a>
      <a class="btn-orange" href="#contact-anchor"><div>kontakt <i class="fas fa-paper-plane" ></i></div></a>
      </div>
    </div>
    <div id="birds">
    <div class="gradient-left"></div>
    <div class="gradient-bot"></div>
    </div>
<div id="hero-bottom-content">
<div id="weather"></div><!---- container for the wather api --->
      <div id="hero-bottom-arrow"><a href="#cases"><i class="fas fa-angle-down"></i></a></div>
        <div id="hero-bottom-some">
          <a href="https://www.linkedin.com/" target="_blank"><i class="fab fa-linkedin"></i></a>
          <a href="https://www.facebook.com/" target="_blank"><i class="fab fa-facebook-square"></i></a>
          <a href="https://www.instagram.com/" target="_blank"><i class="fab fa-instagram-square"></i></a>
        </div>
    </div>
</div>
</article>

    <article id="cases" class="sub">

    <div class="swiper-container">
    <!-- Additional required wrapper -->
    <div class="overlay">
    <h4 class="slider-count">01</h4>
    <h4 class="slider-job">website</h4>
    <div class="slider-year">
      <div class="line"></div>
      <h4>2019</h4>
    </div>
    <h4 class="slider-company">BUTIK TINC</h4>
    </div>
    <div class="swiper-wrapper">
        <!-- Slides -->
        <div class="swiper-slide">
          <img src="./images/tinc.png">
        </div>
        <div class="swiper-slide">
          <img src="./images/ry.png">
        </div>
        <div class="swiper-slide">
        <img src="./images/beton.png">
        </div>
        ...
    </div>
    <!--

    <div class="swiper-pagination"></div>

    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>

    <div class="swiper-scrollbar"></div>
    -->
</div>
    </article>
     <article id="services" class="sub">
    <div id="services-anchor">anchor</div>
    </article>

    <article id="about" class="sub">
    <div id="about-anchor"></div>
    </article>


    <article id="recommend" class="sub">
    <div id="recommend-anchor">anchor</div>
    </article>

    <article id="contact" class="sub">
    <div id="contact-anchor">anchor</div>

    </article>
    <footer class=>

    </footer>
  `;

  }



  // ====================== LAVER RINGENE RUNDT OM NAVIGATION ====================================


  /* https://medium.com/p1xts-blog/scrollspy-with-just-javascript-3131c114abdc */
  const menu_links = document.querySelectorAll(".nav-container a");

  const makeActive = (link) => menu_links[link].classList.add("active");
  const removeActive = (link) => menu_links[link].classList.remove("active");
  const removeAllActive = () => [...Array(sections.length).keys()].forEach((link) => removeActive(link));

  console.log([...Array(sections.length).keys()]);

  const sectionMargin = 50;
  let currentActive = 0;

  console.log(menu_links);


  window.addEventListener("scroll", () => {
    const current = sections.length - [...sections].reverse().findIndex((section) => window.scrollY >= section.offsetTop - sectionMargin) - 1
    console.log(current);


    if (current !== currentActive) {
      removeAllActive();
      currentActive = current;
      makeActive(current);
    }



  });

  /* changes color of the background when the page is scrolled */
  const colors = ['darkBlue', 'darkBlue', 'grey', 'darkBlue', 'grey']

  function changeColorOnScroll() {

    const scrollFromTop = window.pageYOffset

    for (let i = 0; sections.length > i; i++) {

      if (scrollFromTop <= sections[i].offsetTop) {
        document.body.className = colors[i]
        break
      }

    }

  }

}


  // ====================== GÅR OP I TOPPEN =============================================
  document.getElementById("nav-logo").addEventListener("click", function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });


}, false);
