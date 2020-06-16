export default class NavBar {
    constructor() {
      this.template();
    }

    template() {
      document.querySelector(".tabbar").innerHTML += /*html*/ `
      <div class="nav-container">
      <img id="nav-logo" src="./images/logo-sign.svg" alt="logo">
      <span id="vanish">
      </span>
      <span id="caselink" ><i class="fas fa-layer-group"></i>
      <div id="casedesc" class="link-desc">
      <p>CASES</p>
      </div>
      </span>
      <span id="proceslink"><i class="fas fa-hourglass-half"></i>
      <div id="procesdesc" class="link-desc">
      <p>PROCES</p>
      </div>
      </span>
      <span id="aboutlink"><i class="fas fa-user-friends"></i>
      <div id="aboutdesc" class="link-desc">
      <p>OM OS</p>
      </div>
      </span>

      <span id="recommendlink" ><i class="fas fa-laugh"></i>
      <div id="contactdesc" class="link-desc">
      <p>ANBEFALINGER</p>
      </div>
      </span>
      <span id="contactlink" ><i class="fas fa-paper-plane"></i>
      <div id="contactdesc" class="link-desc">
      <p>KONTAKT</p>
      </div>
      </span>
      <span id="vanish">
      </span>
      </div>
      <div class="tabbar-some">
          <a href="https://www.linkedin.com/company/53528435" target="_blank"><i class="fab fa-linkedin"></i></a>
          <a href="https://www.facebook.com/Difento-104301181322258/" target="_blank"><i class="fab fa-facebook-square"></i></a>
          <a href="https://www.instagram.com/difento.dk/" target="_blank"><i class="fab fa-instagram"></i></a>
        </div>
      `;
    }
  }