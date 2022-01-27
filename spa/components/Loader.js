export function Loader() {
  const $loader = document.createElement("img");
  $loader.src = "assets/Loader.gif";
  $loader.alt = "Cargando...";
  $loader.classList.add("loader");

  return $loader;
}
