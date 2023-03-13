let numrepeticion = prompt("Introduce numero de repeticiones")
if (Number(numrepeticion) == numrepeticion) {
    
    if (numrepeticion > 0 && numrepeticion <= 50) {
        let rep,i;
        for (i = 0; i <=numrepeticion; i++) {
            //BUCLE DESDE 1 HASTA i
            for (rep = 1; rep <= i; rep++) {
                document.write(rep)
            }
            document.write("<br>")
        }
    } 
    else {
        alert("El número introducido no es válido")
    }
} 
else {
    alert("No has introducido un número")
}