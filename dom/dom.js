/*
// INTRODUCCION AL DOM
console.log("********** Elementos del navegador **********");
console.log(window.document);
console.log(document);
console.log(document.head);
console.log(document.body);
console.log(document.documentElement);
console.log(document.doctype);
console.log(document.charset);
console.log(document.title);
console.log(document.links);
console.log(document.images);
console.log(document.forms);
console.log(document.styleSheets);
console.log(document.scripts);
setTimeout(() => {
  console.log(document.getSelection().toString());
}, 3000);
document.write("<h2>Hola mundo desde el Dom</h2>");
*/

/*
// NODOS , ELEMENTOS Y SELECTORES
console.log(document.getElementsByTagName("li"));
console.log(document.getElementsByClassName("card"));
console.log(document.getElementsByName("nombre"));
console.log(document.getElementById("menu"));
console.log(document.querySelector("#menu"));
console.log(document.querySelectorAll("a"));
console.log(document.querySelectorAll("a").length);

document.querySelectorAll("a").forEach((el) => console.log(el));
console.log(document.querySelector(".card"));
console.log(document.querySelectorAll(".card"));
console.log(document.querySelectorAll(".card")[2]);
console.log(document.querySelectorAll("#menu li"));
console.log(document.querySelectorAll("#menu li"));

*/

/*
// Atributos y data-attributes
// atributos
console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute("lang"));
console.log(document.querySelector(".link-dom").href);
console.log(document.querySelector(".link-dom").getAttribute("href"));

document.documentElement.lang = "es";
console.log(document.documentElement.lang);
document.documentElement.setAttribute("lang", "es-MX");
console.log(document.documentElement.lang);

const $linkDom = document.querySelector(".link-dom");
$linkDom.setAttribute("target", "_blank");
$linkDom.setAttribute("rel", "noopener");
$linkDom.setAttribute("href", "https://google.com");
console.log($linkDom.hasAttribute("rel"));
$linkDom.removeAttribute("rel");
console.log($linkDom.hasAttribute("rel"));

data-attributes
console.log($linkDom.getAttribute("data-description"));
*/

/*
// ESTILOS Y VARIABLES EN CSS
// estilos
const $linkDom = document.querySelector(".link-dom");
console.log($linkDom.style);
console.log($linkDom.getAttribute("style"));
console.log($linkDom.style.backgroundColor);
console.log($linkDom.style.color);
console.log(window.getComputedStyle($linkDom));
console.log(getComputedStyle($linkDom).getPropertyValue("color"));

$linkDom.style.setProperty("text-decoration", "none");
$linkDom.style.setProperty("display", "block");
$linkDom.style.width = "50%";
$linkDom.style.textAlign = "center";
$linkDom.style.marginLeft = "auto";
$linkDom.style.marginRight = "auto";
$linkDom.style.padding = "1rem";
$linkDom.style.borderRadius = ".5rem";
console.log($linkDom.style);
console.log($linkDom.getAttribute("style"));
console.log(window.getComputedStyle($linkDom));

variables CSS - Custom Properties CSS
const $html = document.documentElement;
$body = document.body;

let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");
let varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

console.log(varDarkColor, varYellowColor);

$body.style.backgroundColor = varDarkColor;
$body.style.color = varYellowColor;

$html.style.setProperty("--dark-color", "#000");
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");
$body.style.setProperty("background-color", varDarkColor);
*/

/*
// DOM CLASES CSS
const $card = document.querySelector(".card");
console.log($card);
console.log($card.className);
console.log($card.classList);
console.log($card.classList.contains("rotate-45"));
$card.classList.add("rotate-45");
console.log($card.classList.contains("rotate-45"));
console.log($card.className);
console.log($card.classList);
$card.classList.remove("rotate-45");
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45");
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45");
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45");
$card.classList.replace("rotate-45", "rotate-135");
$card.classList.add("opacity-80", "sepia");
$card.classList.remove("opacity-80", "sepia");
$card.classList.toggle("opacity-80", "sepia");
*/

