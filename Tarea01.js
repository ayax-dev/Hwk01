//1. Dada una frase, retornar si se trata o no de un palíndromo.
function esPalindromo(frase){
    for (let i=0; i<=frase.length/2; i++){
            if(frase.charAt(i) != frase.charAt((frase.length-1)-i)){
                    console.log(frase + " NO es palíndromo");
                    return;
            }
    }
    console.log(frase + " ES palíndromo");
}
//Llamada a función esPalindromo
esPalindromo("101240101");
esPalindromo("101040101");

//2. Dado un número, retornar si se trata de un número primo
function esPrimo(n){
    for (let i=2; i<=n**.5; i++){
        if (n%i==0) {
            console.log(n, " NO es primo");
            return;
        }
    }
    console.log(n, " ES primo");
    return;
}
console.log();
//Llamada a función esPrimo
esPrimo(23*57);
esPrimo(9601);

//3. Escribir el código para ordenar de forma ascendente un arreglo de
//números utilizando el algoritmo Bubble-Sort
function Bubble_Sort(l){
    for (let i=0; i<l.length-1; i++){
        for(let j=0; j<l.length-1; j++){
            if (l[j]>=l[j+1]){
                let temp = l[j];
                l[j] = l[j+1];
                l[j+1] = temp;
            }
        }
    }
}
//Llamada a función Bubble sort
l = [31, 11, 44, 12, 96, 6]
Bubble_Sort(l);
console.log("\nDespués de llamada a Bubble sort: "+l);

//4.Dado un número n, imprimir un cuadrado
function cuadrado(n){
    for (let i=1; i<=2*n-1; i++){
        console.log((Math.abs((n-i))+1).toString().repeat(n));
    }
}
//Llamada a función cuadrado
console.log();
cuadrado(3);
console.log();
cuadrado(5);
