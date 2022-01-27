const d = document;

export default function scrollSpy() {
  const $sections = d.querySelectorAll("section[data-scroll-spy]");
  const cb = (entries) => {
    // console.log("Entries", entries);
    entries.forEach((entry) => {
      //   console.log(entry);

      const id = entry.target.getAttribute("id");
      //   console.log(id);

      if (entry.isIntersecting) {
        d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.add(
          "active"
        );
      } else {
        d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove(
          "active"
        );
      }
    });
  };

  const observer = new IntersectionObserver(cb, {
    // root: va a tomar por defecto el document
    // rootMargin: "-250px", dice los pixeles estaticos que tiene que tener de margen
    threshold: [0.5, 0.75], //cuando un elemento tenga una visibilidad del 50% al 75%
  });

  //   console.log(observer);

  $sections.forEach((el) => observer.observe(el));
}