/*
// DOM - TEXTO Y HTML
const $whatIsDom = document.getElementById("que-es");

let text = `
<p>
    El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model</i></b>) es una API para documentos HTML y XML.
</p>
<p>
    Este proveé una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS.
</p>
<p>
    <mark>El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.</mark>
</p>
`;
//reconoce las etiquetas HTML
$whatIsDom.innerHTML = text;
//no reconoce las etiquetas HTML
$whatIsDom.textContent = text;
// reemplaza el contenido del nodo seleccionado e insenta contenido HTML
$whatIsDom.innerHTML = text;
// reemplaza el elemento del dom por el contenido que le asignamos}
$whatIsDom.outerHTML = text;
*/

/*
// DOM Traversing : Recorriendo el Dom (enfocato a etiquetas html)
const $cards = document.querySelector(".cards");
console.log($cards);
console.log($cards.children);
console.log($cards.children[2]);
console.log($cards.parentElement);
console.log($cards.parentNode);
console.log($cards.firstChild);
console.log($cards.firstElementChild);
console.log($cards.lastElementChild);
*/

/*
// CREANDO ELEMENTOS Y FRAGMENTOS

const $figure = document.createElement("figure");
$img = document.createElement("img");
$figcaption = document.createElement("figcaption");
$figcaptionText = document.createTextNode("Animals");
$cards = document.querySelector(".cards");
$figure2 = document.createElement("figure");

$img.setAttribute("src", "https://placeimg.com/200/200/animals");
$img.setAttribute("alt", "Animals");
$figure.classList.add("card");

$figure.appendChild($img);
$figure.appendChild($figcaption);
$figcaption.appendChild($figcaptionText);

$cards.appendChild($figure);

$figure2.innerHTML = `
<img src="https://placeimg.com/200/200/People" alt="People" />
<figcaption>People</figcaption>
`;

$figure2.classList.add("card");
$cards.appendChild($figure2);

const estaciones = ["Primavera", "Verano", "otoño", "Invierno"];
$ul = document.createElement("ul");

document.write("<h3>Estaciones del año</h3>");
document.body.appendChild($ul);

estaciones.forEach((el) => {
  const $li = document.createElement("li");
  $li.textContent = el;
  $ul.appendChild($li);
});

const continentes = ["África", "América", "Asia", "Europa", "Oceanía"];
$ul2 = document.createElement("ul");

document.write("<h3>Continentes del mundo</h3>");
document.body.appendChild($ul2);
$ul2.innerHTML = "";

continentes.forEach((el) => {
  $ul2.innerHTML += `<li>${el}</li>`;
});

const meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

$ul3 = document.createElement("ul");

$fragment = document.createDocumentFragment();

meses.forEach((el) => {
  const $li = document.createElement("li");
  $li.textContent = el;
  $fragment.appendChild($li);
});

document.write("<h3>Meses del Año</h3>");
$ul3.appendChild($fragment);
document.body.appendChild($ul3);
*/

/*
// DOM: TEMPLATES HTML
const $cards = document.querySelector(".cards");
$template = document.getElementById("template-card").content;
$fragmen = document.createDocumentFragment();

cardContect = [
  { title: "Tecnologia", img: "https://placeimg.com/200/200/tech" },
  { title: "Animales", img: "https://placeimg.com/200/200/animals" },
  { title: "Arquitectura", img: "https://placeimg.com/200/200/arch" },
  { title: "Gente", img: "https://placeimg.com/200/200/people" },
  { title: "Naturaleza", img: "https://placeimg.com/200/200/nature" },
];

cardContect.forEach((el) => {
  $template.querySelector("img").setAttribute("src", el.img);
  $template.querySelector("img").setAttribute("alt", el.title);
  $template.querySelector("figcaption").textContent = el.title;

  let $clone = document.importNode($template, true);
  $fragmen.appendChild($clone);
});

$cards.appendChild($fragmen);
*/

