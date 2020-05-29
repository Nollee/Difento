export default class Cases {
    constructor() {
      this.template();
    }
  
    template() {
      document.querySelector("#cases").innerHTML += /*html*/ `
       
    <div class="swiper-container swiper1">
    <!-- Additional required wrapper -->
    <div id="caseinfo" class="overlay">
    </div>
    <div id="slides" class="swiper-wrapper">
        <!-- Slides -->

    </div>
    

    <div class="swiper-pagination1 slider-progress"></div>

    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>

    <div class="swiper-scrollbar"></div>
   
</div>
      `;
    }
  }