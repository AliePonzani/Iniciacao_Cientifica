var valor = JSON.parse(sessionStorage.getItem('meusValores'));//Tras os valores da tela inicial
var Determinante = ((valor.aX * valor.bY * valor.cZ) + (valor.aY * valor.bZ * valor.cX) + (valor.aZ * valor.bX * valor.cY)) - ((valor.aY * valor.bX * valor.cZ) + (valor.aX * valor.bZ * valor.cY) + (valor.aZ * valor.bY * valor.cX));//Resultado do calculo do determinante

function criarTabela(cabecalho, dados) {
    var table = document.createElement('table');
    var thead = document.createElement('thead');
    var tbody = document.createElement('tbody');

    // Cria a linha de cabeçalho
    var theadRow = document.createElement('tr');
    cabecalho.forEach(function (headerText) {
        var th = document.createElement('th');
        th.appendChild(document.createTextNode(headerText));
        theadRow.appendChild(th);
    });
    thead.appendChild(theadRow);
    table.appendChild(thead);

    // Cria as linhas de dados
    dados.forEach(function (rowData) {
        var tr = document.createElement('tr');
        rowData.forEach(function (cellData) {
            var td = document.createElement('td');
            td.appendChild(document.createTextNode(cellData));
            tr.appendChild(td);
        });
        tbody.appendChild(tr);
    });
    table.appendChild(tbody);

    return table;
}

function TabelaMatriz() {
    let resultado = document.getElementById('equacao');
    resultado.innerHTML = "";
    resultado.innerHTML = `<p>${valor.aX}x + ${valor.aY}y + ${valor.aZ}z = ${valor.aN}<br>${valor.bX}x + ${valor.bY}y + ${valor.bZ}z = ${valor.bN}<br>${valor.cX}x + ${valor.cY}y + ${valor.cZ}z = ${valor.cN}</p>`;
    
    var cabecalho = ['x', 'y', 'z', 'N'];
    var dados = [[valor.aX, valor.aY, valor.aZ, valor.aN],
                [valor.bX, valor.bY, valor.bZ, valor.bN],
                [valor.cX, valor.cY, valor.cZ, valor.cN]];

    var tabela = criarTabela(cabecalho, dados);
    document.getElementById('tabela_Matriz').appendChild(tabela);
}

//Passo a passo de como foi realizado o calculo do determinante
function Calculo_D() {

    var cabecalho = ['x', 'y', 'z', 'x', 'y'];
    var dados = [[valor.aX, valor.aY, valor.aZ, valor.aX, valor.aY],
    [valor.bX, valor.bY, valor.bZ, valor.bX, valor.bY],
    [valor.cX, valor.cY, valor.cZ, valor.cX, valor.cY]];

    var tabela = criarTabela(cabecalho, dados);
    document.getElementById('tabela_D').appendChild(tabela);

    const calculo_D = document.getElementById("calculo_D");

    calculo_D.innerHTML = `
        <div>
            D = <p class="esquerda"> ((${valor.aX} * ${valor.bY} * ${valor.cZ}) + (${valor.aY} * ${valor.bZ} * ${valor.cX}) + (${valor.aZ} * ${valor.bX} * ${valor.cY})) </p> - 
                <p class="direita"> ((${valor.aY} * ${valor.bX} * ${valor.cZ}) + (${valor.aX} * ${valor.bZ}* ${valor.cY}) + (${valor.aZ} * ${valor.bY} * ${valor.cX})) </p>
        </div>
        <div>
            D = <p class="esquerda"> (${valor.aX * valor.bY * valor.cZ} + ${valor.aY * valor.bZ * valor.cX} + ${valor.aZ * valor.bX * valor.cY}) </p> - 
                <p class="direita"> (${valor.aY * valor.bX * valor.cZ} + ${valor.aX * valor.bZ * valor.cY} + ${valor.aZ * valor.bY * valor.cX}) </p>
        </div>
        <div>
            D = <p class="esquerda"> ${(valor.aX * valor.bY * valor.cZ) + (valor.aY * valor.bZ * valor.cX) + (valor.aZ * valor.bX * valor.cY)} </p> - 
                <p class="direita"> ${(valor.aY * valor.bX * valor.cZ) + (valor.aX * valor.bZ * valor.cY) + (valor.aZ * valor.bY * valor.cX)} </p>
        </div>
        <div>
            D = <p> ${Determinante} </p>
        </div>
    `;

}

