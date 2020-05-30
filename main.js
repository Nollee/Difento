import NavBar from './components/nav.js'
import Hero from './pages/hero.js'
import Cases from './pages/cases.js'
import Proces from './pages/proces.js'
import About from './pages/about.js'
import Contact from './pages/contact.js'
import Recommend from './pages/recommend.js'
import Footer from './components/footer.js';
import Detail from './pages/detailview.js'
import spaService from "./services/spa.js";

spaService.init();




let detail = new Detail();
let navbar = new NavBar();
let hero = new Hero();
let cases = new Cases();
let proces = new Proces();
let about = new About();
let contact = new Contact();
let recommend = new Recommend();
let footer = new Footer();


document.addEventListener('DOMContentLoaded', function () {

  const sections = document.querySelectorAll('.sub')
  console.log(sections);
  let projects = [];
  let selectedProject;


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


  // ======= SWIPER SLIDER TIL CASES =====================

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

  // ======= SWIPER SLIDER TIL PROCES =====================

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


/*
******* Wordpress content appended to DOM with REST API ************
 */
function getClients() {
  fetch('https://difento.dk/wordpress/wp-json/wp/v2/client?_embed')
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      appendClients(json);
      clients = json;
      setTimeout(function () {
      }, 200);
    });

}

console.log(getClients);
getClients();



let swiper3 = new Swiper('.swiper3', {
  spaceBetween: 100,
  centeredSlides: true,
  observer: true,
observeParents: true,
  autoplay: {
    delay: 10000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});



function appendClients(clients) {
for (let client of clients) {
console.log(client);
  document.querySelector(".slides3").innerHTML += /*html*/`
  <div  class="swiper-slide recommend-slide" id="${client.id}" data-aos="fade-in" data-aos-delay="300">



<article class="recommend-item">
<div>
  <img class="client-logo" src="${client.logo.guid}" alt="${client.logo.post_title}">
  <p class="quote">"${client.quote}"</p>
  <p class="client-name">- ${client.client_name}</p>

  <div>
  <h4>Løsning:</h4>
    ${client.services}
    </div>
  </div>

  <img class="client-img" src="${client.image.guid}" alt="${client.image.post_title}">
    <!---<h3>${client.title.rendered}</h3>--->
    <!---<h4>Specification</h4>-->

    <!--<a href="#">Se case</a>-->

    </div>
    </article>
  `;
}
}

  function getProjects() {
    fetch('https://difento.dk/wordpress/wp-json/wp/v2/cases?_embed')
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        appendCases(json);

        projects = json;
        setTimeout(function () {
        }, 200);
        console.log(projects);
      });



  }


  getProjects();




  // APPENDS CASES TIL SLIDEREN
  function appendCases(projects) {
    console.log(projects);

    let htmlTemplate = " ";
    for (let i = 0; i < projects.length; i++) { // looping trough all persons
      let project = projects[i];
      /* console.log(project) */
      htmlTemplate += `
      <div  class="swiper-slide" id="${project.id}">
        <img onclick="showDetailView(${i})" src="${project.image.guid}"></h2>
      </div>
    `;
    }

    let i = 0;
    let caseInfo = projects[i];
    let overlayInfo = `
    <h4 class="slider-count animation-fadein">${caseInfo.count}</h4>
    <h4 class="slider-job animation-fadein-delay">${caseInfo.work}</h4>
    <div class="slider-year animation-opacity">
        <div class="line"></div>
        <h4>${caseInfo.year}</h4>
      </div>
      <h4 class="slider-company">${caseInfo.title.rendered}</h4>
      `;

    document.querySelector('#caseinfo').innerHTML = overlayInfo;
    document.querySelector('#slides').innerHTML = htmlTemplate;

    // ÆNDRER TAL OG TEKST OMKRING BILLEDERNE I CASES SLIDER
    mySwiper.on('slideChangeTransitionEnd', async function findSlide() {
      let pros = document.querySelectorAll('.swiper-slide');
      overlayInfo = " ";
      for (let pro of pros) {
        if (pro.classList.contains('swiper-slide-active') === true) {
          let data = await fetch(`https://difento.dk/wordpress/wp-json/wp/v2/cases/${pro.id}`).then(res => res.json());
          console.log(data);
          
          overlayInfo += `
          <h4 class="slider-count animation-fadein">${data.count}</h4>
          <h4 class="slider-job animation-fadein-delay">${data.work}</h4>
          <div class="slider-year animation-opacity">
          <div class="line"></div>
          <h4>${data.year}</h4>
          </div>
          <h4 class="slider-company animation-opacity-delay">${data.title.rendered}</h4>
          `;
          document.querySelector('#caseinfo').innerHTML = overlayInfo;
        }
      }
    });

  }

  function showDetailView(index){
    let swiper4 = new Swiper('.swiper4', {
      spaceBetween: 100,
      centeredSlides: true,
      observer: true,
    observeParents: true,
    initialSlide: index,
      pagination: {
        el: '.swiper-pagination4',
        clickable: true,
      },
      navigation: {
        nextEl: '.next4',
        prevEl: '.prev4',
      },
    });

    console.log(index);
    spaService.navigateTo("detail");
    appendDetailView(index, swiper4);
  };

  function appendDetailView(i, swiper){
    let detailslides = ""
    for (let project of projects) {
      detailslides += /* html */ `
      <div class="swiper-slide detail-slide" id="${project.id}">
      <img src="${project.detailslideimage.guid}">
      </div>
      `;
      document.querySelector("#detail-slides").innerHTML = detailslides;      
    };
    let info = projects[i]
    console.log(info);
     let detailOverlay = `
     <h2 class="lighth2">${info.title.rendered}</h2>
     <h3>${info.count}</h3>
     <h4>${info.work}</h4>
     <div class="visit">
     <div class="visit-line"></div>
     <a href="${info.caselink}" target="_blank">Se case her</a>
     </div>
     `;

    let detailContent = `
      <div class="case-intro">
      <p>${info.description}</p>
      ${info.solutions}
      </div>
    ` ;   
     document.querySelector(".swiper-overlay").innerHTML = detailOverlay
     document.querySelector(".detail-content").innerHTML = detailContent 


     swiper.on('slideChangeTransitionEnd', async function findDetailSlide() {
      let detailViews = document.querySelectorAll('.detail-slide');
      detailOverlay = "";
      detailContent = "";
      for (let detailView of detailViews) {
        if (detailView.classList.contains('swiper-slide-active') === true) {
          let detail = await fetch(`https://difento.dk/wordpress/wp-json/wp/v2/cases/${detailView.id}`).then(res => res.json());          
          detailOverlay += `
     <h2 class="lighth2">${detail.title.rendered}</h2>
     <h3>${detail.count}</h3>
     <h4>${detail.work}</h4>
     <div class="visit">
     <div class="visit-line"></div>
     <a href="${detail.caselink}" target="_blank">Se case her</a>
     </div>
     `;

    detailContent += `
      <div class="case-intro">
      <p>${detail.description}</p>
      ${detail.solutions}
      </div>
    ` ;   
     document.querySelector(".swiper-overlay").innerHTML = detailOverlay
     document.querySelector(".detail-content").innerHTML = detailContent 
        }
      }
    });
};

  /* ============ weather api ======================== */
  const apiCall = 'https://api.openweathermap.org/data/2.5/weather?q=aarhus,dk&units=metric&appid=b892cb50e6b072e2bd37a1bc8049ee3a';


