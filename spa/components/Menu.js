export function Menu() {
  const $menu = document.createElement("nav");
  $menu.innerHTML = `
  <a href="#/">Home</a>
  <span> - </span>
  <a href="#/search">Búsqueda</a>
  <span> - </span>
  <a href="#/contacto">Contacto</a>
  <span> - </span>
  <a href="https://aprendejavascript.org" target="_blank" rel="noopener">Aprende Js</a>
  `;
  return $menu;
}
