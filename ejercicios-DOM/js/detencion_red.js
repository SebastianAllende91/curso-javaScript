const d = document,
  w = window,
  n = navigator;

export default function networkStatus() {
  const isOnline = () => {
    const $div = d.createElement("div");
    if (n.onLine) {
      $div.textContent = "Conexción Reestablecida";
      $div.classList.add("online");
      $div.classList.remove("offline");
    } else {
      $div.textContent = "Conexción Perdida";
      $div.classList.add("offline");
      $div.classList.remove("online");
    }

    d.body.insertAdjacentElement("afterbegin", $div);

    setTimeout(() => {
      d.body.removeChild($div);
    }, 2000);
  };
  w.addEventListener("online", (e) => isOnline());
  w.addEventListener("offline", (e) => isOnline());
}
