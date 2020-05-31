export default class Contact {
    constructor() {
      this.template();
    }

    template() {
      document.querySelector("#contact").innerHTML += /*html*/ `
      <div id="contactlink-anchor" class="anchor"></div>
      <div class="sub-wrapper">
      <h2>Kontakt</h2>
      <h3 class="h3-contact" data-aos="fade-in" data-aos-delay="100">skal vi finde din løsning?</h3>
      <h3 class="h3-big-contact" data-aos="fade-up"
      data-aos-anchor-placement="bottom-bottom" data-aos-delay="300">Ta' kontakt</h3>

      <!-- contact form --->
      <!------------------------------------CONTACT FORM--------------------->
      <form id="contact-form" role="form" method="post" action="#" class="form-horizontal">

             <div id="contact-form-top-input">
             <div>
             <h4>Navn</h4>
                <input type="text" class="form-control" id="name" name="name" placeholder="Hvad er dit navn?" required>
                </div>
                <div>
              <h4>Email</h4>
                <input type="email" class="form-control" id="email" name="email" placeholder="Hvilken mail skal vi svare på?" required>
                </div>
            </div>
            <div>
            <h4>Besked</h4>
	                <textarea class="form-control" id="msg" name="msg" placeholder="Fortæl os hvad vi kan hjælpe med" rows="5" required></textarea></div>



          <div class="contact-btn-number">
                  <div class="btn-orange">
                    <div><input type="submit" value="SEND" name="post"><i class="fas fa-paper-plane"></i></div></div>

                <input type="hidden" id="token" name="token">

            </form>

            <div class="call-us" data-aos="fade-in" data-aos-delay="500">
            </div>
          </div>

      <!------ end ------->


      </div>
      `;
    }
  }