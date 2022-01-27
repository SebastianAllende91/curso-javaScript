import { Header } from "./components/Header.js";
import { Main } from "./components/Main.js";
import { Loader } from "./components/Loader.js";
import { Router } from "./components/Router.js";
import { infinityScroll } from "./helpers/infinity_scroll.js";

export function App() {
  const $root = document.getElementById("root");
  //para limpiar el contenido
  $root.innerHTML = null;
  $root.appendChild(Header());
  $root.appendChild(Main());
  $root.appendChild(Loader());
  Router();
  infinityScroll();
}
