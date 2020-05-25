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
      <a href="#cases"><i class="fas fa-user-friends"></i></a>
      <a href="#services"><i class="fas fa-layer-group"></i></a>
      <a href="#about"><i class="fas fa-paper-plane"></i></a>
      <a href="#contact"><i class="fas fa-hourglass-half"></i></a>
      </div>
      </nav>

    <article id="hero" class="hero-forside">

    <nav class="top-nav">

    <div class="logo">
    <img id="butterfly" src="./images/logo-sign.svg" alt="logo">
    <img id="logo-text"src="./images/logo-word.svg" alt="logo">
    </div>

    <div class="top-links">
    <a href="#cases">
    <i class="fas fa-layer-group"></i>
    <p>CASES</p>
    </a>
    <a href="#">
    <i class="fas fa-hourglass-half"></i>
    <p>PROCES</p>
    </a>
    <a href="#cases">
    <i class="fas fa-user-friends"></i>
    <p>OM OS</p>
    </a>
    <a href="#cases">
    <i class="fas fa-paper-plane"></i>
    <p>KONTAKT</p>
    </a>
    </div>
    </nav>

    <div class="hero-text">
    <h1>TEST23131</h1>
    </div>
    <div id="birds">
    <div class="gradient-left"></div>
    <div class="gradient-bot"></div>
    </div>
    </article>
    <article id="cases" class="case-sub">

    </article>
    <article id="services" class="case-sub">

    </article>
    <article id="about" class="case-sub">

    </article>
    <article id="contact" class="case-sub">

    </article>
  `;

}



// ====================== LAVER RINGENE RUNDT OM NAVIGATION ====================================

document.addEventListener('DOMContentLoaded', function(){

    const sections = document.querySelectorAll(".case-sub");
    const menu_links = document.querySelectorAll(".nav-container a");

    const makeActive = (link) => menu_links[link].classList.add("active");
  const removeActive = (link) => menu_links[link].classList.remove("active");
  const removeAllActive = () => [...Array(sections.length).keys()].forEach((link) => removeActive(link));

  const sectionMargin = 200;

  let currentActive = 0;
  window.addEventListener("scroll", () => {

    // check in reverse order so we find the last section
    // that's present - checking in non-reverse order would
    // report true for all sections up to and including
    // the section currently in view
    //
    // Data in play:
    // window.scrollY    - is the current vertical position of the window
    // sections          - is a list of the dom nodes of the sections of the page
    //                     [...sections] turns this into an array so we can
    //                     use array options like reverse() and findIndex()
    // section.offsetTop - is the vertical offset of the section from the top of the page
    //
    // basically this lets us compare each section (by offsetTop) against the
    // viewport's current position (by window.scrollY) to figure out what section
    // the user is currently viewing
    const current = sections.length - [...sections].reverse().findIndex((section) => window.scrollY >= section.offsetTop - sectionMargin ) - 1

    // only if the section has changed
    // remove active class from all menu links
    // and then apply it to the link for the current section
    if (current !== currentActive) {
      removeAllActive();
      currentActive = current;
      makeActive(current);
    }
  });
}, false);

/* https://medium.com/p1xts-blog/scrollspy-with-just-javascript-3131c114abdc */



// ====================== GÅR OP I TOPPEN =============================================
document.getElementById("nav-logo").addEventListener("click", function(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });