function IMC(altura, peso){
    alert(`Tu IMC es de ${peso / altura**2}`);
    return;
}

function factorial(numero){
    if(numero > 1){
        return numero * factorial(numero - 1);
    }
    else{
        return 1;
    }
}

function aPesoMexicano(dinero){
    return dinero * 18;
}

function areaPerimetroRectangulo(largo, ancho){
    alert(`El área de la sala es ${largo * ancho} m2 y el perimetro es ${(largo + ancho) * 2} m.`);
    return;
}

function areaPerimetroCirculo(radio){
    let pi = 3.14;
    alert(`El área del circulo es ${ pi * radio ** 2} m2 y el perimetro es ${radio * 2 * pi} m.`);
    return;
}

function tablaMultiplicar(numero){
    let contador = 1;
    let tabla = ""
    while(contador <= 10){
        tabla = tabla + `${numero} * ${contador} = ${numero * contador++} \n`;
    }
    alert(tabla);
    return;
}

function seleccionarFuncion(){
    let continuar = 1;
    

    while (continuar === 1){

        let opcion = parseInt(prompt("Ingresa la función que quieres escoger \n 1. IMC\n 2. Factorial \n 3. Convertir a pesos mexicanos \n 4. Area de un Rectangulo \n 5. Area de un circulo \n 6. Tabla de multiplicar"));
        switch(opcion){
            case 1:
                IMC(parseFloat(prompt("Ingresa tu altura")),parseFloat(prompt("Ingresa tu peso")));
                break;
            case 2:
                let numero = parseInt(prompt("Ingresa el numero del cual calcularemos el factorial: "));
                alert(`El factorial de ${numero} es ${factorial(numero)}`);
                break;
            case 3:
                alert(`Son \$ ${aPesoMexicano(parseFloat(prompt("Ingresa el monto en USD a convertir a MX")))} Pesos Mexicanos.`);
                break;
            case 4:
                areaPerimetroRectangulo(parseFloat(prompt("Ingresa el largo de la sala: ")),parseFloat(prompt("Ingresa el ancho de la sala: ")));
                break;
            case 5:
                areaPerimetroCirculo(parseFloat(prompt("Ingresa el radio del Circulo: ")));
                break;
            case 6:
                tablaMultiplicar(parseInt(prompt("La taba de que numero quieres?")));
                break;
            default:
                prompt("Che, eso no existe, selecciona una opción valida:");
        }

        continuar = parseInt(prompt("¿Quiere probar otra función?\n  SI ingresa 1 \n NO ingresa 0"));
    }

    
}  



seleccionarFuncion();