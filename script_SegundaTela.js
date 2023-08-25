var valor = JSON.parse(sessionStorage.getItem('meusValores'));//Tras os valores da tela inicial
var Determinante = ((valor.aX * valor.bY * valor.cZ) + (valor.aY * valor.bZ * valor.cX) + (valor.aZ * valor.bX * valor.cY)) - ((valor.aY * valor.bX * valor.cZ) + (valor.aX * valor.bZ * valor.cY) + (valor.aZ * valor.bY * valor.cX));//Resultado do calculo do determinante


//Passo a passo de como foi realizado o calculo do determinante
function Calculo_D() {
    let D1_esquerda = document.getElementById('D1_esquerda');
    let D1_direita = document.getElementById('D1_direita');
    let D2_esquerda = document.getElementById('D2_esquerda');
    let D2_direita = document.getElementById('D2_direita');
    let D3_esquerda = document.getElementById('D3_esquerda');
    let D3_direita = document.getElementById('D3_direita');
    let D = document.getElementById('D');

    D1_esquerda.innerHTML = `((${valor.aX} * ${valor.bY} * ${valor.cZ}) + (${valor.aY} * ${valor.bZ} * ${valor.cX}) + (${valor.aZ} * ${valor.bX} * ${valor.cY}))`;
    D1_direita.innerHTML = `((${valor.aY} * ${valor.bX} * ${valor.cZ}) + (${valor.aX} * ${valor.bZ}* ${valor.cY}) + (${valor.aZ} * ${valor.bY} * ${valor.cX}))`;
    D2_esquerda.innerHTML = `(${valor.aX * valor.bY * valor.cZ} + ${valor.aY * valor.bZ * valor.cX} + ${valor.aZ * valor.bX * valor.cY})`;
    D2_direita.innerHTML = `(${valor.aY * valor.bX * valor.cZ} + ${valor.aX * valor.bZ * valor.cY} + ${valor.aZ * valor.bY * valor.cX})`;
    D3_esquerda.innerHTML = `${(valor.aX * valor.bY * valor.cZ) + (valor.aY * valor.bZ * valor.cX) + (valor.aZ * valor.bX * valor.cY)}`;
    D3_direita.innerHTML = `${(valor.aY * valor.bX * valor.cZ) + (valor.aX * valor.bZ * valor.cY) + (valor.aZ * valor.bY * valor.cX)}`;
    D.innerHTML = `D= ${Determinante}`;
}

function Calculo_DX() {

    let DX1_esquerda = document.getElementById('DX1_esquerda');
    let DX1_direita = document.getElementById('DX1_direita');
    let DX2_esquerda = document.getElementById('DX2_esquerda');
    let DX2_direita = document.getElementById('DX2_direita');
    let DX3_esquerda = document.getElementById('DX3_esquerda');
    let DX3_direita = document.getElementById('DX3_direita');
    let DX = document.getElementById('DX');
    let valorDeX = document.getElementById('valorDeX');
    var resultado = ((valor.aN * valor.bY * valor.cZ) + (valor.aY * valor.bZ * valor.cN) + (valor.aZ * valor.bN * valor.cY)) - ((valor.aY * valor.bN * valor.cZ) + (valor.aN * valor.bZ * valor.cY) + (valor.aZ * valor.bY * valor.cN));
    DX1_esquerda.innerHTML = `((${valor.aN} * ${valor.bY} * ${valor.cZ}) + (${valor.aY} * ${valor.bZ} * ${valor.cN}) + (${valor.aZ} * ${valor.bN} * ${valor.cY}))`;
    DX1_direita.innerHTML = `((${valor.aY} * ${valor.bN} * ${valor.cZ}) + (${valor.aN} * ${valor.bZ}* ${valor.cY}) + (${valor.aZ} * ${valor.bY} * ${valor.cN}))`;
    DX2_esquerda.innerHTML = `(${valor.aN * valor.bY * valor.cZ} + ${valor.aY * valor.bZ * valor.cN} + ${valor.aZ * valor.bN * valor.cY})`;
    DX2_direita.innerHTML = `(${valor.aY * valor.bN * valor.cZ} + ${valor.aN * valor.bZ * valor.cY} + ${valor.aZ * valor.bY * valor.cN})`;
    DX3_esquerda.innerHTML = `${(valor.aN * valor.bY * valor.cZ) + (valor.aY * valor.bZ * valor.cN) + (valor.aZ * valor.bN * valor.cY)}`;
    DX3_direita.innerHTML = `${(valor.aY * valor.bN * valor.cZ) + (valor.aN * valor.bZ * valor.cY) + (valor.aZ * valor.bY * valor.cN)}`;
    DX.innerHTML = `Dx= ${resultado}`;
    valorDeX.innerHTML = `${resultado}/${Determinante} então x = ${resultado / Determinante}`;
}

