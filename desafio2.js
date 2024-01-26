function helloWorld(texto){
    console.log("¡Hola, " + texto + "!");
}
function pideNumeros(textoP){
    return parseInt(prompt(`Dame el numero ${textoP}`))
}

function duplicaNumero(numero1) {
    return numero1 * 2;
}

function promedioDeTres(numero1,numero2,numero3) {
    alert(`El promedio de ${numero1}, ${numero2} y ${numero3} es ${ (numero1 + numero2 + numero3) / 3}.`);
}

function mayorDeDos(numero1,numero2){
    if(numero1 > numero2){
        alert(`${numero1} es mas grande que ${numero2}`);
    } else if(numero1 < numero2){
        alert(`${numero2} es mas grande que ${numero1}`);
    } else {
        alert("Son iguales");
    }
}

function cuadrado(numero) {
    alert(`El ${numero} multiplicado por si mismo es: ${numero * numero}`);
}

helloWorld('Mundo');

helloWorld(prompt('Dame tu nombre:'));

alert(duplicaNumero(pideNumeros('a duplicar')));

promedioDeTres(pideNumeros(1),pideNumeros(2),pideNumeros(3));

mayorDeDos(pideNumeros("1 para compararlo con otro"),pideNumeros(" 2 y te digo cual es mayor"));

cuadrado(pideNumeros(" a elevar a cuadrado"));