/* fecta api */
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

    /* append weather data to DOM */
  function appendWeather(data) {
    let htmlTemplate = "";
    Math.round(data.main.temp);
    let temp = Math.round(`${data.main.temp}`); //temp to rounded number
    htmlTemplate += `
        <div id="weather-container">
        <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">
          <h3>${data.name}, <span>${temp}</span> ºC</h3>
        </div>
      `;
    document.querySelector("#weather").innerHTML = htmlTemplate;
  }





// ======================= FÅR TABBAREN TIL VENSTRE TIL AT FORSVINDE OG KOMME FREM
  window.addEventListener("scroll", () => {

    if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
      document.querySelector(".tabbar").classList.add("pop")

    } else {
      document.querySelector(".tabbar").classList.remove("pop")
    }
  });

  // Lader tabbaren blive, hvis brugeren reloader
  function reload(){
    if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
      document.querySelector(".tabbar").classList.add("pop")

    } else {
      document.querySelector(".tabbar").classList.remove("pop")
    }
  };
  
  window.location.hash = "#front"

  reload();



  // ====================== SCROLLSPY ====================================


  /* https://medium.com/p1xts-blog/scrollspy-with-just-javascript-3131c114abdc */
  const menu_links = document.querySelectorAll(".nav-container span");

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




  // ====================== GÅR OP I TOPPEN =============================================
  document.getElementById("nav-logo").addEventListener("click", function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });



  // ==================================== skifter ned på siden
 for (let link of menu_links) {
  link.addEventListener("click", function () {
    console.log(this.id +"-anchor");
    document.getElementById(this.id +"-anchor").scrollIntoView(true);

    
  }); 
 }


  // ======= ÆNDRER FARVEN PÅ CIRKLEN OG INDHOLD I CALL-US ============

  function time() {
    let t = new Date();
    let h = t.getHours()
    console.log(h);
    

    if (h > 8 && h < 20) {
      document.querySelector(".phone-active").style.backgroundColor = "lightgreen"
      document.querySelector(".call-us").innerHTML = /* html */ `
      <a href="tel:+4523677669">Ring til os på +45 23 67 76 69</a>
      `;
    } else {
      document.querySelector(".phone-active").style.backgroundColor = "red"
      document.querySelector(".call-us").innerHTML = /* html */ `
      <a href="mailto:kontakt@difento.dk">Send os en mail på kontakt@difento.dk</a>
      `;
    }
  }

  time();



 // =========== RECAPTCHA GOOGLE ===================
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



// handlers

window.showDetailView = (index) => showDetailView(index);
window.pageChange = () => spaService.pageChange();

}, false);