let suma = 0;
let numero = prompt("Introduce un numero");
    if (Number(numero) == numero) {
        numero = Number(numero);
        suma = suma + numero;
    }
    else {
        if (numero != undefined) {
            alert(numero + " No es un numero");
        }
    }
document.write(suma);
    
