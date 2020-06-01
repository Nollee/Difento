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
      <img src="../images/bg-blue.png" class="bg-element detailview-bg1 rellax" alt="difento icon blue">
      <img src="../images/bg-blue.png" class="bg-element detailview-bg2 rellax" data-rellax-speed="-3" alt="difento icon blue">
      <img src="../images/bg-blue.png" class="bg-element detailview-bg3 rellax" data-rellax-speed="-4" alt="difento icon blue">
      <img src="../images/bg-blue.png" class="bg-element detailview-bg4 rellax" data-rellax-speed="-2" alt="difento icon blue">
      <img src="../images/bg-blue.png" class="bg-element detailview-bg5 rellax" data-rellax-speed="-4" alt="difento icon blue">
      </article>
      <footer></footer>
      `;
    }
  }