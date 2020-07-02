export default class NavBarTop {
  constructor() {
    this.template();
  }

  template() {
    console.log("hello world this is the top");
    document.querySelector(".navbar-top").innerHTML += /*html*/ `
      <div class="logo">
      <img id="butterfly" src="./images/logo-sign.svg" alt="logo">
      <img id="logo-text"src="./images/logo-word.svg" alt="logo">
      </div>

      <div class="top-links">
      <span class="caselink">
      <i class="fas fa-layer-group"></i>
      <p>CASES</p>
      </span>
      <span class="proceslink">
      <i class="fas fa-hourglass-half"></i>
      <p>PROCES</p>
      </span>
      <span class="aboutlink">
      <i class="fas fa-user-friends"></i>
      <p>OM OS</p>
      </span>
      <span class="recommendlink">
      <i class="fas fa-laugh"></i>
      <p>ANBEFALINGER</p>
      </span>
      <span class="contactlink">
      <i class="fas fa-paper-plane"></i>
      <p>KONTAKT</p>
      </span>
      </div>
      `;
  }
}