function Calculo_DX() {

    var cabecalho = ['N', 'y', 'z', 'N', 'y'];
    var dados = [[valor.aN, valor.aY, valor.aZ, valor.aN, valor.aY],
    [valor.bN, valor.bY, valor.bZ, valor.bN, valor.bY],
    [valor.cN, valor.cY, valor.cZ, valor.cN, valor.cY]];

    var tabela = criarTabela(cabecalho, dados);
    document.getElementById('tabela_Dx').appendChild(tabela);

    const calculo_Dx = document.getElementById("calculo_Dx");
    const valor_Dx = document.getElementById('valorDeX');
    var resultado = ((valor.aN * valor.bY * valor.cZ) + (valor.aY * valor.bZ * valor.cN) + (valor.aZ * valor.bN * valor.cY)) - ((valor.aY * valor.bN * valor.cZ) + (valor.aN * valor.bZ * valor.cY) + (valor.aZ * valor.bY * valor.cN));

    calculo_Dx.innerHTML = `
        <div>
            Dx = <p class="esquerda"> ((${valor.aN} * ${valor.bY} * ${valor.cZ}) + (${valor.aY} * ${valor.bZ} * ${valor.cN}) + (${valor.aZ} * ${valor.bN} * ${valor.cY})) </p> - 
                <p class="direita"> ((${valor.aY} * ${valor.bN} * ${valor.cZ}) + (${valor.aN} * ${valor.bZ}* ${valor.cY}) + (${valor.aZ} * ${valor.bY} * ${valor.cN})) </p>
        </div>
        <div>
            Dx = <p class="esquerda"> (${valor.aN * valor.bY * valor.cZ} + ${valor.aY * valor.bZ * valor.cN} + ${valor.aZ * valor.bN * valor.cY}) </p> - 
                <p class="direita"> (${valor.aY * valor.bN * valor.cZ} + ${valor.aN * valor.bZ * valor.cY} + ${valor.aZ * valor.bY * valor.cN}) </p>
        </div>
        <div>
            Dx = <p class="esquerda"> ${(valor.aN * valor.bY * valor.cZ) + (valor.aY * valor.bZ * valor.cN) + (valor.aZ * valor.bN * valor.cY)} </p> - 
                <p class="direita"> ${(valor.aY * valor.bN * valor.cZ) + (valor.aN * valor.bZ * valor.cY) + (valor.aZ * valor.bY * valor.cN)} </p>
        </div>
        <div>
            Dx = <p> ${resultado} </p>
        </div>
    `;
    valor_Dx.innerHTML = `${resultado}÷${Determinante} então x = ${resultado / Determinante}`;

}

function Calculo_DY() {

    var cabecalho = ['x', 'N', 'z', 'x', 'N'];
    var dados = [[valor.aX, valor.aN, valor.aZ, valor.aX, valor.aN],
    [valor.bX, valor.bN, valor.bZ, valor.bX, valor.bN],
    [valor.cX, valor.cN, valor.cZ, valor.cX, valor.cN]];

    var tabela = criarTabela(cabecalho, dados);
    document.getElementById('tabela_Dy').appendChild(tabela);

    const calculo_Dy = document.getElementById("calculo_Dy");
    const valor_Dy = document.getElementById('valorDeY');
    var resultado = ((valor.aX * valor.bN * valor.cZ) + (valor.aN * valor.bZ * valor.cX) + (valor.aZ * valor.bX * valor.cN)) - ((valor.aN * valor.bX * valor.cZ) + (valor.aX * valor.bZ * valor.cN) + (valor.aZ * valor.bN * valor.cX));

    calculo_Dy.innerHTML = `
        <div>
            Dy = <p class="esquerda"> ((${valor.aX} * ${valor.bN} * ${valor.cZ}) + (${valor.aN} * ${valor.bZ} * ${valor.cX}) + (${valor.aZ} * ${valor.bX} * ${valor.cN})) </p> - 
                <p class="direita"> ((${valor.aN} * ${valor.bX} * ${valor.cZ}) + (${valor.aX} * ${valor.bZ}* ${valor.cN}) + (${valor.aZ} * ${valor.bN} * ${valor.cX})) </p>
        </div>
        <div>
            Dy = <p class="esquerda"> (${valor.aX * valor.bN * valor.cZ} + ${valor.aN * valor.bZ * valor.cX} + ${valor.aZ * valor.bX * valor.cN}) </p> - 
                <p class="direita"> (${valor.aN * valor.bX * valor.cZ} + ${valor.aX * valor.bZ * valor.cN} + ${valor.aZ * valor.bN * valor.cX}) </p>
        </div>
        <div>
            Dy = <p class="esquerda"> ${(valor.aX * valor.bN * valor.cZ) + (valor.aN * valor.bZ * valor.cX) + (valor.aZ * valor.bX * valor.cN)} </p> - 
                <p class="direita"> ${(valor.aN * valor.bX * valor.cZ) + (valor.aX * valor.bZ * valor.cN) + (valor.aZ * valor.bN * valor.cX)} </p>
        </div>
        <div>
            Dy = <p> ${resultado} </p>
        </div>
    `;
    valor_Dy.innerHTML = `${resultado}÷${Determinante} então y = ${resultado / Determinante}`;

}

