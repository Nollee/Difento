  export default class Consent {
    constructor() {
      this.template();
    }

    template() {
      document.querySelector(".cookieconsent").innerHTML += /*html*/ `
      <div class="cookieconsent__content">
      <div>
      <i class="fas fa-cookie-bite"></i><b>Dette website anvender cookies</b>
      </div>
      til at forbedre din oplevelse af websitet. Ved brug af hjemmesiden, accepterer du dette.
      <div>
        Du kan læse mere om vores brug af cookies <a href="cookies.php">Persondatapolitik
        </a>
        </div>
        <div class="cookie-btn">accepter <i class="fas fa-times-circle"></i></div>
        </div>
      `;
    }
  }