/*
// DOM: MODIFICANDO ELEMENTOS
const $cards = document.querySelector(".cards");
$newCard = document.createElement("figure");
$cloneCards = $cards.cloneNode(true); // clono todo el contenido de las cards("true": con todo el contenido de adentro, "false": solo el contenido contenedor) ,

$newCard.innerHTML = `
<img src="https://placeimg.com/200/200/any" alt="Any" />
<figcaption>Any</figcaption>
`;

// $cards.replaceChild($newCard, $cards.children[2]); //(cambia en la posicion del nodo seleccionado)
// $cards.insertBefore($newCard, $cards.firstElementChild); //(agrega la card antes del primer elemento del nodo)
//$cards.removeChild($cards.lastElementChild); //(elimina el ultimo elemento del nodo)
/*
document.body.appendChild($cloneCards);
*/

/*
// DOM: MODIFICANDO ELEMENTOS (Coll Style)
/*
    .insertAdjacent...
        .insertAdjacentElement(position,el)
        .insertAdjacentHTML(position,el)
        .insertAdjacentText(position,text)
    
    Posiciones: 
        beforebegin(hermano anterior)
        afterbegin(primer hijo)
        beforeend(ultimo hijo)
        afterend(hermano siguiente)

*/
/*
const $cards = document.querySelector(".cards");
$newCard = document.createElement("figure");

$newCard.innerHTML = `
<img src="https://placeimg.com/200/200/any" alt="Any" />
<figcaption>Any</figcaption>
`;

$newCard.classList.add("card");

// $cards.insertAdjacentElement("beforebegin", $newCard);
$cards.insertAdjacentElement("afterbegin", $newCard);
// $cards.insertAdjacentElement("beforeend", $newCard);
// $cards.insertAdjacentElement("afterend", $newCard);
*/
/*
const $cards = document.querySelector(".cards");
$newCard = document.createElement("figure");

let $contentCard = `
<img src="https://placeimg.com/200/200/any" alt="Any" />
<figcaption></figcaption>
`;

$newCard.classList.add("card");

$newCard.insertAdjacentHTML("beforeend", $contentCard);
$newCard.querySelector("figcaption").insertAdjacentText("afterbegin", "Any");
// $cards.insertAdjacentElement("afterbegin", $newCard);

// metodos de jquery
// $cards.prepend($newCard);
// $cards.append($newCard);
// $cards.before($newCard);
// $cards.after($newCard);
*/

/*
// DOM: MANEJADOR DE EVENTOS

function holaMundo() {
  alert("Hola Mundo");
  console.log(event);
}

//funcion de eventos con parametros
function saludar(nombre = "Desconocid@") {
  alert(`Hola ${nombre}`);
  console.log(event);
}

const $eventoSemantico = document.getElementById("evento-semantico");
$eventoMultiple = document.getElementById("evento-multiple");
$eventoremover = document.getElementById("evento-remover");

$eventoSemantico.onclick = holaMundo;
$eventoSemantico.onclick = function (e) {
  alert("Hola Mundo Manejador de Eventos Semántico");
  console.log(e);
  console.log(event);
};

$eventoMultiple.addEventListener("click", holaMundo);
$eventoMultiple.addEventListener("click", (e) => {
  alert("Hola Mundo Manejador de Eventos Multiple");
  console.log(e);
  console.log(e.type);
  console.log(e.target);
  console.log(event);
});

// DOM: EVENTOS CON PARAMETROS Y REMOVER EVENTOS

$eventoMultiple.addEventListener("click", () => saludar("sebastian"));

const removerDobleClick = (e) => {
  alert(`Removiendo el evento de tipo ${e.type}`);
  console.log(e);
  $eventoremover.removeEventListener("dblclick", removerDobleClick);
  $eventoremover.disabled = true;
};

$eventoremover.addEventListener("dblclick", removerDobleClick);
*/

/*
// FLUJO DE EVENTOS (BURBUJA Y CAPTURA)
const $divsEventos = document.querySelectorAll(".eventos-flujo div");
$linkEventos = document.querySelector(".eventos-flujo a");

function flujoEventos(e) {
  console.log(
    `hola te saluda ${this}, el click lo origino ${e.target.className}`
  );
  // e.stopPropagation(); // detiene la propagacion.
}
*/