function Calculo_DZ() {

    var cabecalho = ['x', 'y', 'N', 'x', 'y'];
    var dados = [[valor.aX, valor.aY, valor.aN, valor.aX, valor.aY],
                [valor.bX, valor.bY, valor.bN, valor.bX, valor.bY],
                [valor.cX, valor.cY, valor.cN, valor.cX, valor.cY]];

    var tabela = criarTabela(cabecalho, dados);
    document.getElementById('tabela_Dz').appendChild(tabela);

    const calculo_Dz = document.getElementById("calculo_Dz");
    const valor_Dz = document.getElementById('valorDeZ');
    var resultado = ((valor.aX * valor.bY * valor.cN) + (valor.aY * valor.bN * valor.cX) + (valor.aN * valor.bX * valor.cY)) - ((valor.aY * valor.bX * valor.cN) + (valor.aX * valor.bN * valor.cY) + (valor.aN * valor.bY * valor.cX));

    calculo_Dz.innerHTML = `
        <div>
            Dz = <p class="esquerda"> ((${valor.aX} * ${valor.bY} * ${valor.cN}) + (${valor.aY} * ${valor.bN} * ${valor.cX}) + (${valor.aN} * ${valor.bX} * ${valor.cY})) </p> - 
                <p class="direita"> ((${valor.aY} * ${valor.bX} * ${valor.cN}) + (${valor.aX} * ${valor.bN}* ${valor.cY}) + (${valor.aN} * ${valor.bY} * ${valor.cX})) </p>
        </div>
        <div>
            Dz = <p class="esquerda"> (${valor.aX * valor.bY * valor.cN} + ${valor.aY * valor.bN * valor.cX} + ${valor.aN * valor.bX * valor.cY}) </p> - 
                <p class="direita"> (${valor.aY * valor.bX * valor.cN} + ${valor.aX * valor.bN * valor.cY} + ${valor.aN * valor.bY * valor.cX}) </p>
        </div>
        <div>
            Dz = <p class="esquerda"> ${(valor.aX * valor.bY * valor.cN) + (valor.aY * valor.bN * valor.cX) + (valor.aN * valor.bX * valor.cY)} </p> - 
                <p class="direita"> ${(valor.aY * valor.bX * valor.cN) + (valor.aX * valor.bN * valor.cY) + (valor.aN * valor.bY * valor.cX)} </p>
        </div>
        <div>
            Dz = <p> ${resultado} </p>
        </div>
    `;
    valor_Dz.innerHTML = `${resultado}÷${Determinante} então z = ${resultado / Determinante}`;
}

