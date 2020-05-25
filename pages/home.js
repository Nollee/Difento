export default class HomePage {
  constructor() {
    this.template();
  }

  template() {
    document.querySelector('#content').innerHTML += /*html*/ `
      <section id="home" class="page">
      <div class="hero-forside">
      <div class="hero-text">
      <div class="logo">
      <img id="butterfly" src="./images/logo-sign.svg" alt="logo">
      <img id="logo-text"src="./images/logo-word.svg" alt="logo">
      </div>
      </div>
      <div id="birds">
      <div class="gradient-left"></div>
      <div class="gradient-bot"></div>
      </div>
      </div>
      </section>
    `;
  }
}