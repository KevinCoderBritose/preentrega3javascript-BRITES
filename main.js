function calcularResultado(operacion, numero1, numero2) {
    switch (operacion) {
        case "suma":
            return numero1 + numero2;
        case "resta":
            return numero1 - numero2;
        case "multiplicacion":
            return numero1 * numero2;
        case "division":
            return numero2 !== 0 ? numero1 / numero2 : "Error: División por cero";
        default:
            return "Operación no válida";
    }
}

function mostrarResultados(resultados) {
    const resultadosDiv = document.getElementById("resultados");
    resultadosDiv.innerHTML = `<p>Resultado: ${resultados}</p>`;
}

function guardarResultadoEnStorage(resultado) {
    const resultadosGuardados = JSON.parse(localStorage.getItem("resultados")) || [];
    resultadosGuardados.push(resultado);
    localStorage.setItem("resultados", JSON.stringify(resultadosGuardados));
}

function mostrarResultadosGuardados() {
    const resultadosGuardados = JSON.parse(localStorage.getItem("resultados"));
    if (resultadosGuardados) {
        const resultadosDiv = document.getElementById("resultados");
        resultadosDiv.innerHTML = "<h2>Resultados Guardados</h2>";
        resultadosGuardados.forEach((resultado, index) => {
            resultadosDiv.innerHTML += `<p>Resultado ${index + 1}: ${resultado}</p>`;
        });
    }
}

function handleCalcular(operacion) {
    const numero1 = parseFloat(document.getElementById("numero1").value);
    const numero2 = parseFloat(document.getElementById("numero2").value);

    if (!isNaN(numero1) && !isNaN(numero2)) {
        const resultado = calcularResultado(operacion, numero1, numero2);
        mostrarResultados(resultado);
        guardarResultadoEnStorage(resultado);
        mostrarResultadosGuardados();
    } else {
        alert("Ingresa números válidos.");
    }
}

document.getElementById("calcularSuma").addEventListener("click", () => handleCalcular("suma"));
document.getElementById("calcularResta").addEventListener("click", () => handleCalcular("resta"));
document.getElementById("calcularMultiplicacion").addEventListener("click", () => handleCalcular("multiplicacion"));
document.getElementById("calcularDivision").addEventListener("click", () => handleCalcular("division"));

mostrarResultadosGuardados();