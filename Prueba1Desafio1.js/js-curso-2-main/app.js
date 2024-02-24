
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora del Desafío';

function mostarMensajeEnLaConsola() {
    console.log('El botón fue clickado!')
}

function mostrarAlerta() {
    let ciudad = prompt("Por favor, ingresa el nombre de una ciudad de Brasil:");
    alert("Estuve en " + ciudad + " y me acordé de ti.");
}

function mostarAlerta(){
    alert("AMO JS");
} 
function sumaDosNumeros() {
    let primerNumero = parseInt(prompt('Digite el primer numero'));
    let segundoNumero = parseInt(prompt('Digite el segundo numero'));
    let resultado = primerNumero + segundoNumero;
    alert(`${primerNumero} + ${segundoNumero} = ${resultado}`);
}

sumaDosNumeros(); // Llamar a la función para que se ejecute

//DESAFIO 2
//Crear una función que muestra "¡Hola, mundo!" en la consola.
function mostrarHola() {
  console.log("¡Hola, mundo!");
}

mostrarHola();

//Crear una función que recibe un nombre como parámetro y muestra "¡Hola, [nombre]!" en la consola.
function mostrarHolaNombre(nombre) {
  console.log(`¡Hola, ${nombre}!`);
}

mostrarHolaNombre("Alice");