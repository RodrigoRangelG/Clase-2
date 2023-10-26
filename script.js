var numeroSecreto = 90;

while (numeroSecreto != numeroDigitado) {
    var numeroDigitado = prompt("Ingresa un número entre 1 y 1000");

    if (numeroSecreto == numeroDigitado) 
        alert("Acertaste");
    else if (numeroSecreto > numeroDigitado)
        alert("Te equivocaste.. el número secreto es mayor que: "+numeroDigitado);
    else if (numeroSecreto < numeroDigitado)
        alert("Te equivocaste.. el número secreto es menor que: "+numeroDigitado);
}