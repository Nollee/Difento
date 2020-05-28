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
    minHeight: 800.00,
    minWidth: 800.00,
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
    quantity: 2.00
  });


  // SWIPER SLIDER

  let mySwiper = new Swiper('.swiper1', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 2,
    spaceBetween: 200,
    centeredSlides: true,
    observer: true,
    observeParents: true,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination1',
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

  let projects = [];
  let procesIcons = ['fas fa-search', 'fas fa-paint-brush', 'far fa-comment-dots', 'fas fa-desktop', 'far fa-user-circle']
  let swiper2 = new Swiper('.swiper2', {
    spaceBetween: 200,
    effect: 'fade',
    pagination: {
      el: '.swiper-pagination2',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '"> <i class="' + (procesIcons[index]) + '"/>' + '</i></span>';
      }

    },
  });



  function getProjects() {
    fetch('https://difento.dk/wordpress/wp-json/wp/v2/posts?_embed')
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        appendCases(json);
        projects = json;
        setTimeout(function () {
        }, 200);
      });

  }


  getProjects();




  // append projects to the DOM
  function appendCases(projects) {
    let htmlTemplate = " ";
    for (let project of projects) {
      htmlTemplate += `
      <div  class="swiper-slide" id="${project.id}">
        <img  src="${project.acf.image}"></h2>
      </div>
    `;
    }

    let i = 0;
    let caseInfo = projects[i];
    let overlayInfo = "";


    document.querySelector('#slides').innerHTML = htmlTemplate;


    mySwiper.on('slideChangeTransitionEnd', async function findSlide() {
      let pros = document.querySelectorAll('.swiper-slide');
      overlayInfo = " ";
      for (let pro of pros) {
        if (pro.classList.contains('swiper-slide-active') === true) {
          let data = await fetch(`https://difento.dk/wordpress/wp-json/wp/v2/posts/${pro.id}`).then(res => res.json());
          overlayInfo += `
          <h4 class="slider-count">${data.acf.count}</h4>
          <h4 class="slider-job">${data.acf.description}</h4>
          <div class="slider-year">
          <div class="line"></div>
          <h4>${data.acf.year}</h4>
          </div>
          <h4 class="slider-company">${data.acf.title}</h4>
          `;
          document.querySelector('#caseinfo').innerHTML = overlayInfo;
        }
      }
    });
  }














  /* weather api */
  const apiCall = 'https://api.openweathermap.org/data/2.5/weather?q=aarhus,dk&units=metric&appid=b892cb50e6b072e2bd37a1bc8049ee3a';

  /* fetch(apiCall)
  .then(response => response.json())
  .then(data => console.log(data)); */

  fetch(apiCall)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
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
      <a id="servicelink" href="#proces-anchor"><i class="fas fa-hourglass-half"></i>
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
    <a href="#proces-anchor">
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

    <div class="swiper-container swiper1">
    <!-- Additional required wrapper -->
    <div id="caseinfo" class="overlay">
    </div>
    <div id="slides" class="swiper-wrapper">
        <!-- Slides -->

    </div>
    <!--

    <div class="swiper-pagination1"></div>

    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>

    <div class="swiper-scrollbar"></div>
    -->
