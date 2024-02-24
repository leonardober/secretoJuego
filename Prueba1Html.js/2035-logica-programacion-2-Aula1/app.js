//let parrafo = document.querySelector('p');
//parrafo.innerHTML = 'Digite un numero entre 1 y 10';

//Creamos una sola funcion con la variable dentro

/*let h2 = document.querySelector('h2');
h2.innerHTML = 'Has agregado una nueva canción!'*/
let numeroSecreto = generarNumeroSecreto();


function asignarTextoElemento(elemento,texto) {
//let titulo = document.querySelector('h1');//variable elemento html h1
let elementoHTML = document.querySelector(elemento);
    //titulo.innerHTML = 'Juego del Numero Secreto';//texto
    elementoHTML.innerHTML = texto;
    return;
}

function generarNumeroSecreto() {
   // let numeroSecreto = Math.floor(Math.random() * 10) + 1; //genera numero entero Aleatorio incluido 10
    return Math.floor(Math.random() * 10) + 1;;
}

//Declaracion de la funcion
//parseInt convierte  string a int
function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(typeof (numeroUsuario));//string
    console.log(numeroUsuario)
    console.log(numeroSecreto);
    console.log(typeof(numeroSecreto));//number
    console.log(numeroSecreto === numeroUsuario); //compara value y type
    alert('¡Hola, clic desde el botón!')
    return ;
}

function verificarNumero(numero) {
  if (numero > 0) {
    console.log("El número es positivo.");
  } else if (numero < 0) {
    console.log("El número es negativo.");
  } else {
    console.log("El número es zero.");
  }
}



verificarNumero()
verificarIntento()
asignarTextoElemento('h1', 'Juego del Numero Secreto!');
asignarTextoElemento('p', 'Digite un numero entre 1 y 100');

//Desafio
//Crear una función que muestra "¡Hola, mundo!" en la consola.
function mostrarHola() {
  console.log("¡Hola, mundo!");
}

mostrarHola();

// recibe un nombre como parámetro y muestra "¡Hola, [nombre]!" en la consola
function mostrarHolaNombre(nombre) {
  console.log(`¡Hola, ${nombre}!`);
}

mostrarHolaNombre("Alice");


//recibe un número como parámetro y devuelve el doble de ese número.
function calcularDoble(numero) {
  return numero * 2;
}

let resultadoDoble = calcularDoble(5);
console.log(resultadoDoble);

//recibe dos números como parámetros y devuelve el mayor de ellos.
function encontrarMayor(a, b) {
  return a > b ? a : b;
}

let numeroMayor = encontrarMayor(15, 9);
console.log(numeroMayor);

//recibe un número como parámetro y devuelve el resultado de multiplicar ese número por sí mismo.
function cuadrado(numero) {
  return numero * numero;
}

let resultado = cuadrado(2);
console.log(resultado);