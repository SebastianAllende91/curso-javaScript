/*
console.log("hola mundo");

-- FUNCIONES FLECHAS

function sumar() {
  console.log(20);
}

sumar();

const sumarDos = (num1, num2) => {
  return num1 + num2;
};

const sumarTres = (num1, num2) => num1 + num2;

const total = sumarDos(10, 20);
console.log(total);

const otroTotal = sumarTres(15, 3);
console.log(otroTotal);

const saludo = (nombre) => {
  return "hola soy " + nombre;
};

const saludando = saludo("Sebastian Ariel Allende");
console.log(saludando);
*/

/*
//si recibe un parametro saluda al nombre del parametro, si no recibe tiene asignado por defecto "PEPE"
const saludo = (nombre = "Pepe") => {
  return "hola soy " + nombre;
};

const resultado = saludo("Omar");
console.log(resultado);

const otroSaludo = saludo();
console.log(otroSaludo);
*/

/*
// -- TEMPLATE STRING
// -- CON RETURN
/*
const numero = (num1, num2) => {
  return `El resultado es: ${num1 + num2}`;
};


// -- SIN RETURN
const numero = (num1, num2) => `El resultado es: ${num1 + num2}`;

const resultado = numero(10, 5);
console.log(resultado);
*/

/*
// --OBJETOS
const mascota = {
  nombre: "Tom",
  edad: 5,
  vivo: true,
  gustos: ["comer", "dormir", "jugar"],
};

console.log(mascota);
console.log(mascota.nombre);
console.log(mascota.edad);
console.log(mascota.vivo);

//agregamos un elemento al objeto
mascota.id = 1;

//accediendo al gusto de la mascota en la posicion 2 del array
console.log(mascota.gustos[2]);

console.log("ahora con desestructuracion");
//desestructuracion
const { nombre, edad, vivo, gustos } = mascota;
console.log(edad);
console.log(vivo);
console.log(nombre);
console.log(gustos);
*/

/*
// --ARRAY DE OBJETOS
const web = {
  nombre: "bluuweb",
  links: {
    enlace: "www.bluuweb.cl",
  },
  redesSociales: {
    youtube: {
      enlace: "youtube.com/bluuweb",
      nombre: "bluuweb yt",
    },
    facebook: {
      enlace: "facebook.com/bluuweb",
      nombre: "bluuweb fc",
    },
  },
};

//guardando en enlace de youtube en una variable para poder acceder a ese atributo
const enlaceYT = web.redesSociales.youtube.enlace;
console.log(enlaceYT);

// desestructurando el objeto para poder acceder a ambos atributos ( menos codigo , mas prolijo )
const { enlace, nombre } = web.redesSociales.facebook;
console.log(nombre);
console.log(enlace);
*/

// -- FETCH API
fetch("https://pokeapi.co/api/v2/pokemon/")
  .then((res) => res.json())
  .then((data) => {
    //console.log(data.results);
    let arrayNombres = [];
    data.results.forEach((element) => {
      arrayNombres.push(element.name);
    });
    console.log(arrayNombres);
  })
  .catch((error) => console.log(error));

// -- ASYNC Y AWAIT
const obtenerPokemones = async () => {
  try {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/");
    const datos = await res.json();
    // console.log(datos.results);
    let arrayNombres = datos.results.map((elemento) => elemento.name);
    console.log(arrayNombres);
  } catch (error) {
    console.log(error);
  }
};

obtenerPokemones();
