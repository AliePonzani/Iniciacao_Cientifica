var valores = JSON.parse(sessionStorage.getItem('meusValores'));
var dadosMatriz = JSON.parse(sessionStorage.getItem('dadosMatriz'));
var dadosDoDeterminante = JSON.parse(sessionStorage.getItem('dadosDoDeterminante'));
var dadosDoX = JSON.parse(sessionStorage.getItem('dadosDoX'));
var dadosDoY = JSON.parse(sessionStorage.getItem('dadosDoY'));
var dadosDoZ = JSON.parse(sessionStorage.getItem('dadosDoZ'));

function criarTabela(cabecalho, dados) {
    var table = document.createElement('table');
    var thead = document.createElement('thead');
    var tbody = document.createElement('tbody');

    var theadRow = document.createElement('tr');
    for (let i = 0; i < cabecalho.length; i++) {
        var th = document.createElement('th');
        th.appendChild(document.createTextNode(cabecalho[i]));
        theadRow.appendChild(th);
    }
    thead.appendChild(theadRow);

    for (let i = 0; i < dados.length; i++) {
        var tbodyRow = document.createElement('tr');
        for (let j = 0; j < dados[0].length; j++) {
            var td = document.createElement('td');
            td.appendChild(document.createTextNode(dados[i][j]));
            tbodyRow.appendChild(td);
        }
        tbody.appendChild(tbodyRow);
    }
    thead.appendChild(theadRow);
    table.appendChild(thead);
    table.appendChild(tbody);
    return table;
}

async function alterarCorCelulas(nometabela, matriz) {
    var cells = document.querySelectorAll(`#${nometabela} td`);
    var cor = '';
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz.length; j++) {
            cor = "blue";
            let index = (matriz[0].length * j) + (i + j);
            cells[index].style.backgroundColor = cor;
            await new Promise(resolve => setTimeout(resolve, 800));
            cells[index].style.backgroundColor = 'transparent';
        }
    }

    for (let i = matriz[0].length - 1; i >= matriz.length - 1; i--) { //coluna
        for (let j = 0; j < matriz.length; j++) {
            cor = "purple";
            let index = (matriz[0].length * j) + (i - j);
            cells[index].style.backgroundColor = cor;
            await new Promise(resolve => setTimeout(resolve, 800));
            cells[index].style.backgroundColor = 'transparent';
        }
    }
    alterarCorCelulas(nometabela, matriz);
}

function montarTexto(matriz, nomeClasse) {
    const classe = document.getElementById(nomeClasse);
    let diagonalPrincipal = 0, diagonalSecundaria = 0;
    let passo1 = `<div class="passo"> D = <p class="esquerda"> ((`;
    let passo2 = `<div class="passo"> D = <p class="esquerda"> (`;
    let passo3 = `<div class="passo"> D = <p class="esquerda"> `;
    for (let i = 0; i < matriz.length; i++) {
        let multiplica = 1;
        for (let j = 0; j < matriz.length; j++) {
            passo1 += matriz[j][i + j];
            multiplica *= matriz[j][i + j];
            if (j < matriz.length - 1)
                passo1 += " * ";
        }
        passo2 += `${multiplica}`;
        if (i < matriz.length - 1) {
            passo1 += ") + (";
            passo2 += " + ";
        }

        diagonalPrincipal += multiplica;

    }
    passo3 += `${diagonalPrincipal} </p> - <p class="direita"> `;
    passo1 += `)) </p> - <p class="direita"> ((`;
    passo2 += `) </p> - <p class="direita"> (`;

    for (let i = matriz[0].length - 1; i >= matriz.length - 1; i--) { //coluna
        let multiplica = 1;
        for (let j = 0; j < matriz.length; j++) {
            passo1 += matriz[j][i - j];
            multiplica *= matriz[j][i - j];
            if (j < matriz.length - 1)
                passo1 += " * "
        }
        passo2 += `${multiplica}`;
        if (i > matriz.length - 1) {
            passo1 += ") + ("
            passo2 += " + ";
        }
        diagonalSecundaria += multiplica;
    }

    passo3 += `${diagonalSecundaria} </p></div>`;
    passo1 += `)) </p></div>`;
    passo2 += `) </p></div>`;

    let resultado = diagonalPrincipal - diagonalSecundaria;
    let passo4 = `<div class="passo"> D = <p> ${resultado} </p></div>`;

    let passos = [passo1, passo2, passo3, passo4];

    passos.forEach(element => {
        classe.innerHTML += element;
    });
}

