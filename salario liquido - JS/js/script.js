function calcularSalarioLiquido() {
    var inNome = document.getElementById("inNome");
    var inDependentes = document.getElementById("inDependentes");
    var inSalarioBruto = document.getElementById("inSalarioBruto");

    var nome = inNome.value;
    var dependentes = Number(inDependentes.value);
    var salarioBruto = Number(inSalarioBruto.value);

    if(nome == "" || dependentes < 0 || isNaN(dependentes) || salarioBruto <= 0 || isNaN(salarioBruto)) {
        alert("Informe os dados corretamente...");
        inNome.focus();
        return;
    }

    var descontoINSS;
    var aliquotaINSS;
    var salarioSemINSS;
    if (salarioBruto <= 1100) {
        descontoINSS = salarioBruto * 0.075;
        aliquotaINSS = "7,5%";
        salarioSemINSS = salarioBruto - descontoINSS;
    }
    if(salarioBruto >= 1100.01 && salarioBruto <= 2203.48){
        descontoINSS = salarioBruto * 0.09 - 16.5;
        aliquotaINSS = "9%";
        salarioSemINSS = salarioBruto - descontoINSS;
    }
    if(salarioBruto >= 2203.49 && salarioBruto <= 3305.22){
        descontoINSS = salarioBruto * 0.12 - 82.6;
        aliquotaINSS = "12%";
        salarioSemINSS = salarioBruto - descontoINSS;
    }
    if(salarioBruto >= 3305.23 && salarioBruto <= 6433.57){
        descontoINSS = salarioBruto * 0.14 - 148.71;
        aliquotaINSS = "14%";
        salarioSemINSS = salarioBruto - descontoINSS;
    }

    var descontoIRRF;
    var aliquotaIRRF;
    var salarioLiquido;
    if (salarioSemINSS <= 1903.98) {
        descontoIRRF = 0;
        aliquotaIRRF = "Isento";
        salarioLiquido = salarioSemINSS - descontoIRRF;
    }
    if(salarioSemINSS >= 1903.99 && salarioSemINSS <= 2826.65) {
        descontoIRRF = salarioSemINSS * 0.075 - 142.80;
        aliquotaIRRF = "7,5%";
        salarioLiquido = salarioSemINSS - descontoIRRF;
    }
    if(salarioSemINSS >= 2826.66 && salarioSemINSS <= 3751.05) {
        descontoIRRF = salarioSemINSS * 0.15 - 354.80;
        aliquotaIRRF = "15%";
        salarioLiquido = salarioSemINSS - descontoIRRF;
    }
    if(salarioSemINSS >= 3751.06 && salarioSemINSS <= 4664.68) {
        descontoIRRF = salarioSemINSS * 0.225 - 636.13;
        aliquotaIRRF = "22,5%";
        salarioLiquido = salarioSemINSS - descontoIRRF;
    }
    if(salarioSemINSS >= 4664.69) {
        descontoIRRF = salarioSemINSS * 0.275 - 869.36;
        aliquotaIRRF = "27,5%";
        salarioLiquido = salarioSemINSS - descontoIRRF;
    }

    var tr = document.createElement("tr");
    var td = document.createElement("td");
    var tx = document.createTextNode(nome);
    var tbody = document.querySelector("tbody");
    td.append(tx);
    tr.append(td);
    td=document.createElement("td");
    tx=document.createTextNode("R$ " + salarioBruto.toFixed(2));
    td.append(tx);
    tr.append(td);
    td=document.createElement("td");
    tx=document.createTextNode(aliquotaINSS);
    td.append(tx);
    tr.append(td);
    td=document.createElement("td");
    tx=document.createTextNode("R$ " + descontoINSS.toFixed(2));
    td.append(tx);
    tr.append(td);
    td=document.createElement("td");
    tx=document.createTextNode(aliquotaIRRF);
    td.append(tx);
    tr.append(td);
    td=document.createElement("td");
    tx=document.createTextNode("R$ " + descontoIRRF.toFixed(2));
    td.append(tx);
    tr.append(td);
    td=document.createElement("td");
    tx=document.createTextNode("R$ " + salarioLiquido.toFixed(2));
    td.append(tx);
    tr.append(td);
    tbody.append(tr);
    return false;
}    
var btMostrarSalario = document.getElementById("btMostrarSalario");
btMostrarSalario.addEventListener("click",calcularSalarioLiquido);
