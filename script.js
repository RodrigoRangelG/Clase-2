var numeroSecreto = 90;
var contador=0;
while (numeroSecreto != numeroDigitado) {
    contador++;
    var numeroDigitado = prompt("Ingresa un número entre 1 y 1000");

    if (numeroSecreto == numeroDigitado) 
        alert("Acertaste\nIntentos: "+contador);
    else if (numeroSecreto > numeroDigitado)
        alert("Te equivocaste.. el número secreto es mayor que: "+numeroDigitado+"\nIntentos: "+contador);
    else if (numeroSecreto < numeroDigitado)
        alert("Te equivocaste.. el número secreto es menor que: "+numeroDigitado+"\nIntentos: "+contador);
}