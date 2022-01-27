// setTimeout(() => {
//   console.log("Ejecutando un set time out");
// }, 2000);

// console.log("hola despues del set time out");

// setInterval(() => {
//   console.log("Ejecutando un set interval");
// }, 2000);

// Codigo sincrono
// console.log("Inicio");
// console.log("uno");

// function dos() {
//   console.log("dos");
// }

// function tres() {
//   dos();
//   console.log("tres");
// }
// tres();
// console.log("fin");
// console.log("*************************************************");

// Codigo asincrono
// console.log("inicio");
// setTimeout(() => {
//   console.log("uno");
// }, 2000);

// function dos() {
//   console.log("dos");
// }
// setTimeout(() => {
//   console.log("tres");
// }, 0);

// dos();
// console.log("fin");

// Callabck

// function cuadradoCallback(value, callback) {
//   setTimeout(() => {
//     callback(value, value * value);
//   }, 0 || Math.random() * 100);
// }

// cuadradoCallback(0, (value, result) => {
//   console.log("Inicia Callback");
//   console.log(`Callback: ${value}, ${result}`);
//   cuadradoCallback(1, (value, result) => {
//     console.log(`Callback: ${value}, ${result}`);
//     cuadradoCallback(2, (value, result) => {
//       console.log(`Callback: ${value}, ${result}`);
//       cuadradoCallback(3, (value, result) => {
//         console.log(`Callback: ${value}, ${result}`);
//       });
//     });
//   });
// });

// Promesas

