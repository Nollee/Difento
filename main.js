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
   /*  pagination: {
      el: '.swiper-pagination1',
    }, */

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

  let procesIcons = ['far fa-comment-dots', 'fas fa-search', 'fas fa-paint-brush', 'far fa-user-circle', 'fas fa-desktop', 'fas fa-server']
  let swiper2 = new Swiper('.swiper2', {
    spaceBetween: 200,
    effect: 'fade',
    touchRatio: 0,
    fadeEffect: {
      crossFade: true
    },
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
      let clients = json;
      setTimeout(function () {
      }, 200);
    });

}

console.log(getClients);
getClients();


/* recommend section swiper */
let swiper3 = new Swiper('.swiper3', {
  spaceBetween: 100,
  centeredSlides: true,
  observer: true,
observeParents: true,
/* grabCursor: true, */
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


 // ============ APPENDER CLIENTERNE TIL RECOMMEND ============
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

  <img class="client-img thumbnail" src="${client.image.guid}" alt="${client.image.post_title}">
    <!---<h3>${client.title.rendered}</h3>--->
    <!---<h4>Specification</h4>-->

    <!--<a href="#">Se case</a>-->

    </div>
    </article>
  `;
}
}

// ================== HENTER CASES FRA WORDPRESS REST API =================
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

  //  GÅR IND PÅ DETAILVIEW OG STARTER MED DEN CASE MAN HAR TRYKKET PÅ
  function showDetailView(index){
    let swiper4 = new Swiper('.swiper4', {
      spaceBetween: 100,
      centeredSlides: true,
      observer: true,
    observeParents: true,
    initialSlide: index,
    touchRatio: 0,
      navigation: {
        nextEl: '.next4',
        prevEl: '.prev4',
      },
    });

    console.log(index);
    spaService.navigateTo("detail");
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    appendDetailView(index, swiper4);
  };

  // APPENDER DETAILVIEW FRA getProjects()
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
     let detailTop = `
     <h2 class="lighth2 animation-fadein-delay">${info.title.rendered}</h2>
     <h3 class="animation-fadein">${info.count}</h3>
     `;

     let detailBot = `
     <h4 class="animation-opacity">${info.longwork}</h4>
     <div class="visit animation-opacity-delay">
     <div class="visit-line"></div>
     <a href="${info.caselink}" target="_blank">Besøg side</a>
     </div>
     `

    let detailContent = /* html */ `
      <div class="case-intro">
      <p>${info.description}</p>
      ${info.solutions}

      </div>

      <div class="first-sec">
      <h3>${info.header1}</h3>
      <p>${info.description1}</p>
      <img src="${info.image1.guid}">

      </div>

      <div class="second-sec">

      <div class="second-left">
      <h3>${info.header2}</h3>
      <p>${info.description2}</p>

      </div>
      <img src="${info.image2.guid}">

      </div>

      <div class="third-sec">
      <img src="${info.image3.guid}">

      <div class="third-left">
      <h3>${info.header3}</h3>
      <p>${info.description3}</p>
      </div>

      </div>

      <div class="detail-reco">
      <h3>Anbefaling</h3>

      <div class="reco-wrapper">

      <div class="reco-left">
      <img src="${info.client_logo.guid}">
      <p>"${info.client_statement}"</p>
      <h5>- ${info.client_name}</h5>
      </div>
      <img src="${info.client_img.guid}">
      </div>

      </div>
    ` ;
     document.querySelector(".swiper-top").innerHTML = detailTop
     document.querySelector(".detail-content").innerHTML = detailContent
     document.querySelector(".swiper-bot").innerHTML = detailBot


     // ÆNDRER INDHOLD NÅR MAN SKIFTER I SLIDEREN
     swiper.on('slideChangeTransitionEnd', async function findDetailSlide() {
      let detailViews = document.querySelectorAll('.detail-slide');
      detailTop = "";
      detailBot = "";
      detailContent = "";
      for (let detailView of detailViews) {
        if (detailView.classList.contains('swiper-slide-active') === true) {
          let detail = await fetch(`https://difento.dk/wordpress/wp-json/wp/v2/cases/${detailView.id}`).then(res => res.json());
           detailTop = `
          <h2 class="lighth2 animation-fadein-delay">${detail.title.rendered}</h2>
          <h3 class="animation-fadein">${detail.count}</h3>
          `;

           detailBot = `
          <h4 class="animation-opacity">${detail.longwork}</h4>
          <div class="visit animation-opacity-delay">
          <div class="visit-line"></div>
          <a href="${detail.caselink}" target="_blank">Besøg side</a>
          </div>
          `

          detailContent = /* html */ `
          <div class="case-intro">
          <p>${detail.description}</p>
          ${detail.solutions}

          </div>

          <div class="first-sec">
          <h3>${detail.header1}</h3>
          <p>${detail.description1}</p>
          <img src="${detail.image1.guid}">

          </div>

          <div class="second-sec">

          <div class="second-left">
          <h3>${detail.header2}</h3>
          <p>${detail.description2}</p>

          </div>
          <img src="${detail.image2.guid}">

          </div>

          <div class="third-sec">
          <img src="${detail.image3.guid}">

          <div class="third-left">
          <h3>${detail.header3}</h3>
          <p>${detail.description}</p>
          </div>

          </div>

          <div class="detail-reco">
          <h3>Anbefaling</h3>

          <div class="reco-wrapper">

          <div class="reco-left">
          <img src="${detail.client_logo.guid}">
          <p>"${detail.client_statement}"</p>
          <h5>- ${detail.client_name}</h5>
          </div>
          <img src="${detail.client_img.guid}">
          </div>

          </div>
         ` ;
          document.querySelector(".swiper-top").innerHTML = detailTop
          document.querySelector(".detail-content").innerHTML = detailContent
          document.querySelector(".swiper-bot").innerHTML = detailBot
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

/*   fetch(apiCall)
    .then(response => response.json())
    .then(data => console.log(data)); */

    /* append weather data to DOM */
  function appendWeather(data) {
    let htmlTemplate = "";
    Math.round(data.main.temp);
    let temp = Math.round(`${data.main.temp}`); //temp to rounded number
    htmlTemplate += /*html*/`
        <div id="weather-container">
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">
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

    if(window.location.hash == "#detail"){
      // lader tabberen blive, når man er inde i detailview
      document.querySelector(".tabbar").classList.add("pop")
      document.querySelector("#caselink").classList.add("active")


    }
  });

  // funktion til alt der skal ske, når brugeren reloader siden
  function reload(){

      // Lader tabbaren blive, hvis brugeren reloader
    if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
      document.querySelector(".tabbar").classList.add("pop")

    } else {
      document.querySelector(".tabbar").classList.remove("pop")
    }
  };
  if (window.location.hash == "#detail"){
    spaService.navigateTo("content")
    // reloader siden igen, da der var problemer med fuglene på forsiden
    setTimeout(function() {
      window.location.reload();
    }, 1);
  }

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


    // ====== ÆNDRING PÅ ELEMENTER NÅR MAN NÅR TIL EN SPECIFIK SEKTION =========
    let descriptions = document.querySelectorAll(".link-desc");

    // baggrund på body og beskrivelser af nav
    if (current == 2 || current == 5) {
      document.querySelector("#content").style.backgroundColor = "#F2F2F2"
      document.querySelector(".swiper1").style.display = "none"

      for (let desc of descriptions) {
        desc.style.backgroundColor = "#172430"
      }

    }

    else {
      document.querySelector("#content").style.backgroundColor = "#172430"
      document.querySelector(".swiper1").style.display = "flex"

      for (let desc of descriptions) {
        desc.style.backgroundColor = "#F2F2F2"
      }

    }

    // fjerner og viser recaptcha
    if (current == 5) {
      document.querySelector(".grecaptcha-badge").classList.remove("delete")
    }
    else {
      document.querySelector(".grecaptcha-badge").classList.add("delete")

    }




  });


  // ====================== GÅR tilbage til hero af forside ===========================
  document.getElementById("nav-logo").addEventListener("click", function () {
    let elmnt = document.querySelector("body");
    if(window.location.hash == "#content")
{
  elmnt.scrollIntoView({behavior: 'smooth'})


}
else{
  spaService.navigateTo("content")
  elmnt.scrollIntoView({behavior: 'smooth'})
  document.querySelector(".tabbar").classList.remove("pop")


}
  });

// knapper med klassen "case-ref" går ned på cases
let caseRefs = document.querySelectorAll(".case-ref");
for (let caseRef of caseRefs) {
  caseRef.addEventListener("click", function () {
    let elmnt = document.querySelector("#caselink-anchor")
    elmnt.scrollIntoView({behavior: 'smooth'})


  })

}

// knapper med klassen "contact-ref" går ned på contact
let contactRefs = document.querySelectorAll(".contact-ref");
for (let contactRef of contactRefs) {
  contactRef.addEventListener("click", function () {
    let elmnt = document.querySelector("#contactlink-anchor")
    elmnt.scrollIntoView({behavior: 'smooth'})


  })

}



  //  går ned ad siden - sidebar
 for (let link of menu_links) {

  link.addEventListener("click", function () {
      let elmnt = document.getElementById(this.id +"-anchor");
      console.log(link.id +"-anchor");

      if(window.location.hash == "#content"){
        elmnt.scrollIntoView({behavior: 'smooth'})
      }
      else{
        spaService.navigateTo("content")
        setTimeout(function() {
          elmnt.scrollIntoView({behavior: 'smooth'})

        }, 50);

      }

  });
 }

   // går ned ad siden - toplinks

let toplinks = document.querySelectorAll(".top-nav span")
 for (let link of toplinks) {
  link.addEventListener("click", function () {
    let elmnt = document.getElementById(link.className +"-anchor")
    elmnt.scrollIntoView({behavior: 'smooth'})



  });
 }


  // ======= ÆNDRER INDHOLD IFT. TIDSPUNKTET ============

  function time() {
    let t = new Date();
    let h = t.getHours()
    console.log(h);

    let actives = document.querySelectorAll(".phone-active");


    if (h > 8 && h < 21) {
      for (let active of actives) {
        active.style.backgroundColor = "lightgreen"

      }
      document.querySelector(".call-us").innerHTML = /* html */ `
      <a href="tel:+4523677669"><i class="fas fa-phone-alt"></i>+45 23 67 76 69</a>
      `;
    } else {
      for (let active of actives) {
        active.style.backgroundColor = "red"

      }
      document.querySelector(".call-us").innerHTML = /* html */ `
      <a href="mailto:kontakt@difento.dk">kontakt@difento.dk</a>
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




let parallex = document.querySelectorAll(".para");
for (let para of parallex) {
  if(screen.width < 600){
  para.classList.remove("rellax")
}
else{
  para.classList.add("rellax")    }
}

var rellax = new Rellax('.rellax', {
  speed: -4,
  center: true,
  wrapper: null,
  round: true,
  vertical: true,
  horizontal: false
});
/*   else{
    rellax.refresh();
  } */
