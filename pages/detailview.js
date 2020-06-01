export default class Detail {
    constructor() {
      this.template();
    }

    template() {
      document.querySelector("#detail").innerHTML += /*html*/ `
      <article class="detail-wrapper">
      <div class="swiper-container swiper4">
      <div class="swiper-top"></div>
      <div id="detail-slides" class="swiper-wrapper"></div>
      <div class="swiper-bot"></div>
      <div class="swiper-button-prev button-prev prev4"></div>
      <div class="swiper-button-next button-next next4"></div>
      <div class="detail-content">
      </div>
      </article>
      <footer></footer>
      `;
    }
  }