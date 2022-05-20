// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  let matriz= [];

  for (let clave in objeto)  {
    let arreglo = [clave, objeto[clave]];
    matriz.push(arreglo);
  }

  //matriz = Object.entries(objeto); //forma alternativa provista en revisión de clases de apoyo
  return matriz;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  /* let objeto = {};
  console.log(objeto);
  let stringOrdenada = string;
  console.log(stringOrdenada);
  stringOrdenada = stringOrdenada.sort();  //esto da error, no le gusta el sort
  console.log(stringOrdenada);
  for (let i = 0;i<stringOrdenada.length;i++) {
    console.log(stringOrdenada[i] +" "+stringOrdenada[i+1]);

    if (stringOrdenada[i+1] != stringOrdenada[i]) {
      objeto.stringOrdenada[i] = i+1;
      stringOrdenada = stringOrdenada.slice(i+1);
    }
  }
  return objeto; */

  //forma alternativa provista en revisión de clases de apoyo
  var contador = {};
  for (var i of string) {
    if (contador[i]) {
      contador[i]++;
    } else {
      contador[i] = 1;
    }
  }
  return contador;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var arreglo = [];
  var inicio = 0;
  for (var i of s) {
    if (i === i.toUpperCase()) {
      arreglo.splice(inicio,0,i);
      inicio++
    } else {
      arreglo.push(i);
    }
  }
  return arreglo.join("");
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  /* let arrayPalabras = str.split(" "); //Array de palabras sueltas
  let arrayInvertidas = []
  //recorro el array de palabras y las invierto de a una
  for(let i = 0; i<arrayPalabras.length;i++) {
    reversa = '';
    for (j = arrayPalabras[i].length-1; j>=0;j--) {
      reversa += arrayPalabras[i][j];
    }
    arrayInvertidas.push(reversa);
  }
  return arrayInvertidas.join(" "); */
  
  return str.split('').reverse().join('').split(' ').reverse().join(' ');
} 

function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var alfa = numero.toString();
  if (alfa === alfa.split('').reverse().join('')) {
    return "Es capicua";
  } else {
    return "No es capicua";
  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var subCadena = '';
  var eliminar = ['a','b','c']
  for (var i of cadena) {
    if (eliminar.includes(i)){
      continue;
    }
    subCadena += i;
  }
  return subCadena;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  for (i=1; i< arr.length; i++) {
    for (j = 0; j<arr.length-(i);j++) {
      if (arr[j].length > arr[j+1].length) {
        aux = arr[j+1];
        arr[j+1] = arr[j];
        arr[j] = aux;
      }
    }
  }
  return arr;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var union = [];
  for (var i of arreglo1) {
    if (arreglo2.includes(i)) {
      union.push(i);
    }
  }
  return union;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