</div>
    </article>


     <article id="proces" class="sub">
    <div id="proces-anchor" class="anchor"></div>
    <div class="sub-wrapper dark">
    <h2 class="darkh2">Proces</h2>

    <div class="swiper-container swiper2">

    <div class="swiper-wrapper">

    <div class="swiper-slide proc">
    <img src="./images/research.svg" alt="research" data-aos="zoom-in" data-aos-delay="300">
    <div class="proces-text">
    <h3>Research</h3>
    <p>  Lorem Ipsum er ganske enkelt fyldtekst fra print- og typografiindustrien. Lorem Ipsum har været standard fyldtekst siden 1500-tallet, hvor en ukendt trykker sammensatte en tilfældig spalte for at trykke en bog til sammenligning af forskellige skrifttyper. Lorem Ipsum har ikke alene.</p>
    </div>
    </div>
    <div class="swiper-slide proc">
    <img src="./images/brush.svg" alt="design" data-aos="zoom-in" data-aos-delay="300">
    <div class="proces-text">
    <h3>Design</h3>
    <p>  Lorem Ipsum er ganske enkelt fyldtekst fra print- og typografiindustrien. Lorem Ipsum har været standard fyldtekst siden 1500-tallet, hvor en ukendt trykker sammensatte en tilfældig spalte for at trykke en bog til sammenligning af forskellige skrifttyper. Lorem Ipsum har ikke alene.</p>
    </div>
    </div>
    <div class="swiper-slide proc">
    <img src="./images/meet.svg" alt="møde" data-aos="zoom-in" data-aos-delay="300">
    <div class="proces-text">
    <h3>Møde</h3>
    <p>  Lorem Ipsum er ganske enkelt fyldtekst fra print- og typografiindustrien. Lorem Ipsum har været standard fyldtekst siden 1500-tallet, hvor en ukendt trykker sammensatte en tilfældig spalte for at trykke en bog til sammenligning af forskellige skrifttyper. Lorem Ipsum har ikke alene.</p>
    </div>
    </div>
    <div class="swiper-slide proc">
    <img src="./images/dev.svg" alt="udvikling" data-aos="zoom-in" data-aos-delay="300">
    <div class="proces-text">
    <h3>Udvikling</h3>
    <p>  Lorem Ipsum er ganske enkelt fyldtekst fra print- og typografiindustrien. Lorem Ipsum har været standard fyldtekst siden 1500-tallet, hvor en ukendt trykker sammensatte en tilfældig spalte for at trykke en bog til sammenligning af forskellige skrifttyper. Lorem Ipsum har ikke alene.</p>
    </div>
    </div>
    <div class="swiper-slide proc">
    <img src="./images/user.svg" alt="brugertest" data-aos="zoom-in" data-aos-delay="300">
    <div class="proces-text">
    <h3>Brugertest</h3>
    <p>  Lorem Ipsum er ganske enkelt fyldtekst fra print- og typografiindustrien. Lorem Ipsum har været standard fyldtekst siden 1500-tallet, hvor en ukendt trykker sammensatte en tilfældig spalte for at trykke en bog til sammenligning af forskellige skrifttyper. Lorem Ipsum har ikke alene.</p>
    </div>
    </div>

    </div>

    <div class="swiper-pagination2"></div>

    </div>

    </div>
    </article>

    <article id="about" class="sub">
    <div id="about-anchor" class="anchor"></div>
    <div class="sub-wrapper">
    <h2 class="lighth2">OM OS</h2>
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
    <div class="person-card" data-aos="zoom-in" data-aos-delay="400">
    <img src="./images/mikkel.jpg" alt="mikkel">
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
      <h3 class="h3-contact" data-aos="fade-in" data-aos-delay="100">skal vi finde din løsning?</h3>
      <h3 class="h3-big-contact" data-aos="fade-up"
      data-aos-anchor-placement="bottom-bottom" data-aos-delay="800">Ta' kontakt</h3>

      <!-- contact form --->
      <!------------------------------------CONTACT FORM--------------------->
      <form id="contact-form" role="form" method="post" action="#" class="form-horizontal">

             <div id="contact-form-top-input">
             <div>
             <h4>Navn</h4>
                <input type="text" class="form-control" id="name" name="name" placeholder="Hvad er dit navn?" required>
                </div>
                <div>
              <h4>Email</h4>
                <input type="email" class="form-control" id="email" name="email" placeholder="Hvilken mail skal vi svare på?" required>
                </div>
            </div>
            <div>
            <h4>Besked</h4>
	                <textarea class="form-control" id="msg" name="msg" placeholder="Fortæl os hvad vi kan hjælpe med" rows="5" required></textarea></div>



          <div class="contact-btn-number">
                  <div class="btn-orange">
                    <div><input type="submit" value="SEND" name="post"><i class="fas fa-paper-plane"></i></div></div>

                <input type="hidden" id="token" name="token">

            </form>

            <div class="call-us" data-aos="fade-in" data-aos-delay="1000">
              <a href="tel:+4523677669">Ring til os på +45 23 67 76 69</a>
            </div>
          </div>

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
    let procSlides = document.querySelectorAll(".proc");

    if (current == 1 || current == 4) {
      document.querySelector("body").style.backgroundColor = "#F2F2F2"
      for (let desc of descriptions) {
        desc.style.backgroundColor = "#172430"
      }

      for (let slide of procSlides) {
        slide.style.backgroundColor = "#F2F2F2"
      }

    }

    else {
      document.querySelector("body").style.backgroundColor = "#172430"
      for (let desc of descriptions) {
        desc.style.backgroundColor = "#F2F2F2"
      }

      for (let slide of procSlides) {
        slide.style.backgroundColor = "#172430"
      }
      document.querySelector(".grecaptcha-badge").classList.remove("delete")

    }

    // fjerner og viser recaptcha
    if (current == 4){
      document.querySelector(".grecaptcha-badge").classList.remove("delete")
    }
    else{
      document.querySelector(".grecaptcha-badge").classList.add("delete")

    }




  });

  function removeG(){
    document.querySelector(".grecaptcha-badge").classList.remove("delete")
  }

  removeG();




  // ====================== GÅR OP I TOPPEN =============================================
  document.getElementById("nav-logo").addEventListener("click", function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });


  // ==================== ÆNDRER FARVEN PÅ CIRKLEN I FOOTER

  function time() {
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

grecaptcha.ready(function () {
  grecaptcha.execute('6LdwzfwUAAAAALCr3M_nRgn8-TN7_KYXWatiF7ML', { action: 'homepage' }).then(function (token) {
    // console.log(token);
    document.getElementById("token").value = token;
  });
});

//

/* close success message div */
function closeSuccessDiv() {
  document.getElementById("alert-success").classList.add("hide");
}

// close the div in 7 secs
window.setTimeout(closeSuccessDiv, 7000);