function Calculo_DY() {

    let DY1_esquerda = document.getElementById('DY1_esquerda');
    let DY1_direita = document.getElementById('DY1_direita');
    let DY2_esquerda = document.getElementById('DY2_esquerda');
    let DY2_direita = document.getElementById('DY2_direita');
    let DY3_esquerda = document.getElementById('DY3_esquerda');
    let DY3_direita = document.getElementById('DY3_direita');
    let DY = document.getElementById('DY');
    let valorDeY = document.getElementById('valorDeY');

    var resultado = ((valor.aX * valor.bN * valor.cZ) + (valor.aN * valor.bZ * valor.cX) + (valor.aZ * valor.bX * valor.cN)) - ((valor.aN * valor.bX * valor.cZ) + (valor.aX * valor.bZ * valor.cN) + (valor.aZ * valor.bN * valor.cX));
    DY1_esquerda.innerHTML = `((${valor.aX} * ${valor.bN} * ${valor.cZ}) + (${valor.aN} * ${valor.bZ} * ${valor.cX}) + (${valor.aZ} * ${valor.bX} * ${valor.cN}))`;
    DY1_direita.innerHTML = `((${valor.aN} * ${valor.bX} * ${valor.cZ}) + (${valor.aX} * ${valor.bZ}* ${valor.cN}) + (${valor.aZ} * ${valor.bN} * ${valor.cX}))`;
    DY2_esquerda.innerHTML = `(${valor.aX * valor.bN * valor.cZ} + ${valor.aN * valor.bZ * valor.cX} + ${valor.aZ * valor.bX * valor.cN})`;
    DY2_direita.innerHTML = `(${valor.aN * valor.bX * valor.cZ} + ${valor.aX * valor.bZ * valor.cN} + ${valor.aZ * valor.bN * valor.cX})`;
    DY3_esquerda.innerHTML = `${(valor.aX * valor.bN * valor.cZ) + (valor.aN * valor.bZ * valor.cX) + (valor.aZ * valor.bX * valor.cN)}`;
    DY3_direita.innerHTML = `${(valor.aN * valor.bX * valor.cZ) + (valor.aX * valor.bZ * valor.cN) + (valor.aZ * valor.bN * valor.cX)}`;
    DY.innerHTML = `Dy=  ${resultado}`;
    valorDeY.innerHTML = `${resultado}/${Determinante} então y = ${resultado / Determinante}`;

}

function Calculo_DZ() {

    let DZ1_esquerda = document.getElementById('DZ1_esquerda');
    let DZ1_direita = document.getElementById("DZ1_direita");
    let DZ2_esquerda = document.getElementById('DZ2_esquerda');
    let DZ2_direita = document.getElementById("DZ2_direita");
    let DZ3_esquerda = document.getElementById('DZ3_esquerda');
    let DZ3_direita = document.getElementById("DZ3_direita");
    let DZ = document.getElementById('DZ');
    let valorDeZ = document.getElementById('valorDeZ');
    var resultado = ((valor.aX * valor.bY * valor.cN) + (valor.aY * valor.bN * valor.cX) + (valor.aN * valor.bX * valor.cY)) - ((valor.aY * valor.bX * valor.cN) + (valor.aX * valor.bN * valor.cY) + (valor.aN * valor.bY * valor.cX));
    DZ1_esquerda.innerHTML = ` ((${valor.aX} * ${valor.bY} * ${valor.cN}) + (${valor.aY} * ${valor.bN} * ${valor.cX}) + (${valor.aN} * ${valor.bX} * ${valor.cY})) `;
    DZ1_direita.innerHTML = ` ((${valor.aY} * ${valor.bX} * ${valor.cN}) + (${valor.aX} * ${valor.bN}* ${valor.cY}) + (${valor.aN} * ${valor.bY} * ${valor.cX}))`;
    DZ2_esquerda.innerHTML = ` (${valor.aX * valor.bY * valor.cN} + ${valor.aY * valor.bN * valor.cX} + ${valor.aN * valor.bX * valor.cY})`;
    DZ2_direita.innerHTML = `(${valor.aY * valor.bX * valor.cN} + ${valor.aX * valor.bN * valor.cY} + ${valor.aN * valor.bY * valor.cX})`;
    DZ3_esquerda.innerHTML = `  ${(valor.aX * valor.bY * valor.cN) + (valor.aY * valor.bN * valor.cX) + (valor.aN * valor.bX * valor.cY)}`;
    DZ3_direita.innerHTML = `${(valor.aY * valor.bX * valor.cN) + (valor.aX * valor.bN * valor.cY) + (valor.aN * valor.bY * valor.cX)}`;
    DZ.innerHTML = `Dz= ${resultado}`;
    valorDeZ.innerHTML = `${resultado}/${Determinante} então z = ${resultado / Determinante}`;
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

function Chamar() {
    let resultado = document.getElementById('equacao');
    resultado.innerHTML = "";
    resultado.innerHTML = `<p>${valor.aX}x + ${valor.aY}y + ${valor.aZ}z = ${valor.aN}<br>${valor.bX}x + ${valor.bY}y + ${valor.bZ}z = ${valor.bN}<br>${valor.cX}x + ${valor.cY}y + ${valor.cZ}z = ${valor.cN}</p>`;

    let aX = document.getElementsByClassName('aX');
    let bX = document.getElementsByClassName('bX');
    let cX = document.getElementsByClassName('cX');
    let aY = document.getElementsByClassName('aY');
    let bY = document.getElementsByClassName('bY');
    let cY = document.getElementsByClassName('cY');
    let aZ = document.getElementsByClassName('aZ');
    let bZ = document.getElementsByClassName('bZ');
    let cZ = document.getElementsByClassName('cZ');
    let aN = document.getElementsByClassName('aN');
    let bN = document.getElementsByClassName('bN');
    let cN = document.getElementsByClassName('cN');

    for (var i = 0; i < aX.length; i++) {
        aX[i].innerHTML = valor.aX;
        bX[i].innerHTML = valor.bX;
        cX[i].innerHTML = valor.cX;
        aY[i].innerHTML = valor.aY;
        bY[i].innerHTML = valor.bY;
        cY[i].innerHTML = valor.cY;
    }

    for (var i = 0; i < aZ.length; i++) {
        aZ[i].innerHTML = valor.aZ;
        bZ[i].innerHTML = valor.bZ;
        cZ[i].innerHTML = valor.cZ;
    }
    for (var i = 0; i < aN.length; i++) {
        aN[i].innerHTML = valor.aN;
        bN[i].innerHTML = valor.bN;
        cN[i].innerHTML = valor.cN;
    }

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
    Chamar();
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