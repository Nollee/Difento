export default class Hero {
    constructor() {
      this.template();
    }

    template() {
      document.querySelector("#hero").innerHTML += /*html*/ `
      <nav class="top-nav navbar-top"></nav>

      <div class="hero-text">
        <div class="hero-head">
          <h1 data-aos="zoom-out-right" data-aos-delay="100">Kreativt webbureau med unikke webløsninger
          <span>.</span></h1>
      </div>
        <p data-aos="fade-in" data-aos-delay="300">Vi er et Aarhus-baseret webbureau, der tilbyder unikke webløsninger til din virksomhed. Vi specialiserer os i <b>hjemmesider</b>, <b>brugeradfærd</b> og <b>design</b>. Vi skaber mindeværdige løsninger, så din virksomhed kan skille sig ud fra mængden.</p>
        <!-- buttons -->
        <div class="hero-btns">
              <!-- grey button -->
          <span class="btn-grey case-ref" data-aos="fade-right" data-aos-delay="400"><div>cases <i class="fas fa-layer-group"></i></div></span>
                <!-- orange button -->
          <span class="btn-orange contact-ref" data-aos="fade-right" data-aos-delay="500"href="#contact-anchor"><div>kontakt <i class="fas fa-paper-plane" ></i></div></span>
        </div>
      </div>
      <div id="birds" data-aos="fade-in">
      <div class="gradient-left"></div>
      <div class="gradient-bot"></div>
      </div>
  <div id="hero-bottom-content">
  <div id="weather"></div><!---- container for the wather api --->
        <div id="hero-bottom-arrow"><span class="case-ref"><i class="fas fa-angle-down"></i></span></div>
          <div id="hero-bottom-some">
            <a href="https://www.linkedin.com/company/53528435" target="_blank"><i class="fab fa-linkedin"></i></a>
            <a href="https://www.facebook.com/Difento-104301181322258/" target="_blank"><i class="fab fa-facebook-square"></i></a>
            <a href="https://www.instagram.com/difento.dk/" target="_blank"><i class="fab fa-instagram"></i></a>
          </div>
      </div>
  </div>
      `;
    }
  }