let numeroSecreto = generarNumeroSecreto();//declarar la variable
let intentos = 0; //contador

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(numeroSecreto);
    console.log(intentos)
    
    if (numeroDeUsuario === numeroSecreto) {
        //operador ternario ` `alt+96   ?=if   := else
        asignarTextoElemento('p', `Acertaste el número! en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`)
        //console.log('Acertaste el número!');

        //activamos boton nuevo juego por Id
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El numero Secreto es Menor!')
        }else{
            asignarTextoElemento('p', 'El numero Secreto es Mayor!')
        }

        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    //(document.getElementById('valorUsuario').value);  es otra 1a opcion o sino..
   // let valorCaja = document.querySelector('#valorUsuario'); //2a opcion
    //valorCaja.value = '';
    document.querySelector('#valorUsuario').value = '';  // 3a otra opcion

    
}
function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto!');//titulo
    asignarTextoElemento('p', `Indica un número del 1 al 10`);//intervalo
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de inicio intervalo numeros
    //generar numero aleatorio
    //inicializar numero de intentos
    condicionesIniciales();
    //deshabilitar boton denuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}
condicionesIniciales();

function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;

}

function calcularDoble(numero) {
  return numero * 2;
}

function calcularTriple(numero) {
  return numero * 3;
}

const numero = 5;
const doble = calcularDoble(numero);
const triple = calcularTriple(numero);

console.log(`El doble de ${numero} es ${doble} y el triple es ${triple}.`);


const nombre = "Juan";
const edad = 30;
const mensaje = `Hola, soy ${nombre} y tengo ${edad} años.`;
console.log(mensaje);

// Salida: Hola, soy Juan y tengo 30 años.



let nota1 = 7;
let nota2 = 6;
let nota3 = 3;
let nota4 = 5;

function calcularPromedio(nota1, nota2, nota3, nota4){
        let promedio = (nota1 +  nota2 +  nota3 +  nota4)/4
        return promedio;
}

function verificarAprobacion(promedio){
    return promedio >= 5 ? "Aprobado" : "Reprobado";
}

let Nota1 = 7;
let Nota2 = 6;
let Nota3 = 3;
let Nota4 = 5;

let promedio = calcularPromedio(nota1, nota2, nota3, nota4);
let Resultado = verificarAprobacion(promedio);

console.log("Promedio:", promedio);
console.log("Resultado:", Resultado);


//DESAFIO3
//.Crea una función que calcule el índice de masa corporal (IMC) de una persona
// a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.
let Altura = 1.75; // in meters
let peso = 74; // in kilograms

// Call the function and store the result in a variable
let imc = calcularIMC(Altura, peso);

// Display the calculated BMI
console.log("IMC:", imc);


function calcularIMC(altura, peso) {
  // Calculate BMI using the formula: weight (kg) / (height (m) * height (m))
  let imc = peso / (altura * altura);
  // Return the calculated BMI
  return imc;
}



//Crea una función que calcule el valor del factorial de un número 
//pasado como parámetro.
function calcularFactorial(Numero) {
  if (Numero === 0 || Numero === 1) {
    return 1;
  } else {
    return Numero * calcularFactorial(Numero - 1);
  }
}


// Ejemplo de uso
let Numero = 5;
let resultado = calcularFactorial(Numero);
console.log(`El factorial de ${Numero} es ${resultado}`);

//Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor
// equivalente en reales.Para esto, considera la cotización del dólar igual a R$4, 80.

function convertirDolaresAReales(dolares) {
  var cotizacionDolar = 4.80;
  var reales = dolares * cotizacionDolar;
  return reales;
}
// Ejemplo de uso
let valorEnDolar = 50;
let valorEnReales = convertirDolaresAReales(valorEnDolar);
console.log(`${valorEnDolar} dólares  es R$ ${valorEnReales}`);


//Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular,
// utilizando la altura y la anchura que se proporcionarán como parámetros.
function calcularAreaYPerimetroRectangular(altura, anchura) {
  var area = altura * anchura;
  var perimetro = 2 * (altura + anchura);
  console.log("Área: " + area);
  console.log("Perímetro: " + perimetro);
}
// Ejemplo de uso
let altura = 3; // en metros
let anchura = 5; // en metros
calcularAreaYPerimetroRectangular(altura, anchura);


//Crea una función que muestre en pantalla el área y el perímetro de una sala circular,
// utilizando su radio que se proporcionará como parámetro.Considera Pi = 3, 14.
function calcularAreaYPerimetroCircular(radio) {
  let pi = 3.14;
  let area = pi * radio * radio;
  let perimetro = 2 * pi * radio;
  console.log("Área: " + area);
  console.log("Perímetro: " + perimetro);
}
// Ejemplo de uso
let radio = 4; // en metros
calcularAreaYPerimetroCircular(radio);


//Crea una función que muestre en pantalla la tabla de multiplicar
// de un número dado como parámetro.

function mostrarTablaDeMultiplicar(numeral) {
  for (let i = 1; i <= 10; i++) {
    let resultado = numeral * i;
    console.log(numeral + " x " + i + " = " + resultado);
  }
}
// Ejemplo de uso
let numeral = 7;
mostrarTablaDeMultiplicar(numeral);

