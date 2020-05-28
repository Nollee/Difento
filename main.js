import NavBar from './components/nav.js'
import Hero from './pages/hero.js'
import Cases from './pages/cases.js'
import Proces from './pages/proces.js'
import About from './pages/about.js'
import Contact from './pages/contact.js'
import Footer from './components/footer.js'

let navbar = new NavBar();
let hero = new Hero();
let cases = new Cases();
let proces = new Proces();
let about = new About();
let contact = new Contact();
let footer = new Footer();


document.addEventListener('DOMContentLoaded', function () {

  const sections = document.querySelectorAll('.sub')
  console.log(sections);


  // INITIALIZE AOS
  AOS.init();

  //  =========================VANTA BIRDS FRA VANTAJS ===================================
  VANTA.BIRDS({
    el: "#birds",
    mouseControls: true,
    touchControls: true,
    minHeight: 100.00,
    minWidth: 100.00,
    scale: 1.00,
    scaleMobile: 1.00,
    backgroundColor: 0x172430,
    color1: 0xff593e,
    color2: 0xfe2806,
    colorMode: "varianceGradient",
    birdSize: 3.00,
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

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },

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
        <img src="${project.acf.image}"></h2>
      </div>
    `;
    }

    let i = 0;
    let caseInfo = projects[i];
    let overlayInfo = `
    <h4 class="slider-count animation-fadein">${data.acf.count}</h4>
    <h4 class="slider-job animation-fadein-delay">${data.acf.description}</h4>
    <div class="slider-year animation-opacity">
        <div class="line"></div>
        <h4>${caseInfo.acf.year}</h4>
      </div>
      <h4 class="slider-company">${caseInfo.acf.title}</h4>
      `;

    document.querySelector('#caseinfo').innerHTML = overlayInfo;
    document.querySelector('#slides').innerHTML = htmlTemplate;


    mySwiper.on('slideChangeTransitionEnd', async function findSlide() {
      let pros = document.querySelectorAll('.swiper-slide');
      overlayInfo = " ";
      for (let pro of pros) {
        if (pro.classList.contains('swiper-slide-active') === true) {
          let data = await fetch(`https://difento.dk/wordpress/wp-json/wp/v2/posts/${pro.id}`).then(res => res.json());
          overlayInfo += `
          <h4 class="slider-count animation-fadein">${data.acf.count}</h4>
          <h4 class="slider-job animation-fadein-delay">${data.acf.description}</h4>
          <div class="slider-year animation-opacity">
          <div class="line"></div>
          <h4>${data.acf.year}</h4>
          </div>
          <h4 class="slider-company animation-opacity-delay">${data.acf.title}</h4>
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
    }

    // fjerner og viser recaptcha
    if (current == 4) {
      document.querySelector(".grecaptcha-badge").classList.remove("delete")
    }
    else {
      document.querySelector(".grecaptcha-badge").classList.add("delete")

    }




  });

  function removeG() {
    document.querySelector(".grecaptcha-badge").classList.style.display = "none";
  }




  // ====================== GÅR OP I TOPPEN =============================================
  document.getElementById("nav-logo").addEventListener("click", function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });


  // ==================== ÆNDRER FARVEN PÅ CIRKLEN VED TELEFONNUMRENE

  function time() {
    let t = new Date();
    let h = t.getHours()

    if (h >= 9 && h <= 21) {
      document.querySelector(".phone-active").style.backgroundColor = "green"
      document.querySelector(".available").style.backgroundColor = "green"
    } else {
      document.querySelector(".phone-active").style.backgroundColor = "red"
      document.querySelector(".available").style.backgroundColor = "red"
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

removeG();