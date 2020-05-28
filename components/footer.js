export default class Footer {
    constructor() {
      this.template();
    }
  
    template() {
      document.querySelector("footer").innerHTML += /*html*/ `
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
      `;
    }
  }