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
      <a href="#cases">
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
      `;
    }
  }