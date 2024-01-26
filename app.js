/* Así quedo en la primera sesión XD
// Este método(querySelector) permite traer un elemento del html
// este tiene una estructura más compleja que una variable
let titulo = document.querySelector('h1');
// El innerHTML nos permite colocar un valor en el Objeto
titulo.innerHTML = 'Juego del numero secreto'

let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Indica un número del 1 al 10'

// En este caso se esta declarando una función, la estructura es como se describe
// a continuación.
function intentoUsuario(){
    alert("Presionaste el botón verdad?");
} */

//Una mejor forma de ejecutar lo anterior es:
//Si bien es cierto que no necesitamos iniciar las variables numeroSecreo e intentos
// ya que estas se asignaran en la llamada a la funcion condicionesIniciales, 
// es una buena practica hacerlo.
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;


//Con esta función básicamente cambiamos el atributo de texto de los elementos en HTML desde JS
function asignarTextoElemento(elemento, texto){
    
    //document: hace referencia a la página web HTML (DOM)
    //querySelector es el método para seleccionar el tag que reemplazaremos en el HTML
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}


//genera un número entre 1 y 10
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo) + 1;
    
    //Preguntamos ya todos los números?
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Lo siento, ya se sortearon todos los numeros. Presiona F5 para volver a comenzar.');
    } else{
    
        //Si el numero generado ya esta en la lista volvemos a generar
        if(listaNumerosSorteados.includes(numeroGenerado)){
        //Esto es recursividad, podemos volver a llamar la función hasta cumplir con la condición
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

//Comprobamos si el valor dado por el usuario es el correcto
function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    console.log(intentos);
    console.log(listaNumerosSorteados)
    if(numeroUsuario == numeroSecreto){
        //Genera la cadena de texto usando template Strings
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}.`);
        //habilitamos el botón reinicar eliminando el atributo desactivado
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //Si no atina
         if (numeroUsuario >= numeroSecreto){
            asignarTextoElemento('p','El numero secreto es menor');
        } else {
        asignarTextoElemento('p','El numero secreto es mayor');
        }
        limpiarCaja();
    }
    intentos++;
}
//Esta función reiniciará el juego a las condiciones iniciales
function condicionesIniciales(){
    asignarTextoElemento('h1','Jugandose la vida');
    asignarTextoElemento('p',`Ingresa un numero del 1 al ${numeroMaximo}`);  
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);

}
function limpiarCaja(){
    //Cuando quieras seleccionar un id desde querySelector necesitas agregar el #identificador
    document.querySelector('#valorUsuario').value ='';
}

function reiniciarJuego(){
    //Limpiar caja
    limpiarCaja();
    //Indicar mensaj de intervalo de numeros
    //generar numero aleatorio
    //Inicializar el numero de intentos
    condicionesIniciales();
    //desabilitar el botón de nuevo juego
    document.getElementById('reiniciar').setAttribute('disabled','True');
    
}

numeroMaximo = parseInt(prompt('¿Cuál deseas que sea el número máximo en el juego?'));
condicionesIniciales();

