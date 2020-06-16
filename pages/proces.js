export default class Proces {
    constructor() {
      this.template();
    }

    template() {
      document.querySelector("#proces").innerHTML += /*html*/ `
      <div id="proceslink-anchor" class="anchor"></div>
      <div class="sub-wrapper dark">
      <h2 class="darkh2">Proces</h2>

      <div class="swiper-container swiper2 para">

      <div class="swiper-wrapper">

      <div class="swiper-slide proc">
      <img src="./images/meet.svg" alt="research" data-aos="fade-in" data-aos-delay="300">
      <div class="proces-text">
      <h3>Møde</h3>
      <p>Alle vores projekter starter med et omfattende møde, hvor vi lærer din virksomhed og problematikker bedre at kende. Til mødet finder vi sammen ud af hvordan vi kan hjælpe dig og hvilke webløsning du kunne have brug for.</p>
      </div>
      </div>
      <div class="swiper-slide proc">
      <img src="./images/research.svg" alt="design" data-aos="fade-in" data-aos-delay="300">
      <div class="proces-text">
      <h3>Research</h3>
      <p>Efter vores indledende møde dykker vi ned i din virksomhed og jeres branche. Vi stræber efter at vide så meget som muligt omkring det i laver og hvem jeres kunder er. Vores research indeholder en grundig undersøgelse og definition af jeres kunder. </p>
      </div>
      </div>
      <div class="swiper-slide proc">
      <img src="./images/brush.svg" alt="møde" data-aos="fade-in" data-aos-delay="300">
      <div class="proces-text">
      <h3>Design</h3>
      <p>På baggrund af vores research begynder vi designfasen. Her udforsker vi en bred vifte af designløsninger, i form af skitser, billeder og mockups. Vi forbliver i denne fase indtil vi er sikre på at have fundet noget unikt, der passer til din virksomhed. Designet bliver allerede i det tidlige stadie testet af målgruppen. Det gør vi for at sikre designets relevans og mindske spildtid fremadrettet.
      </p>
      </div>
      </div>
      <div class="swiper-slide proc">
      <img src="./images/user.svg" alt="udvikling" data-aos="fade-in" data-aos-delay="300">
      <div class="proces-text">
      <h3>Brugertest</h3>
      <p>Vi vil løbende foretage brugertests. På denne måde sikrer vi at siden fungerer som den skal. Derudover sikrer vi os at din side er appellerende for brugeren. Her tester vi bl.a. designet, brugervenlighed, indhold og meget mere – nogle gange er det hér de rigtige gode idéer kommer.</p>
      </div>
      </div>
      <div class="swiper-slide proc">
      <img src="./images/dev.svg" alt="brugertest" data-aos="fade-in" data-aos-delay="300">
      <div class="proces-text">
      <h3>udvikling</h3>
      <p>Efter at have vedtaget en plan for siden, igangsætter vi den næste fase, som er udviklingen. Her skriver vi en masse kode, som du ikke behøver at tænke på. Løbende i denne fase, vil vi kontakte dig, og informere om projektets fremskridt. Efter udviklingen af siden vil vi bl.a. teste sidens performance i forskellige sammenhæng.</p>
      </div>
      </div>

      <div class="swiper-slide proc">
      <img src="./images/server-solid.svg" alt="web hosting" data-aos="zoom-in" data-aos-delay="300">
      <div class="proces-text">
      <h3>Launch</h3>
      <p>Når vi har færdiggjort din side, er det tid til at ”launche” den. Med dette mener vi hosting af siden. Her vil vi tilbyde dig webhosting hos os. Er dette ikke i din interesse, da du måske allerede har en hosting-plan du er glad for, er det helt okay. Vi tilbyder desuden vedligeholdelse og drift af din side, efter udarbejdelsen.</p>
      </div>
      </div>


      </div>

      <div class="swiper-pagination2"></div>

      </div>

      </div>
      `;
    }
  }