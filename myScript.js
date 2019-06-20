//myScript.js
$.get("tabela.csv", function(CSVdata) {
    // CSVdata is populated with the file contents
    // ready to be converted into an Array
    data = $.csv.toArrays(CSVdata);
});

var gradient = new Array();
gradient[0] = 'linear-gradient(to right, rgba(77,255,106,1) 0%, rgba(10,255,51,1) 100%)';//Nonmetal
gradient[1] = 'linear-gradient(to right, rgba(255,166,77,1) 0%, rgba(255,133,10,1) 100%)';//Alcalinos
gradient[2] = 'linear-gradient(135deg, rgba(225,218,117,1) 0%, rgba(232,177,89,1) 100%)';//Alcalino Terroso
gradient[3] = 'linear-gradient(to right, rgba(255,77,249,1) 0%, rgba(255,10,247,1) 100%)';//lantanoid
gradient[4] = 'linear-gradient(to right, rgba(198,77,255,1) 0%, rgba(177,10,255,1) 100%)';//actinoide
gradient[5] = 'linear-gradient(to right, rgba(94,77,255,1) 0%, rgba(35,10,255,1) 100%)';//transição metal
gradient[6] = 'linear-gradient(to right, rgba(77,157,255,1) 0%, rgba(10,120,255,1) 100%)';//pos transicao
gradient[7] = 'linear-gradient(135deg, rgba(78,193,106,1) 0%, rgba(65,200,55,1) 100%';//semi
gradient[8] = 'radial-gradient(ellipse at center, rgba(212,228,239,1) 0%, rgba(134,174,204,1) 100%)';//nobre

function trocaCss(elemento){
    tipo = 0;
    if (data[elemento][15] == "Nonmetal"){
        tipo = 0;
    }else if
    (data[elemento][15] == "Halogen"){
        tipo = 0;
    }else if
    (data[elemento][15] == "Alkali Metal"){
        tipo = 1;
    }else if
    (data[elemento][15] == "Alkaline Earth Metal"){
        tipo = 2;
    }else if
    (data[elemento][15] == "Lanthanide"){
        tipo = 3;
    }else if
    (data[elemento][15] == "Actinide"){
        tipo = 4;
    }else if
    (data[elemento][15] == "Metal"){
        tipo = 5;
    }else if
    (data[elemento][15] == "Transition Metal"){
        tipo = 5;
    }else if
    (data[elemento][15] == "Metalloid"){
        tipo = 7;
    } else if
    (data[elemento][15] == "Noble Gas"){
        tipo = 8;
    }
    


    $('#divPrincipal').css({'background': gradient[tipo]});
}

function sorteiaElemento() {
    var min = 1;
    var max = 118;
    var elementoN = Math.floor(Math.random() * (+max - +min) + +min);
    console.log(elementoN)
    return elementoN;
}

function printElemento(elemento){
    console.log(data[elemento]);
}

function getElemento(numeroE, info){
    return data[numeroE][info];
}

function modoFacil(){
    elemento = sorteiaElemento();
    console.log(elemento);
    console.log(data[elemento]);
    $('#numero_atomico').text(data[elemento][0]);
    $('#massa_atomica').text(data[elemento][3]);
    $('#nome').text(data[elemento][1]);
    $('#estado_natural').text(data[elemento][9]);
    $('#tipo').text(data[elemento][15]);
    trocaCss(elemento)
}

function mudarNatomico() {
    var p1 = document.getElementById("p1");
    p1.innerHTML = "Mudando N° atomico.";

    document.getElementById("numero_atomico").style.display = "none";
    document.getElementById("inpNatomico").style.display = "block";
    document.getElementById("btnNatomico").style.display = "block";
}


function mudarNatomico1() {

    var conteudo = document.getElementById("inpNatomico").value;

    document.getElementById("inpNatomico").style.display = "none";
    document.getElementById("btnNatomico").style.display = "none";
    document.getElementById("numero_atomico").style.display = "block";

    document.getElementById("numero_atomico").innerHTML = conteudo;
}

function mudarMatomica() {
    var p1 = document.getElementById("p1");
    p1.innerHTML = "Mudando Massa atomica.";

    document.getElementById("massa_atomica").style.display = "none";
    document.getElementById("inpMatomica").style.display = "block";
    document.getElementById("btnMatomica").style.display = "block";
}

function mudarMatomica1() {

    var conteudo = document.getElementById("inpMatomica").value;

    document.getElementById("inpMatomica").style.display = "none";
    document.getElementById("btnMatomica").style.display = "none";
    document.getElementById("massa_atomica").style.display = "block";

    document.getElementById("massa_atomica").innerHTML = conteudo;
}

function mudarSimbolo() {
    var p1 = document.getElementById("p1");
    p1.innerHTML = "Mudando Simbolo Químico.";

    document.getElementById("simbolo_quimico").style.display = "none";
    document.getElementById("inpSimbolo").style.display = "block";
    document.getElementById("btnSimbolo").style.display = "block";
}

function mudarSimbolo1() {

    var conteudo = document.getElementById("inpSimbolo").value;

    document.getElementById("inpSimbolo").style.display = "none";
    document.getElementById("btnSimbolo").style.display = "none";
    document.getElementById("simbolo_quimico").style.display = "block";

    document.getElementById("simbolo_quimico").innerHTML = conteudo;
}

function mudarNome() {
    var p1 = document.getElementById("p1");
    p1.innerHTML = "Mudando nome do elemnto Químico.";

    document.getElementById("nome").style.display = "none";
    document.getElementById("inpNome").style.display = "block";
    document.getElementById("btnNome").style.display = "block";
}

function mudarNome1() {

    var conteudo = document.getElementById("inpNome").value;

    document.getElementById("inpNome").style.display = "none";
    document.getElementById("btnNome").style.display = "none";
    document.getElementById("nome").style.display = "block";

    document.getElementById("nome").innerHTML = conteudo;
}

function mudarEstado() {
    var p1 = document.getElementById("p1");
    p1.innerHTML = "Mudando Estado Químico.";

    document.getElementById("estado_natural").style.display = "none";
    document.getElementById("inpEstado").style.display = "block";
    document.getElementById("btnEstado").style.display = "block";
}

function mudarEstado1() {

    var conteudo = document.getElementById("inpEstado").value;

    document.getElementById("inpEstado").style.display = "none";
    document.getElementById("btnEstado").style.display = "none";
    document.getElementById("estado_natural").style.display = "block";

    document.getElementById("estado_natural").innerHTML = conteudo;
}

function mudarTipo() {
    var p1 = document.getElementById("p1");
    p1.innerHTML = "Mudando Tipo (metal ou não metal).";

    document.getElementById("tipo").style.display = "none";
    document.getElementById("inpTipo").style.display = "block";
    document.getElementById("btnTipo").style.display = "block";
}

function mudarTipo1() {

    var conteudo = document.getElementById("inpTipo").value;

    document.getElementById("inpTipo").style.display = "none";
    document.getElementById("btnTipo").style.display = "none";
    document.getElementById("tipo").style.display = "block";

    document.getElementById("tipo").innerHTML = conteudo;
}