window.onload = function () {
    const D = dadosDoDeterminante.valor;
    const x = dadosDoX.valor / D;
    const y = dadosDoY.valor / D;
    const z = dadosDoZ.valor / D;

    let resultado = document.getElementById('equacao');
    resultado.innerHTML = `<p>${valores.aX}x + ${valores.aY}y + ${valores.aZ}z = ${valores.aN}<br>${valores.bX}x + ${valores.bY}y + ${valores.bZ}z = ${valores.bN}<br>${valores.cX}x + ${valores.cY}y + ${valores.cZ}z = ${valores.cN}</p>`;
    let tabelaMatriz = criarTabela(dadosMatriz.cabecalho, dadosMatriz.matriz);
    document.getElementById('tabela_Matriz').appendChild(tabelaMatriz);

    let tabelaD = criarTabela(dadosDoDeterminante.cabecalho, dadosDoDeterminante.matriz);
    document.getElementById('tabela_D').appendChild(tabelaD);
    alterarCorCelulas('tabela_D', dadosDoDeterminante.matriz);
    montarTexto(dadosDoDeterminante.matriz, "calculo_D");

    let tabelaDx = criarTabela(dadosDoX.cabecalho, dadosDoX.matriz);
    document.getElementById('tabela_Dx').appendChild(tabelaDx);
    alterarCorCelulas("tabela_Dx", dadosDoX.matriz);
    montarTexto(dadosDoX.matriz, "calculo_Dx");

    let tabelaDy = criarTabela(dadosDoY.cabecalho, dadosDoY.matriz);
    document.getElementById('tabela_Dy').appendChild(tabelaDy);
    alterarCorCelulas("tabela_Dy", dadosDoY.matriz);
    montarTexto(dadosDoY.matriz, "calculo_Dy");

    let tabelaDz = criarTabela(dadosDoZ.cabecalho, dadosDoZ.matriz);
    document.getElementById('tabela_Dz').appendChild(tabelaDz);
    alterarCorCelulas("tabela_Dz", dadosDoZ.matriz);
    montarTexto(dadosDoZ.matriz, "calculo_Dz");
    
    let totalLinha1 = (valores.aX * x) + (valores.aY * y) + (valores.aZ * z);
    let totalLinha2 = (valores.bX * x) + (valores.bY * y) + (valores.bZ * z);
    let totalLinha3 = (valores.cX * x) + (valores.cY * y) + (valores.cZ * z);
    document.getElementById("valorDeX").innerHTML = `${dadosDoX.valor} ÷ ${D} então x = ${totalLinha1}`
    document.getElementById("valorDeY").innerHTML = `${dadosDoY.valor} ÷ ${D} então y = ${totalLinha2}`
    document.getElementById("valorDeZ").innerHTML = `${dadosDoZ.valor} ÷ ${D} então z = ${totalLinha3}`

    let prova = document.getElementById('prova');
    prova.innerHTML = `(${valores.aX}*${x}) + (${valores.aY}*${y}) + (${valores.aZ}*${z}) = ${totalLinha1}<br>
    (${valores.bX}*${x}) + (${valores.bY}*${y}) + (${valores.bZ}*${z}) = ${totalLinha2}<br>
    (${valores.cX}*${x}) + (${valores.cY}*${y}) + (${valores.cZ}*${z}) = ${totalLinha3}<br>`;

}