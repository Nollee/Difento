import Footer from '../components/footer.js'
let footer = new Footer();

function getTerms() {
  fetch('https://difento.dk/wordpress/wp-json/wp/v2/informationpage?_embed')
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      let informationpages = json;
      console.log(informationpages);
      appendInfomationpages(json);
      setTimeout(function () {
      }, 200);
    });
}

getTerms();

function appendInfomationpages(informationpages) {

  let infoPrivate = informationpages[0].content.rendered
  let infoTerms = informationpages[1].content.rendered
  console.log(infoTerms);

  let loadTerms = document.querySelector("#info-terms")
  let loadCookies = document.querySelector("#info-cookies")

  if (loadTerms) {
    loadTerms.innerHTML += infoTerms;
  }

  if (loadCookies) {
    loadCookies.innerHTML += infoPrivate;
  }

}

