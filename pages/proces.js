export default class Proces {
    constructor() {
      this.template();
    }

    template() {
      document.querySelector("#proces").innerHTML += /*html*/ `
      <div id="proceslink-anchor" class="anchor"></div>
      <div class="sub-wrapper dark">
      <h2 class="darkh2 rellax">Proces</h2>

      <div class="swiper-container swiper2">

      <div class="swiper-wrapper">

      <div class="swiper-slide proc">
      <img src="./images/research.svg" alt="research" data-aos="zoom-in" data-aos-delay="300">
      <div class="proces-text">
      <h3>Research</h3>
      <p>  Lorem Ipsum er ganske enkelt fyldtekst fra print- og typografiindustrien. Lorem Ipsum har været standard fyldtekst siden 1500-tallet, hvor en ukendt trykker sammensatte en tilfældig spalte for at trykke en bog til sammenligning af forskellige skrifttyper. Lorem Ipsum har ikke alene.</p>
      </div>
      </div>
      <div class="swiper-slide proc">
      <img src="./images/brush.svg" alt="design" data-aos="zoom-in" data-aos-delay="300">
      <div class="proces-text">
      <h3>Design</h3>
      <p>  Lorem Ipsum er ganske enkelt fyldtekst fra print- og typografiindustrien. Lorem Ipsum har været standard fyldtekst siden 1500-tallet, hvor en ukendt trykker sammensatte en tilfældig spalte for at trykke en bog til sammenligning af forskellige skrifttyper. Lorem Ipsum har ikke alene.</p>
      </div>
      </div>
      <div class="swiper-slide proc">
      <img src="./images/meet.svg" alt="møde" data-aos="zoom-in" data-aos-delay="300">
      <div class="proces-text">
      <h3>Møde</h3>
      <p>  Lorem Ipsum er ganske enkelt fyldtekst fra print- og typografiindustrien. Lorem Ipsum har været standard fyldtekst siden 1500-tallet, hvor en ukendt trykker sammensatte en tilfældig spalte for at trykke en bog til sammenligning af forskellige skrifttyper. Lorem Ipsum har ikke alene.</p>
      </div>
      </div>
      <div class="swiper-slide proc">
      <img src="./images/dev.svg" alt="udvikling" data-aos="zoom-in" data-aos-delay="300">
      <div class="proces-text">
      <h3>Udvikling</h3>
      <p>  Lorem Ipsum er ganske enkelt fyldtekst fra print- og typografiindustrien. Lorem Ipsum har været standard fyldtekst siden 1500-tallet, hvor en ukendt trykker sammensatte en tilfældig spalte for at trykke en bog til sammenligning af forskellige skrifttyper. Lorem Ipsum har ikke alene.</p>
      </div>
      </div>
      <div class="swiper-slide proc">
      <img src="./images/user.svg" alt="brugertest" data-aos="zoom-in" data-aos-delay="300">
      <div class="proces-text">
      <h3>Brugertest</h3>
      <p>  Lorem Ipsum er ganske enkelt fyldtekst fra print- og typografiindustrien. Lorem Ipsum har været standard fyldtekst siden 1500-tallet, hvor en ukendt trykker sammensatte en tilfældig spalte for at trykke en bog til sammenligning af forskellige skrifttyper. Lorem Ipsum har ikke alene.</p>
      </div>
      </div>

      </div>

      <div class="swiper-pagination2"></div>

      </div>

      </div>
      `;
    }
  }