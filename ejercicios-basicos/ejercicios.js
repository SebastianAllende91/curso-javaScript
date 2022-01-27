/*
1) Programa una función que cuente el número de caracteres de una cadena de texto,
pe. miFuncion("Hola Mundo") devolverá 10.
const cadena = "hola mundo!!!";
console.log(cadena.length);

function contarCaracteres(texto = "") {
  if (!texto) {
    console.warn("No ingresaste ninguna cadena.");
  } else {
    console.log(`La cadena "${texto} tiene ${texto.length} caracteres.`);
  }
}

contarCaracteres();
contarCaracteres(cadena);
*/
/*
2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados,
 pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
const cadena = "hola mundo!!!";
console.log(cadena.slice(0, 4));

function cortarCadena(texto = "") {
  if (!texto) {
    console.warn("No ingresaste ninguna cadena.");
  } else {
    console.log(
      `El texto "${texto}" que usted ingreso ahora es "${texto.slice(0, 4)"}`
    );
  }
}

cortarCadena();
cortarCadena(cadena);
*/
/*
//3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter,
//pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
const cadena = "Hola que tal";
function separarCadena(texto = "") {
  if (!texto) {
    console.warn("No ingresaste ninguna cadena.");
  } else {
    console.log(texto.split(" "));
  }
}

separarCadena();
separarCadena(cadena);
*/
/*
4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3)
 devolverá Hola Mundo Hola Mundo Hola Mundo.

const cadena = "Hola Mundo";

// function repetirCadena(texto = "") {
//   if (!texto) {
//     console.warn("No ingreso ninguna cadena de texto.");
//   } else {
//     console.log(cadena.repeat(3));
//   }
// }

const repetirCadena = (texto = "") =>
  !texto
    ? console.warn("No ingreso ninguna cadena de texto.")
    : console.log(cadena.repeat(3));

repetirCadena();
repetirCadena(cadena);
*/
