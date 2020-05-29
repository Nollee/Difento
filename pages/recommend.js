export default class Recommend {
    constructor() {
      this.template();
    }

    template() {
      document.querySelector("#recommend").innerHTML += /*html*/ `
<h2>ANBEFALINGER</h2>
<div id="recommend-container"></div>

<div class="swiper-container swiper3">
    <div class="swiper-wrapper slides3">

    </div>
    <!-- Add Arrows -->
    <div class="swiper-button-next button-next3"></div>
    <div class="swiper-button-prev button-prev3"></div>
  </div>
      `;
    }
  }


