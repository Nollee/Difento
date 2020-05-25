import NavBar from "./components/navbar.js";
import HomePage from "./pages/home.js";
import AboutPage from "./pages/about.js";
import ClientsPage from "./pages/clients.js";
import ContactPage from "./pages/contact.js";
import _spaService from "./services/spa.js";


// Declare and init
let navbar = new NavBar();
let homePage = new HomePage();
let aboutPage = new AboutPage();
let clientsPage = new ClientsPage;
let contactPage = new ContactPage();

// init services
_spaService.init();

VANTA.BIRDS({
    el: "#birds",
    mouseControls: true,
  touchControls: true,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  backgroundColor: 0x172430,
  color1: 0xff593e,
  color2: 0xfe2806,
  colorMode: "lerp",
  birdSize: 1.10,
  wingSpan: 14.00,
  speedLimit: 1.90,
  separation: 21.00,
  alignment: 59.00,
  cohesion: 16.00,
  quantity: 3.00
  })