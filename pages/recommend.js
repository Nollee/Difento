export default class Recommend {
    constructor() {
      this.template();
    }

    template() {
      document.querySelector("#recommend").innerHTML += /*html*/ `
<h2>ANBEFALINGER</h2>
<div id="recommend-container"></div>


      `;
    }
  }