// function cuadradoPromise(value) {
//   if (typeof value !== "number")
//     return Promise.reject(`El valor ${value} ingresado no es un numero`);
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({
//         value,
//         result: value * value,
//       });
//     }, 0 || Math.random() * 100);
//   });
// }

// cuadradoPromise(0)
//   .then((res) => {
//     console.log(`Promise: ${res.value}, ${res.result}`);
//     return cuadradoPromise(1);
//   })
//   .then((res) => {
//     console.log(`Promise: ${res.value}, ${res.result}`);
//     return cuadradoPromise(2);
//   })
//   .then((res) => {
//     console.log(`Promise: ${res.value}, ${res.result}`);
//     return cuadradoPromise(3);
//   })
//   .then((res) => {
//     console.log(`Promise: ${res.value}, ${res.result}`);
//     return cuadradoPromise(4);
//   })
//   .then((res) => {
//     console.log(`Promise: ${res.value}, ${res.result}`);
//     console.log("Fin Promise");
//   })
//   .catch((err) => console.error(err));

// Funciones asincronas

// function cuadradoPromise(value) {
//   if (typeof value !== "number")
//     return Promise.reject(`El valor ${value} ingresado no es un numero`);
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({
//         value,
//         result: value * value,
//       });
//     }, 0 || Math.random() * 100);
//   });
// }

// async function funcionAsincronaDeclarada() {
//   try {
//     console.log("Inicio Async Function");
//     let obj = await cuadradoPromise(0);

//     console.log(`Async Function ${obj.value},${obj.result}`);

//     obj = await cuadradoPromise(1);
//     console.log(`Async Function ${obj.value},${obj.result}`);
//     console.log("Fin Async Function");
//   } catch (error) {
//     console.error(error);
//   }
// }

// funcionAsincronaDeclarada();

// const funcionAsincronaDeclarada2 = async () => {
//   try {
//     console.log("Inicio Async Function2");
//     let obj = await cuadradoPromise(0);

//     console.log(`Async Function ${obj.value},${obj.result}`);

//     obj = await cuadradoPromise(1);
//     console.log(`Async Function ${obj.value},${obj.result}`);
//     console.log("Fin Async Function2");
//   } catch (error) {
//     console.error(error);
//   }
// };

// funcionAsincronaDeclarada2();

// Set

// const names = ["seba", "pame", "romi", "marina", "pame", "avelino", "seba"];
// console.log(names);
// const newNames = new Set(names);
// console.log(newNames);

// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 3, 3];
// console.log(numeros);
// const nuevaLista = new Set(numeros);
// console.log(nuevaLista);

// Maps
// let mapa = new Map();
// mapa.set("nombre", "Seba");
// mapa.set("apellido", "Allende");
// mapa.set("Edad", 30);

// console.log(mapa);
// console.log(mapa.size);
// console.log(mapa.has("correo"));
// console.log(mapa.has("nombre"));
// console.log(mapa.get("nombre"));
// console.log(mapa.keys());
// console.log(mapa.values());
// console.log(mapa.has("edad"));
// console.log(mapa.size);

// for (let [key, value] of mapa) {
//   console.log(`Llave: ${key}, valor: ${value}`);
// }

// WeakSets y WeakMaps

// const ws = new WeakSet();
// let valor1 = { valor1: 1 };
// let valor2 = { valor2: 2 };
// let valor3 = { valor3: 3 };

// ws.add(valor1);
// ws.add(valor2);

// console.log(ws);
// console.log(ws.has(valor1));
// console.log(ws.has(valor3));

// ws.delete(valor2);
// console.log(ws);

// ws.add(valor2);
// ws.add(valor3);
// console.log(ws);

// // setInterval(() => {
// //   console.log(ws);
// // }, 1000);

// setTimeout(() => {
//   console.log(ws);
// }, 3000);

// const wm = new WeakMap();

// let llave1 = {};
// let llave2 = {};
// let llave3 = {};

// wm.set(llave1, 1);
// wm.set(llave2, 2);
// console.log(wm);

// console.log(wm.has(llave1));
// console.log(wm.has(llave3));

// console.log(wm.get(llave1));
// console.log(wm.get(llave2));
// console.log(wm.get(llave3));

// wm.delete(llave2);
// console.log(wm);

// Iterables e Iterators
/*
const iterable = [1, 2, 3, 4, 5];
// Comentario: Accedemos al iterador de nuestra variable iterable
const iterador = iterable[Symbol.iterator]();
console.log(iterable);
console.log(iterador);

// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());

let next = iterador.next();

while (!next.done) {
  console.log(next.value);
  next = iterador.next();
}
*/
/*
// Generators
function* iterable() {
  yield "hola";
  console.log("hola consola");
  yield "hola 2";
  console.log("seguimos con mas instrucciones de nuestro codigo");
  yield "hola 3";
  yield "hola 4";
}

let iterador = iterable();
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());

for (let y of iterador) {
  console.log(y);
}

const arr = [...iterable()];
console.log(arr);

function cuadrado(valor) {
  setTimeout(() => {
    return console.log(valor, (resultado = valor * valor));
  }, 0 || Math.random() * 100);
}

function* generador() {
  console.log("Inicio generador");
  yield cuadrado(0);
  yield cuadrado(1);
  yield cuadrado(2);
  yield cuadrado(3);
  yield cuadrado(4);
  console.log("Fin generador");
}

let gen = generador();

for (const y of gen) {
  console.log(y);
}
*/

// Proxies

// const persona = {
//   nombre: "",
//   apellido: "",
//   edad: 0,
// };

// const manejador = {
//   set(obj, props, valor) {
//     if (Object.keys(obj).indexOf(props) === -1) {
//       return console.error(
//         `La propiedad ${props} no existe en el objeto persona`
//       );
//     }
//     obj[props] = valor;
//   },
// };

// const seba = new Proxy(persona, manejador);
// seba.nombre = "seba";
// seba.apellido = "Allende";
// seba.edad = 30;
// seba.twitter = "@sebaallende";
// console.log(seba);
// console.log(persona);

// Propiedades dinamicas de los Objetos

// let aleatorio = Math.round(Math.random() * 100 + 5);

// const objUsuarios = {
//   [`id_${aleatorio}`]: "Valor Aleatorio",
// };
// console.log(objUsuarios);

// const usuarios = ["Seba", "Pame", "Romi", "Marina"];
// usuarios.forEach(
//   (usuario, index) => (objUsuarios[`id_${index + 1}`] = usuario)
// );

// console.log(objUsuarios);

// THIS

// console.log(this);
// console.log(window);
// console.log(this === window);

// this.nombre = "Contexto Global";

// console.log(this.nombre);

// function imprimir() {
//   console.log(this.nombre);
// }

// imprimir();

// const obj = {
//   nombre: "Contexto Objeto",
//   imprimir: function () {
//     console.log(this.nombre);
//   },
// };

// obj.imprimir();

// const obj2 = {
//   nombre: "Contexto Objeto 2",
//   imprimir,
// };

// obj2.imprimir();

// const obj3 = {
//   nombre: "Contexto Objeto 3",
//   imprimir: () => {
//     console.log(this.nombre);
//   },
// };

// obj3.imprimir();

// function Persona(nombre) {
//   this.nombre = nombre;
//   // return console.log(this.nombre);
//   return function () {
//     console.log(this.nombre);
//   };
// }

// let seba = new Persona("Sebastian");
// seba();

// CALL, APPLY,BIND

// console.log(this);
// this.lugar = "Contexto Global";

// function saludar(saludo, aQuien) {
//   console.log(`${saludo} ${aQuien} desde el ${this.lugar}`);
// }

// saludar("Hola", "pepe");

// const obj = {
//   lugar: "Contexto Objeto",
// };

// saludar.call(obj, "Hola", "Seba");
// saludar.call(null, "Hola", "Seba");
// saludar.call(this, "Hola", "Seba");

// saludar.apply(obj, ["Adios", "Allende"]);
// saludar.apply(null, ["Adios", "Allende"]);
// saludar.apply(this, ["Adios", "Allende"]);

// this.nombre = "Window";

// const persona = {
//   nombre: "Sebastian",
//   saludar: function () {
//     console.log(`Hola ${this.nombre}`);
//   },
// };

// persona.saludar();

// const otraPersona = {
//   saludar: persona.saludar.bind(this),
// };

// otraPersona.saludar();

// JSON

// const json = {
//   cadena: "Seba",
//   numero: 35,
//   booleano: true,
//   arreglo: ["correr", "programar", "cocinar"],
//   objeto: {
//     twitter: "@allendesebastian",
//     email: "sebaallende91@gmail.com",
//   },
//   nulo: null,
// };

// console.log(json);
// console.log(JSON.parse("{}"));
// console.log(JSON.parse("[]"));
// console.log(JSON.parse("[1,2,3]"));
// console.log(JSON.parse("true"));
// console.log(JSON.parse("false"));
// console.log(JSON.parse("19"));
// // console.log(JSON.parse("cadena de texto"));
// console.log(JSON.parse("null"));
// // console.log("undefined");

// console.log(JSON.stringify({}));
// console.log(JSON.stringify("[1,2,3]"));
// console.log(JSON.stringify("true"));
// console.log(JSON.stringify("false"));
// console.log(JSON.stringify("19"));
// console.log(JSON.stringify({ x: 2, y: 3 }));

// console.log(JSON.stringify(json));
