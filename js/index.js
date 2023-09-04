
function somar() {
    var soma1 = parseInt(document.getElementById("soma1").value);
    var soma2 = parseInt(document.getElementById("soma2").value);

    var resultado = soma1 + soma2;

    document.getElementById("resultadoSoma").value = resultado;
}

function limparSoma() {
    document.getElementById("soma1").value = "";
    document.getElementById("soma2").value = "";

    document.getElementById("resultadoSoma").value = "";
}

function subtrair() {
    var subtracao1 = parseInt(document.getElementById("subtracao1").value);
    var subtracao2 = parseInt(document.getElementById("subtracao2").value);

    var resultado = subtracao1 - subtracao2;

    document.getElementById("resultadoSubtracao").value = resultado;
}

function limparSubtracao() {
    document.getElementById("subtracao1").value = "";
    document.getElementById("subtracao2").value = "";

    document.getElementById("resultadoSubtracao").value = "";
}

function multiplicar() {
    var multiplicacao1 = parseInt(document.getElementById("multiplicacao1").value);
    var multiplicacao2 = parseInt(document.getElementById("multiplicacao2").value);

    var resultado = multiplicacao1 * multiplicacao2;

    document.getElementById("resultadoMultiplicacao").value = resultado;
}

function limparMultiplicacao() {
    document.getElementById("multiplicacao1").value = "";
    document.getElementById("multiplicacao2").value = "";
    
    document.getElementById("resultadoMultiplicacao").value = "";
}

function dividir() {
    var divisao1 = parseInt(document.getElementById("divisao1").value);
    var divisao2 = parseInt(document.getElementById("divisao2").value);

    var resultado = divisao1 / divisao2;

    document.getElementById("resultadoDivisao").value = resultado;
}

function limparDividir() {
    document.getElementById("divisao1").value = "";
    document.getElementById("divisao2").value = "";
    
    document.getElementById("resultadoDivisao").value = "";
}