function Prova() {
    var resultadoX = (((valor.aN * valor.bY * valor.cZ) + (valor.aY * valor.bZ * valor.cN) + (valor.aZ * valor.bN * valor.cY)) - ((valor.aY * valor.bN * valor.cZ) + (valor.aN * valor.bZ * valor.cY) + (valor.aZ * valor.bY * valor.cN))) / Determinante;
    let resultadoY = (((valor.aX * valor.bN * valor.cZ) + (valor.aN * valor.bZ * valor.cX) + (valor.aZ * valor.bX * valor.cN)) - ((valor.aN * valor.bX * valor.cZ) + (valor.aX * valor.bZ * valor.cN) + (valor.aZ * valor.bN * valor.cX))) / Determinante;
    let resultadoZ = (((valor.aX * valor.bY * valor.cN) + (valor.aY * valor.bN * valor.cX) + (valor.aN * valor.bX * valor.cY)) - ((valor.aY * valor.bX * valor.cN) + (valor.aX * valor.bN * valor.cY) + (valor.aN * valor.bY * valor.cX))) / Determinante;

    let totalLinha1 = (valor.aX * resultadoX) + (valor.aY * resultadoY) + (valor.aZ * resultadoZ);
    let totalLinha2 = (valor.bX * resultadoX) + (valor.bY * resultadoY) + (valor.bZ * resultadoZ);
    let totalLinha3 = (valor.cX * resultadoX) + (valor.cY * resultadoY) + (valor.cZ * resultadoZ);

    let prova = document.getElementById('prova');
    prova.innerHTML = `(${valor.aX}*${resultadoX}) + (${valor.aY}*${resultadoY}) + (${valor.aZ}*${resultadoZ}) = ${totalLinha1}<br>(${valor.bX}*${resultadoX}) + (${valor.bY}*${resultadoY}) + (${valor.bZ}*${resultadoZ}) = ${totalLinha2}<br>(${valor.cX}*${resultadoX}) + (${valor.cY}*${resultadoY}) + (${valor.cZ}*${resultadoZ}) = ${totalLinha3}<br>`;
}

function animacao(...elementos) {
    return new Promise((resolve) => {

        for (let i = 0; i < elementos.length; i++) {
            elementos[i].style.animation = '';
        }

        setTimeout(() => {
            for (let i = 0; i < elementos.length; i++) {
                elementos[i].style.animation = 'destaque 1s 1';
                elementos[i].addEventListener('animationend', () => {
                    resolve();
                });
            }
        }, 0);
    });
}

function animacao2(...elementos) {
    return new Promise((resolve) => {

        for (let i = 0; i < elementos.length; i++) {
            elementos[i].style.animation = '';
        }

        setTimeout(() => {
            for (let i = 0; i < elementos.length; i++) {
                elementos[i].style.animation = 'destaque2 1s 1';
                elementos[i].addEventListener('animationend', () => {
                    resolve();
                });
            }
        }, 0);
    });
}


window.onload = function () {
    TabelaMatriz();
    Calculo_D();
    Calculo_DX();
    Calculo_DY();
    Calculo_DZ();
    Prova();

    var celula = document.querySelectorAll('td');

    (async function () {
        let CITP2 = 12; //Célula Inicial Tabela Passo 2
        let CITP3 = 27; //Célula Inicial Tabela Passo 3
        let CITP4 = 42; //Célula Inicial Tabela Passo 4
        let CITP5 = 57; //Célula Inicial Tabela Passo 5

        while (true) {
            for (let i = 0; i < 6; i++) {
                if (i < 2) {
                    for (let j = 0; j < 3; j++) {
                        await animacao(celula[CITP2], celula[CITP3], celula[CITP4], celula[CITP5]);
                        CITP2 += 6;
                        CITP3 += 6;
                        CITP4 += 6;
                        CITP5 += 6;
                    }
                    CITP2 -= 17;
                    CITP3 -= 17;
                    CITP4 -= 17;
                    CITP5 -= 17;
                }
                else if (i == 2) {
                    for (let k = 0; k < 3; k++) {
                        await animacao(celula[CITP2], celula[CITP3], celula[CITP4], celula[CITP5]);
                        CITP2 += 6;
                        CITP3 += 6;
                        CITP4 += 6;
                        CITP5 += 6;
                    }
                    CITP2 = 16;
                    CITP3 = 31;
                    CITP4 = 46;
                    CITP5 = 61;
                }
                else {
                    for (let l = 0; l < 3; l++) {
                        try {
                            await animacao2(celula[CITP2], celula[CITP3], celula[CITP4], celula[CITP5]);
                            CITP2 += 4;
                            CITP3 += 4;
                            CITP4 += 4;
                            CITP5 += 4;
                        } catch (error) {
                            console.error(error);
                        }
                    }
                    CITP2 -= 13;
                    CITP3 -= 13;
                    CITP4 -= 13;
                    CITP5 -= 13;
                }
            }
            CITP2 = 12;
            CITP3 = 27;
            CITP4 = 42;
            CITP5 = 57;
        }
    })();
}