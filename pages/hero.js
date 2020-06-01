export default class Hero {
    constructor() {
      this.template();
    }
  
    template() {
      document.querySelector("#hero").innerHTML += /*html*/ `
      <nav class="top-nav">

      <div class="logo">
      <img id="butterfly" src="./images/logo-sign.svg" alt="logo">
      <img id="logo-text"src="./images/logo-word.svg" alt="logo">
      </div>
  
      <div class="top-links">
      <span class="caselink">
      <i class="fas fa-layer-group"></i>
      <p>CASES</p>
      </span>
      <span class="proceslink">
      <i class="fas fa-hourglass-half"></i>
      <p>PROCES</p>
      </span>
      <span class="aboutlink">
      <i class="fas fa-user-friends"></i>
      <p>OM OS</p>
      </span>
      <span class="recommendlink">
      <i class="fas fa-laugh"></i>
      <p>ANBEFALINGER</p>
      </span>
      <span class="contactlink">
      <i class="fas fa-paper-plane"></i>
      <p>KONTAKT</p>
      </span>
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
          <span class="btn-grey case-ref"><div>cases <i class="fas fa-layer-group"></i></div></span>
                <!-- orange button -->
          <span class="btn-orange contact-ref" href="#contact-anchor"><div>kontakt <i class="fas fa-paper-plane" ></i></div></span>
        </div>
      </div>
      <div id="birds">
      <div class="gradient-left"></div>
      <div class="gradient-bot"></div>
      </div>
  <div id="hero-bottom-content">
  <div id="weather"></div><!---- container for the wather api --->
        <div id="hero-bottom-arrow"><span class="case-ref"><i class="fas fa-angle-down"></i></span></div>
          <div id="hero-bottom-some">
            <a href="https://www.linkedin.com/" target="_blank"><i class="fab fa-linkedin"></i></a>
            <a href="https://www.facebook.com/" target="_blank"><i class="fab fa-facebook-square"></i></a>
            <a href="https://www.instagram.com/" target="_blank"><i class="fab fa-instagram"></i></a>
          </div>
      </div>
  </div>
      `;
    }
  }