/*
$divsEventos.forEach((div) => {
  // Fase burbuja: Del elemento mas interno a los elementos externos, especificando el tercer argunmento en "false" o sin pasar un 3 argumento
  div.addEventListener("click", flujoEventos);
  // div.addEventListener("click", flujoEventos, false);

  // Fase de captura: Del elemento mas externo hacia los elementos mas internos. pasando el tercer argumento en "true"
  //   div.addEventListener("click", flujoEventos, true);


//    div.addEventListener("click", flujoEventos, {
//      capture: true,
//      once: true,
//    });

});
*/

/*
// DOM: stopPropagation & PreventDefault
$linkEventos.addEventListener("click", (e) => {
  alert("Hola soy tu amigo Sebastian");
  e.preventDefault();
  e.stopPropagation();
});
*/
/*
// DOM: Delegacion de eventos
document.addEventListener("click", (e) => {
  console.log("Click en ", e.target);

  if (e.target.matches(".eventos-flujo div")) {
    flujoEventos(e);
  }

  if (e.target.matches(".eventos-flujo a")) {
    alert("Hola soy tu amigo Sebastian");
    e.preventDefault();
  }
});
*/

/*
//BOM : PROPIEDADES Y EVENTOS
window.addEventListener("resize", (e) => {
  console.clear();
  console.log("***** Evento rezise *****");
  console.log(window.innerWidth);
  console.log(window.innerHeight);
  console.log(window.outerWidth);
  console.log(window.outerHeight);

  console.log(e);
});

window.addEventListener("scroll", (e) => {
  console.clear();
  console.log("***** Evento Scroll ***** ");
  console.log(window.scrollX);
  console.log(window.scrollY);
  console.log(e);
});

window.addEventListener("load", (e) => {
  // console.clear();
  console.log("***** Evento Load ***** ");
  console.log(window.screenX);
  console.log(window.screenY);
  console.log(e);
});

document.addEventListener("DOMContentLoaded", (e) => {
  // console.clear();
  console.log("***** Evento DOMContentLoaded ***** ");
  console.log(window.screenX);
  console.log(window.screenY);
  console.log(e);
});
*/

// BOM: Métodos
/*
 ya vimos estos métodos
 alert("alerta");
 confirm("Confirmacion");
 prompt("Pregunta");
*/
/*
const $btnAbrir = document.getElementById("abrir-ventana"),
  $btnCerrar = document.getElementById("cerrar-ventana"),
  $btnImprimir = document.getElementById("imprimir-ventana");

let ventana;

$btnAbrir.addEventListener("click", (e) => {
  // window.open("https://jonmircha.com"); -- todo objeto de window no hace falta poner "window"

  ventana = open("https://jonmircha.com");
});

$btnCerrar.addEventListener("click", (e) => {
  if (!ventana) {
    alert("No esta abierta la ventana, para cerrar");
  } else {
    ventana.close();
  }
});

$btnImprimir.addEventListener("click", (e) => {
  // Método para imprimir o guardar pdf
  print();
});
*/

//BOM: Objetos: URL,Historial y Navegador
/*
console.log("***** Objeto URL(location) *****");
console.log(location);
console.log(location.origin);
console.log(location.protocol);
console.log(location.host);
console.log(location.hostname);
console.log(location.port);
console.log(location.href);
console.log(location.hash);
console.log(location.search);
console.log(location.pathname);
// location.reload() -- haria reloaded en la pagina con un bucle infinito
*/

/*
console.log("***** Objeto URL(history) *****");
console.log(history);
console.log(history.length);
//history.back(2) -- atrasa las páginas segun el parametro que le pasemos en relacion a nuestro historial.
//history.forward(1) -- adelanta las páginas según el parametro que le pasemos en relacion a nuestro historial.
// history.go(-2);
*/
/*
console.log("***** Objeto URL(navegador)");
console.log(navigator);
console.log(navigator.connection);
console.log(navigator.geolocation);
console.log(navigator.mediaDevices);
console.log(navigator.mimeTypes);
console.log(navigator.onLine);
console.log(navigator.serviceWorker);
console.log(navigator.storage);
console.log(navigator.usb);
console.log(navigator.userAgent);
*/
