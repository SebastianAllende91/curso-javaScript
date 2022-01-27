import scrollTopButtom from "./boton_scroll.js";
import slider from "./carrusel.js";
import countdown from "./cuentaRegresiva.js";
import userDeviceInfo from "./deteccion_dispositivos.js";
import webCam from "./deteccion_webcam.js";
import networkStatus from "./detencion_red.js";
import searchFilters from "./filtro_busquedas.js";
import getGeolocation from "./goelocalizacion.js";
import hamburguerMenu from "./manu_hamburguesa.js";
import speechReader from "./narrador.js";
import responsiveMedia from "./objeto_resposive.js";
import responsiveTester from "./prueba_responsive.js";
import { alarm, digitalClock } from "./reloj.js";
import scrollSpy from "./scroll_espia.js";
import draw from "./sorteo.js";
import { moveBall, shortcuts } from "./teclado.js";
import darkTheme from "./tema_oscuro.js";
import contactFormValidations from "./validaciones_formulario.js";
import smartVideo from "./video_inteligente.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  // Ejercicio 1
  hamburguerMenu(".panel-btn", ".panel", ".menu a");

  // Ejercicio 2
  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
  alarm("assets/alarma.mp3", "#activar-alarma", "#desactivar-alarma");

  // Ejercicio 4
  countdown(
    "countdown",
    "Marzo 08,2022 08:25:00",
    "Feliz Cumpleaños Sebastián"
  );

  // Ejercicio 5
  scrollTopButtom(".scroll-top-btn");

  // Ejercicio 7
  responsiveMedia(
    "youtube",
    "(min-width:1024px)",
    `<a href="https://www.youtube.com/watch?v=6IwUl-4pAzc&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=91" target="_blank" rel="noopener" >Ver Video</a>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/6IwUl-4pAzc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
  );
  responsiveMedia(
    "gmaps",
    "(min-width:1024px)",
    `<a href="https://goo.gl/maps/9LD9h2T9qGg5CU1G7" target="_blank" rel="noopener" >Ver Mapa</a>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52490.97064336056!2d-58.59891545879766!3d-34.68788201485643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc622f9709805%3A0xb5f373c7721a50a5!2sSan%20Justo%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1642829200490!5m2!1ses!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`
  );

  // Ejercicio 8
  responsiveTester("responsive-tester");

  // Ejercicio 9
  userDeviceInfo("user-device");

  // Ejercicio 11
  webCam("webcam");

  // Ejercicio 12
  getGeolocation("geolocation");

  // Ejercicio 13
  searchFilters(".card-filter", ".card");

  // Ejercicio 14
  draw("#winner-btn", ".player");

  // Ejercicio 15
  slider();

  // Ejercicio 16
  scrollSpy();

  // Ejercicio 17
  smartVideo();

  // Ejercicio 18
  contactFormValidations();
});

d.addEventListener("keydown", (e) => {
  // Ejercicio 3
  // keydown : cuando apretas la tecla. - keypress: mientras tengas apretado - keyup: cuando soltamos la tecla
  shortcuts(e);
  moveBall(e, ".ball", ".stage");
});

// Ejercicio 6
darkTheme(".dark-theme-btn", "dark-mode");

// Ejercicio 10
networkStatus();

// Ejercicio 19
speechReader();
