let listaGenerica = [];
let lenguajesDeProgramacion = [ 'JavaScript', 'C', 'C++', 'Kotlin','Python'];

function agregarElemento(lista,dato){
    lista.push(dato);
    return;
 }

 function mostrarElementos(lista) {
    console.log("Los elementos de la lista son:");
    lista.forEach((Element) => console.log(Element));
    return;
 }

function ordenInverso(lista){
    console.log("Los elementos de la lista en orden inverso son:");
    let indice = lista.length;
    for (let indice = lista.length-1; indice >= 0; indice--) {
        console.log(lista[indice]);
    }
    return;
}

function promedioDeLista(numeros){
    let suma = 0;
    numeros.forEach(element => { 
        suma = suma + element;
    });

    console.log(`El promedio de ${numeros} es: ${suma / numeros.length}`);
    return;
}

function elMasGrade(numeros) {
    elMayor = numeros[0];
    elMenor = numeros[0];
    numeros.forEach(element => {
        if(element >= elMayor){
            elMayor = element;
        }
        if(element <= elMenor){
            elMenor = element;
        }
    });
    console.log(`En la lista: ${numeros} \nEl numero más grande es: ${elMayor}\n y el más pequeño es: ${elMenor}`);
    return;
}

function sumarTodos(lista){
    suma = 0;
    lista.forEach(element => suma += element);

    console.log(`La suma de ${lista} es: ${suma}`);
}

function encontrarElemento(lista,valorBuscado){
    let bandera = 0;
    
    for (let bandera = 0; bandera < lista.length; bandera++) {
        if(lista[bandera] == valorBuscado){
            console.log(`El valor ${valorBuscado} esta en el indice ${bandera} de la lista`);
            return;
        }    
    }
    console.log("El valor no se encontró");
    return;
}

function sumaParalela(lista1, lista2) {
    let = listasSumadas = [];

    for (let index = 0; index < lista1.length; index++) {
        listasSumadas.push(lista1[index] + lista2[index]);        
    }
    console.log(`La suma de ${lista1} + ${lista2} es ${listasSumadas}`);
    return;
}

function cuadradoLista(lista){
    let = listaDeCuadrados = [];

    for (let index = 0; index < lista.length; index++) {
        listaDeCuadrados.push(lista[index] ** 2);
    }
    console.log(`La lista ${lista} elevada al cuadrado es: ${listaDeCuadrados}`);
}



console.log(listaGenerica);
mostrarElementos(lenguajesDeProgramacion);
encontrarElemento(lenguajesDeProgramacion,'Java');

agregarElemento(lenguajesDeProgramacion,'Java');
agregarElemento(lenguajesDeProgramacion,'Ruby');
agregarElemento(lenguajesDeProgramacion,'GoLang');

mostrarElementos(lenguajesDeProgramacion);

ordenInverso(lenguajesDeProgramacion);
promedioDeLista([10,5,7]);

elMasGrade([10,5,7,20,35,17,-5,-8,0]);
sumarTodos([10,5,7]);

encontrarElemento(lenguajesDeProgramacion,'Java');

sumaParalela([5,4,3,2,1],[0,9,8,7,6]);

cuadradoLista([2,3,4,5,6,7,8]);

