(() => {
  // IMPLEMENTANDO XMLHttpRequest
  // 1 - Crear una instancia
  const xhr = new XMLHttpRequest(),
    $xhr = document.getElementById("xhr"),
    $fragment = document.createDocumentFragment();

  // 2- Crear eventos
  xhr.addEventListener("readystatechange", (e) => {
    //   console.log(xhr);
    if (xhr.readyState !== 4) return;

    console.log(xhr);
    if (xhr.status >= 200 && xhr.status < 300) {
      //   console.log("Exito");
      //   console.log(xhr.responseText);
      //   $xhr.innerHTML = xhr.responseText;
      let json = JSON.parse(xhr.responseText);
      //   console.log(json);
      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone} `;
        $fragment.appendChild($li);
      });
      $xhr.appendChild($fragment);
    } else {
      //   console.log("Error");
      let message = xhr.statusText || "Ocurrió un error";
      $xhr.innerHTML = `Error ${xhr.status}: ${message}`;
    }
  });

  // 3 - Abrir especificando el verbo http, y la url a la que voy hacer la peticion
  xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

  // 4 - Enviar
  xhr.send();
})();

(() => {
  const $fetch = document.getElementById("fetch"),
    $fragment = document.createDocumentFragment();

  fetch("https://jsonplaceholder.typicode.com/users")
    // .then((res) => {
    //   console.log(res);
    //   return res.ok ? res.json() : Promise.reject(res);
    // })
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => {
      //   console.log(json);
      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone} `;
        $fragment.appendChild($li);
      });
      $fetch.appendChild($fragment);
    })
    .catch((err) => {
      //   console.log(err);
      let message = err.statusText || "Ocurrió un error";
      $fetch.innerHTML = `Error ${err.status}: ${message}`;
    })
    .finally(() =>
      console.log(
        "Esto se va a ejecutar independientemente de la promesa del Fetch"
      )
    );
})();

(() => {
  const $fetchAsync = document.getElementById("fetch-async"),
    $fragment = document.createDocumentFragment();

  async function getData() {
    let res = await fetch("https://jsonplaceholder.typicode.com/users"),
      json = await res.json();
    // console.log(res, json);

    // if (!res.ok) throw new Error("Ocurrio un error al solicitar los datos"); //el objeto Error de Js solo acepta cadenas de texto
    if (!res.ok) throw { status: res.status, statusText: res.statusText };

    json.forEach((el) => {
      const $li = document.createElement("li");
      $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone} `;
      $fragment.appendChild($li);
    });
    $fetchAsync.appendChild($fragment);
    try {
    } catch (err) {
      console.log(err);
      let message = err.statusText || "Ocurrió un error";
      $fetchAsync.innerHTML = `Error ${err.status}: ${message}`;
    } finally {
      console.log(
        "Esto se va a ejecutar independientemente de la promesa del Fetch - Async"
      );
    }
  }

  getData();
})();

(() => {
  const $axios = document.getElementById("axios"),
    $fragment = document.createDocumentFragment();

  axios
    // .get("assets/users.json")
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      console.log(res);
      let json = res.data;

      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone} `;
        $fragment.appendChild($li);
      });
      $axios.appendChild($fragment);
    })
    .catch((err) => {
      console.log(err.response);
      let message = err.response.statusText || "Ocurrió un error";
      $axios.innerHTML = `Error ${err.response.status}: ${message}`;
    })
    .finally("Esto se ejecutara independientemente del resultado de Axios");
})();

(() => {
  const $axiosAsync = document.getElementById("axios-async"),
    $fragment = document.createDocumentFragment();

  async function getData() {
    try {
      let res = await axios.get("https://jsonplaceholder.typicode.com/users"),
        json = await res.data;

      console.log(json);

      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone} `;
        $fragment.appendChild($li);
      });
      $axiosAsync.appendChild($fragment);
    } catch (err) {
      console.log(err.response);
      let message = err.response.statusText || "Ocurrió un error";
      $axiosAsync.innerHTML = `Error ${err.response.status}: ${message}`;
    } finally {
      console.log(
        "Esto se ejecutará independientemente de la petición Ajax - Async"
      );
    }
  }

  getData();
})();
