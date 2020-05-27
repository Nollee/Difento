document.addEventListener('DOMContentLoaded', function () {
  content();

  const sections = document.querySelectorAll('.sub')
  console.log(sections);


  // INITIALIZE AOS
  AOS.init();

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
          <h3>${data.name}, <span>${temp}</span> ºC</h3>
        </div>
      `;
    document.querySelector("#weather").innerHTML = htmlTemplate;
  }






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
      <a href="#" id="vanish">
      </a>
      </div>
      <div class="tabbar-some">
          <a href="https://www.linkedin.com/" target="_blank"><i class="fab fa-linkedin"></i></a>
          <a href="https://www.linkedin.com/" target="_blank"><i class="fab fa-facebook-square"></i></a>
          <a href="https://www.linkedin.com/" target="_blank"><i class="fab fa-instagram-square"></i></a>
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
        <h1>VI SKABER MINDER<span>.</span></h1>
    </div>
      <p>Lorem Ipsum er ganske enkelt fyldtekst fra print- og typografiindustrien. Lorem Ipsum har været standard fyldtekst siden 1500-tallet, hvor en ukendt trykker sammensatte en tilfældig spalte for at trykke en bog til sammenligning af forskellige skrifttyper. Lorem Ipsum har ikke alene.</p>
      <!-- buttons -->
      <div class="hero-btns">
            <!-- grey button -->
        <a class="btn-grey" href="#cases"><div>cases <i class="fas fa-layer-group"></i></div></a>
              <!-- orange button -->
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
    <div id="slides" class="swiper-wrapper">
        <!-- Slides -->

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
    <div id="services-anchor" class="anchor">anchor</div>
    </article>

    <article id="about" class="sub">
    <div id="about-anchor" class="anchor"></div>
    <div class="sub-wrapper">
    <h2>OM OS</h2>
    <div class="about-container">
    <div class="about-left">
    <div class="text-box">
    <h3>Difento</h3>
    <p>
    Lorem Ipsum er ganske enkelt fyldtekst fra print- og typografiindustrien. Lorem Ipsum har været standard fyldtekst siden 1500-tallet, hvor en ukendt trykker sammensatte en tilfældig spalte for at trykke en bog til sammenligning af forskellige skrifttyper. Lorem Ipsum har ikke alene.
    </p>
    </div>
    <div class="skills">
    <h4>VORES KOMPETENCER</h4>
    <div class="skills-container">
    <p>Responsiv Design</p>
    <p>Hjemmesider</p>
    <p>Brugeroplevelse</p>
    <p>Grafisk Design</p>
    <p>WordPress</p>
    <p>Skræddersyet løsninger</p>
    </div>
    </div>
    </div>
    <div class="about-right">
    <div class="person-container">
    <div class="person">
    <div class="person-card"data-aos="zoom-in" data-aos-delay="300">
    <img src="./images/martin.jpg" alt="martin">
    <h5>Martin Eneberg</h5>
    <a href="tel:+4527884665">+45 27 88 46 64</a>
    <a href="mailto:me@difento.dk">me@difento.dk</a>
    </div>
    </div>
    <div class="person">
    <div class="person-card">
    <img src="./images/mikkel.jpg" alt="mikkel" data-aos="zoom-in" data-aos-delay="400">
    <h5>Mikkel Faartoft</h5>
    <a href="tel:+4523677669">+45 23 67 76 69</a>
    <a href="mailto:mj@difento.dk">mj@difento.dk</a>
    </div>
    </div>
    </div>
    </div>
    </div>
    </article>


    <article id="recommend" class="sub">
    <div id="recommend-anchor" class="anchor">anchor</div>
    </article>

    <article id="contact" class="sub">
    <div id="contact-anchor" class="anchor"></div>
      <div class="sub-wrapper">
      <h2>Kontakt</h2>


      <!-- contact form --->
      <!------------------------------------CONTACT FORM--------------------->
      <form role="form" method="post" action="contact-fomr-handler.php" class="form-horizontal">

                    <input type="text" class="form-control" id="name" name="name" placeholder="Full Name" required>

	            	<input type="email" class="form-control" id="email" name="email" placeholder="Email Address" required>

	                <textarea class="form-control" id="msg" name="msg" placeholder="Enter your message" rows="5" required></textarea>

                    <input type="submit" value="Post" class="" name="post">

                <input type="hidden" id="token" name="token">

            </form>





      <!------ end ------->


      </div>
    </article>
    <footer class="sub">
    <div class="footer-wrapper">
    <div class="footer-top">
    <div class="logo footer-logo">
    <img id="butterfly" src="./images/logo-sign.svg" alt="logo" data-aos="zoom-in" data-aos-delay="300">
    <img id="logo-text"src="./images/logo-word.svg" alt="logo" data-aos="zoom-in" data-aos-delay="400">
    </div>
    <div class="footer-topdesc">
    <p>Lorem Ipsum er ganske enkelt fyldtekst fra print- og typografiindustrien. Lorem Ipsum har været standard fyldtekst siden 1500-tallet, hvor en ukendt trykker sammensatte en tilfældig spalte for at trykke en bog til sammenligning af forskellige skrifttyper. Lorem Ipsum har ikke alene.</p>
    <div class="footer-icons">
    <a href="https://wordpress.com/"> <i class="fab fa-wordpress-simple"></i></a>
    <a href="https://www.shopify.com/"<i class="fab fa-shopify"></i></a>
    </div>
    </div>
    </div>
    <div class="footer-line"></div>
    <div class="footer-bot">
    <div class="footer-botleft">
    <div class="adresse">
    <h4>Adresse</h4>
    <!-- LAV DETTE TIL ET LINK TIL GOOGLE MAPS, NÅR I HAR FÅET KONTOR OG GOOGLE MY BUSINESS -->
    <p>Dr Holsts Vej 50 <br>8230 Åbyhøj</p>
    </div>
    <div class="contact">
    <h4>Kontakt</h4>
    <a href="mailto:kontakt@difento.dk">kontakt@difento.dk</a>
    <div class="footer-phone">
    <a href="tel:+4523677669">+45 23 67 76 69</a>
    <span class="phone-active"></span>
    </div>
    </div>
    </div>
    <div class="footer-botmid">
    <div class="boring">
    <h4>Det Kedelige</h4>
    <a href="#">Cookies</a>
    <a href="#">Persondatapolitik</a>
    <a href="#">Handelsbetingelser</a>
    <a href="#">Serviceaftale</a>
    </div>
    <div class="cvr">
    <h4>CVR</h4>
    <a href="https://cvrapi.dk/virksomhed/dk/fento-is/41056924">41056924</a>
    </div>
    </div>
    <div class="footer-botright">
    <h4>Åbningstider</h4>
    <div class="opening">
    <div class="days">
    <p>Mandag</p>
    <p>Tirsdag</p>
    <p>Onsdag</p>
    <p>Torsdag</p>
    <p>Fredag</p>
    <p>Lørdag</p>
    <p>Søndag</p>
    </div>
    <div class="times">
    <p>9-21</p>
    <p>9-21</p>
    <p>9-21</p>
    <p>9-21</p>
    <p>9-21</p>
    <p>9-21</p>
    <p>9-21</p>
    </div>
    </div>
    </div>

    </div>
    </div>
    <div class="footer-img" data-aos="fade-left" data-aos-delay="600"></div>
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

  const sectionMargin = 350;
  let currentActive = 0;

  console.log(menu_links);


  window.addEventListener("scroll", () => {
    const current = sections.length - [...sections].reverse().findIndex((section) => window.scrollY >= section.offsetTop - sectionMargin) - 1
    console.log(current);


    if (current !== currentActive) {
      removeAllActive();
      currentActive = current;
      makeActive(current);
    };


    // ==================== ÆNDRER BAGGRUNDEN ==============================
    let descriptions = document.querySelectorAll(".link-desc");

    if (current == 1 || current == 4) {
      document.querySelector("body").style.backgroundColor = "#F2F2F2"
      for (let desc of descriptions) {
        desc.style.backgroundColor = "#172430"
      }
    } else {
      document.querySelector("body").style.backgroundColor = "#172430"
      for (let desc of descriptions) {
        desc.style.backgroundColor = "#F2F2F2"
      }

    }




  });




  // ====================== GÅR OP I TOPPEN =============================================
  document.getElementById("nav-logo").addEventListener("click", function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });


  // ==================== ÆNDRER FARVEN PÅ CIRKLEN I FOOTER

  function time(){
    let t = new Date();
    let h = t.getHours()

    if (h >= 9 && h <= 21) {
      document.querySelector(".phone-active").style.backgroundColor = "lightgreen"
    } else {
      document.querySelector(".phone-active").style.backgroundColor = "red"
    }

  }

  time();


}, false);

grecaptcha.ready(function() {
  grecaptcha.execute('6LdwzfwUAAAAALCr3M_nRgn8-TN7_KYXWatiF7ML', {action: 'homepage'}).then(function(token) {
     // console.log(token);
     document.getElementById("token").value = token;
  });
});

//

let projects = [];


function getProjects() {
  fetch('https://difento.dk/wordpress/wp-json/wp/v2/posts?_embed')
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      console.log(json);
      appendCases(json);
      projects = json;
      setTimeout(function () {
      }, 200);
    });
}

console.log(projects);
getProjects();

// append projects to the DOM
function appendCases(projects) {
  let htmlTemplate = "";

  for (let project of projects) {
    htmlTemplate += `
      <div class="swiper-slide">
        <img src="${project.acf.image}"></h2>
      </div>
    `;
  }

  document.querySelector('#slides').innerHTML = htmlTemplate;
}
