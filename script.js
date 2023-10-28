function calcular() {
    var materia = document.getElementById("seletor_materia").value;
    var ap1 = parseFloat(document.getElementById("ap1").value);
    var ap2 = parseFloat(document.getElementById("ap2").value);
    var ac = parseFloat(document.getElementById("ac").value);
    var faltas = parseFloat(document.getElementById("faltas").value);
  
    resultado = ap1 + ap2 + ac;

    var resultElementIds = {
        materia1: "notafinal1",
        materia2: "notafinal2",
        materia3: "notafinal3",
        materia4: "notafinal4"
    };

    if (faltas > 25){
        displayResult(resultElementIds[materia], "Reprovado por falta", "red");
    }
    else if(resultado >= 70){
        displayResult(resultElementIds[materia], "Aprovado com a nota: " + resultado, "green");
    }
    else if(resultado < 70){
        displayResult(resultElementIds[materia], "Reprovado com a nota: " + resultado, "red");
    }
    else{
        displayResult(resultElementIds[materia], "Erro", "black");
    }

    if (materia == "materia1"){
        var nota_ap1_m1 = document.getElementById("nota_ap1_m1");
        var nota_ap2_m1 = document.getElementById("nota_ap2_m1");
        var nota_ac_m1 = document.getElementById("nota_ac_m1");
        var faltas1 = document.getElementById("faltas1");
        
        nota_ap1_m1.textContent = ap1+"/100";
        nota_ap2_m1.textContent = ap2+"/100";
        nota_ac_m1.textContent = ac+"/100";
        faltas1.textContent = faltas;
    }
    if (materia == "materia2"){
        var nota_ap1_m2 = document.getElementById("nota_ap1_m2");
        var nota_ap2_m2 = document.getElementById("nota_ap2_m2");
        var nota_ac_m2 = document.getElementById("nota_ac_m2");
        var faltas2 = document.getElementById("faltas2");
        
        nota_ap1_m2.textContent = ap1+"/100";
        nota_ap2_m2.textContent = ap2+"/100";
        nota_ac_m2.textContent = ac+"/100";
        faltas2.textContent = faltas;
    }
    if (materia == "materia3"){
        var nota_ap1_m3 = document.getElementById("nota_ap1_m3");
        var nota_ap2_m3 = document.getElementById("nota_ap2_m3");
        var nota_ac_m3 = document.getElementById("nota_ac_m3");
        var faltas3 = document.getElementById("faltas3");

        nota_ap1_m3.textContent = ap1+"/100";
        nota_ap2_m3.textContent = ap2+"/100";
        nota_ac_m3.textContent = ac+"/100";
        faltas3.textContent = faltas;
    }
    if (materia == "materia4"){
        var nota_ap1_m4 = document.getElementById("nota_ap1_m4");
        var nota_ap2_m4 = document.getElementById("nota_ap2_m4");
        var nota_ac_m4 = document.getElementById("nota_ac_m4");
        var faltas4 = document.getElementById("faltas4");
        
        nota_ap1_m4.textContent = ap1+"/100";
        nota_ap2_m4.textContent = ap2+"/100";
        nota_ac_m4.textContent = ac+"/100";
        faltas4.textContent = faltas;
    }
}

function displayResult(elementId, message, color) {
    var resultElement = document.getElementById(elementId);
    if (resultElement) {
        resultElement.innerHTML = message;
        resultElement.style.color = color;
    }
}

;

