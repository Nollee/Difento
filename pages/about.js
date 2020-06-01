export default class About {
    constructor() {
      this.template();
    }

    template() {
      document.querySelector("#about").innerHTML += /*html*/ `
      <div id="aboutlink-anchor" class="anchor"></div>
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
      <div class="person-card" data-aos="zoom-in" data-aos-delay="300">
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

      <img src="../images/bg-blue.png" class="bg-element about-bg1 rellax" alt="difento icon blue">
      <img src="../images/bg-blue.png" class="bg-element about-bg2 rellax" data-rellax-speed="-3" alt="difento icon blue">
      <img src="../images/bg-blue.png" class="bg-element about-bg3 rellax" data-rellax-speed="-4" alt="difento icon blue">
      <img src="../images/bg-blue.png" class="bg-element about-bg4 rellax" data-rellax-speed="-2" alt="difento icon blue">
      <img src="../images/bg-blue.png" class="bg-element about-bg5 rellax" data-rellax-speed="-4" alt="difento icon blue">
      </div>
      `;
    }
  }