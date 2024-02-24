let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;



function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    } else {
        //Si el numero generado está incluido en la lista 
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números 
    //Generar el número aleatorio
    //Inicializar el número intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

condicionesIniciales();

let listaCompras = [];

listaCompras.push("Manzana");//push agrega el elemnto al final
listaCompras.push("Arroz");
listaCompras.push("Leche");
listaCompras.push("Pan");
listaCompras.push("Carne");
listaCompras.push("Avena");

console.log(listaCompras); // ['Manzana', 'Arroz', 'Leche', 'Pan', 'Carne', 'Avena']
console.log(listaCompras.length);//6
console.log(listaCompras[0]);//Manzana
console.log(listaCompras[listaCompras.length - 1]);//ultimo elemento

let numeroLimite = 10; // Supongamos que hay 10 libros disponibles
let listaDeLibrosSorteados = []; // Array para llevar un registro de los libros seleccionados

function sortearLibro() {
    let libroElegido = parseInt(Math.random() * numeroLimite + 1);
    let cantidadDeLibrosSorteados = listaDeLibrosSorteados.length;

    // Reiniciar la lista de libros seleccionados si todos los libros han sido seleccionados
    if (cantidadDeLibrosSorteados == numeroLimite) {
        listaDeLibrosSorteados = [];
    }

    // Comprobar si el libro seleccionado aleatoriamente ya ha sido seleccionado
    while (listaDeLibrosSorteados.includes(libroElegido)) {
        libroElegido = parseInt(Math.random() * numeroLimite + 1);
    }

    // Agregar el libro seleccionado a la lista de libros seleccionados
    listaDeLibrosSorteados.push(libroElegido);

    // Imprimir el libro seleccionado en la consola
    console.log("Libro seleccionado:", libroElegido);

    // Retornar el ID del libro seleccionado
    return libroElegido;
}

// Llamar a la función sortearLibro() e imprimir el resultado en la consola
let libroSeleccionado = sortearLibro();
console.log("El libro seleccionado es:", libroSeleccionado);



let frutas = ["Manzana", "Uva", "Naranja"];
console.log(frutas[0]); // Salida: "Manzana"
console.log(frutas[2]); // Salida: "Naranja"
//Añade nuevos elementos
frutas.push("Fresa");
console.log(frutas); // Salida: ["Manzana", "Uva", "Naranja", "Fresa"]
//Rlimina ultimo elemento
frutas.pop();
console.log(frutas); // Salida: ["Manzana", "Uva", "Naranja"]

//DESAFIO
//Crea una lista vacía con el nombre listaGenerica.
let listaGenerica = [];
console.log(listaGenerica);
//Crea una lista de lenguajes de programación llamada lenguagesDeProgramacion.
let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
console.log(lenguagesDeProgramacion);
//Agrega a la lista lenguagesDeProgramacion los siguientes elementos.
lenguagesDeProgramacion.push('Java', 'Ruby', 'GoLang');
console.log(lenguagesDeProgramacion);
//Crea una función que muestre en la consola todos los elementos de la lista
// lenguagesDeProgramacion por separado.
function mostrarLenguagesSeparadamente() {
  for (let i = 0; i < lenguagesDeProgramacion.length; i++) {
    console.log(lenguagesDeProgramacion[i]);
  }
}

mostrarLenguagesSeparadamente();
//Crea una función que muestre en la consola todos los elementos de la lista
// lenguagesDeProgramacion de manera inversa.
function mostrarLenguagesReversoSeparadamente() {
  for (let i = lenguagesDeProgramacion.length - 1; i >= 0; i--) {
    console.log(lenguagesDeProgramacion[i]);
  }
}

mostrarLenguagesReversoSeparadamente();
//Crea una función que calcule la media de los elementos en una lista de números.
function calcularMedia(lista) {
  let suma = 0;
  for (let i = 0; i < lista.length; i++) {
    suma += lista[i];
  }
  return suma / lista.length;
}

let numeros = [10, 20, 30, 40, 50];
let media = calcularMedia(numeros);
console.log('Média:', media);
//Crea una función que muestre en la consola el 
//número mayor y menor en una lista.
function encontrarMayorMenor(lista) {
  let mayor = lista[0];
  let menor = lista[0];

  for (let i = 1; i < lista.length; i++) {
    if (lista[i] > mayor) {
      mayor = lista[i];
    }
    if (lista[i] < menor) {
      menor = lista[i];
    }
  }

  console.log('Mayor:', mayor);
  console.log('Menor:', menor);
}

let Numeros = [15, 8, 25, 5, 12];
encontrarMayorMenor(Numeros);
//Crea una función que retorne la suma 
//de todos los elementos en una lista.
function calcularSuma(lista) {
  let suma = 0;
  for (let i = 0; i < lista.length; i++) {
    suma += lista[i];
  }
  return suma;
}

let numeroS = [15, 8, 25, 5, 12];
let suma = calcularSuma(numeroS);
console.log('Suma:', suma);

//Crea una función que reciba una lista como parámetro 
//y retorne el índice de un elemento también pasado como parámetro.
//Si ese elemento no existe en la lista, retorna - 1.
 
function encontrarIndiceElemento(lista, elemento) {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] === elemento) {
      return i; // Retorna el índice del elemento encontrado
    }
  }
  return -1; // Retorna -1 si el elemento no se encuentra en la lista
}

let lista = [10, 20, 30, 40, 50];
let elemento = 30;

let indice = encontrarIndiceElemento(lista, elemento);
console.log("El índice del elemento", elemento, "es:", indice);
