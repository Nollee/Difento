document.addEventListener('DOMContentLoaded', function(){

content();

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
  })




  window.onscroll = function() {scrollFunction()};


  function scrollFunction() {
    if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
      document.querySelector(".tabbar").classList.add("pop")

     }  else {
        document.querySelector(".tabbar").classList.remove("pop")
    }
  }


  function content(){
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
      <a id="contactlink" href="#contact-anchor"><i class="fas fa-paper-plane" ></i>
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
    <p>Lorem Ipsum er ganske enkelt fyldtekst fra print- og typografiindustrien. Lorem Ipsum har været standard fyldtekst siden 1500-tallet, hvor en ukendt trykker sammensatte en tilfældig spalte for at trykke en bog til sammenligning af forskellige skrifttyper. Lorem Ipsum har ikke alene overlevet fem århundreder, men har også vundet indpas i elektronisk typografi uden væsentlige ændringer. Sætningen blev gjordt kendt i 1960'erne med lanceringen af Letraset-ark, som indeholdt afsnit med Lorem Ipsum, og senere med layoutprogrammer som Aldus PageMaker, som også indeholdt en udgave af Lorem Ipsum.</p>
    </div>
    <div id="birds">
    <div class="gradient-left"></div>
    <div class="gradient-bot"></div>
    </div>
    </article>
    <article id="cases" class="sub">
    <div id="cases-anchor">anchor</div>
    </article>
    <article id="services" class="sub">
    <div id="services-anchor">anchor</div>
    </article>
    <article id="about" class="sub">
    <div id="about-anchor">anchor</div>
    </article>
    <article id="recommend" class="sub">
    <div id="recommend-anchor">anchor</div>
    </article>
    <article id="contact" class="sub">
    <div id="contact-anchor">anchor</div>

    </article>
    <footer>

    </footer>
  `;

}



// ====================== LAVER RINGENE RUNDT OM NAVIGATION ====================================
      /* https://medium.com/p1xts-blog/scrollspy-with-just-javascript-3131c114abdc */

    const sections = document.querySelectorAll(".sub");
    const menu_links = document.querySelectorAll(".nav-container a");

    const makeActive = (link) => menu_links[link].classList.add("active");
  const removeActive = (link) => menu_links[link].classList.remove("active");
  const removeAllActive = () => [...Array(sections.length).keys()].forEach((link) => removeActive(link));

  const sectionMargin = 50;
  let currentActive = 0;

  window.addEventListener("scroll", () => {
    const current = sections.length - [...sections].reverse().findIndex((section) => window.scrollY >= section.offsetTop - sectionMargin ) - 1
    console.log(current);
    

    if (current !== currentActive) {
      removeAllActive();
      currentActive = current;
      makeActive(current);
    }
  });

  // ====================== GÅR OP I TOPPEN =============================================


  /* jasidasjdjsaid */
  const colors = ['darkBlue', 'grey', 'darkBlue', 'darkBlue', 'grey']

const sections = [...document.getElementsByClassName('case-sub')]

window.addEventListener('scroll', changeColorOnScroll);

function changeColorOnScroll () {

  const scrollFromTop = window.pageYOffset

  for (let i = 0; sections.length > i; i++) {

    if (scrollFromTop <= sections[i].offsetTop) {
      document.body.className = colors[i]
      break
    }

  }

}

document.getElementById("nav-logo").addEventListener("click", function(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });
  
  }, false);
