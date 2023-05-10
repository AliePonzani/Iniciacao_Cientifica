class Celula {
    constructor(classe) {
        this.classe = classe;
    }

    async animacao() {
        return new Promise((resolve) => {
            const elementos = document.getElementsByClassName(this.classe);
            for (let i = 0; i < elementos.length; i++) {
                elementos[i].style.animation = '';
            }

            setTimeout(() => {
                for (let i = 0; i < elementos.length; i++) {
                    elementos[i].style.animationName = 'destaque';
                    elementos[i].style.animationDuration = '1s';
                    elementos[i].style.animationIterationCount = '1';
                    elementos[i].addEventListener('animationend', () => {
                        resolve();
                    });
                }
            }, 0);
        });
    }
}
var teste = 1;

function Calculo_D(){
    var valor = JSON.parse(sessionStorage.getItem('meusValores'));
    let D1 = document.getElementById('D1');
    let D2 = document.getElementById('D2');
    let D3 = document.getElementById('D3');
    let D = document.getElementById('D');

    D1.innerHTML = `D= ((${valor.aX} * ${valor.bY} * ${valor.cZ}) + (${valor.aY} * ${valor.bZ} * ${valor.cX}) + (${valor.aZ} * ${valor.bX} * ${valor.cY})) - ((${valor.aY} * ${valor.bX} * ${valor.cZ}) + (${valor.aX} * ${valor.bZ}* ${valor.cY}) + (${valor.aZ} * ${valor.bY} * ${valor.cX}))`; 
    D2.innerHTML = `D= (${valor.aX*valor.bY*valor.cZ} + ${valor.aY*valor.bZ*valor.cX} + ${valor.aZ*valor.bX*valor.cY}) - (${valor.aY*valor.bX*valor.cZ} + ${valor.aX*valor.bZ*valor.cY} + ${valor.aZ*valor.bY*valor.cX})`;
    D3.innerHTML = `D= ${(valor.aX*valor.bY*valor.cZ)+(valor.aY*valor.bZ*valor.cX)+(valor.aZ*valor.bX*valor.cY)} - ${(valor.aY*valor.bX*valor.cZ) + (valor.aX*valor.bZ*valor.cY) + (valor.aZ*valor.bY*valor.cX)}`;
    D.innerHTML = `D= ${((valor.aX*valor.bY*valor.cZ)+(valor.aY*valor.bZ*valor.cX)+(valor.aZ*valor.bX*valor.cY)) - ((valor.aY*valor.bX*valor.cZ) + (valor.aX*valor.bZ*valor.cY) + (valor.aZ*valor.bY*valor.cX))}`;
}

function Calculo_DX(){
    var valor = JSON.parse(sessionStorage.getItem('meusValores'));
    let DX1 = document.getElementById('DX1');
    let DX2 = document.getElementById('DX2');
    let DX3 = document.getElementById('DX3');
    let DX = document.getElementById('DX');
    DX1.innerHTML = `Dx= ((${valor.aN} * ${valor.bY} * ${valor.cZ}) + (${valor.aY} * ${valor.bZ} * ${valor.cN}) + (${valor.aZ} * ${valor.bN} * ${valor.cY})) - ((${valor.aY} * ${valor.bN} * ${valor.cZ}) + (${valor.aN} * ${valor.bZ}* ${valor.cY}) + (${valor.aZ} * ${valor.bY} * ${valor.cN}))`;
    DX2.innerHTML = `Dx= (${valor.aN*valor.bY*valor.cZ} + ${valor.aY*valor.bZ*valor.cN} + ${valor.aZ*valor.bN*valor.cY}) - (${valor.aY*valor.bN*valor.cZ} + ${valor.aN*valor.bZ*valor.cY} + ${valor.aZ*valor.bY*valor.cN})`;
    DX3.innerHTML = `Dx= ${(valor.aN*valor.bY*valor.cZ)+(valor.aY*valor.bZ*valor.cN)+(valor.aZ*valor.bN*valor.cY)} - ${(valor.aY*valor.bN*valor.cZ) + (valor.aN*valor.bZ*valor.cY) + (valor.aZ*valor.bY*valor.cN)}`;
    DX.innerHTML = `Dx= ${((valor.aN*valor.bY*valor.cZ)+(valor.aY*valor.bZ*valor.cN)+(valor.aZ*valor.bN*valor.cY)) - ((valor.aY*valor.bN*valor.cZ) + (valor.aN*valor.bZ*valor.cY) + (valor.aZ*valor.bY*valor.cN))}`;
}

function Calculo_DY(){
    var valor = JSON.parse(sessionStorage.getItem('meusValores'));
    let DY1 = document.getElementById('DY1');
    let DY2 = document.getElementById('DY2');
    let DY3 = document.getElementById('DY3');
    let DY = document.getElementById('DY');
    DY1.innerHTML = `Dy= ((${valor.aX} * ${valor.bN} * ${valor.cZ}) + (${valor.aN} * ${valor.bZ} * ${valor.cX}) + (${valor.aZ} * ${valor.bX} * ${valor.cN})) - ((${valor.aN} * ${valor.bX} * ${valor.cZ}) + (${valor.aX} * ${valor.bZ}* ${valor.cN}) + (${valor.aZ} * ${valor.bN} * ${valor.cX}))`;
    DY2.innerHTML = `Dy=  (${valor.aX*valor.bN*valor.cZ} + ${valor.aN*valor.bZ*valor.cX} + ${valor.aZ*valor.bX*valor.cN}) - (${valor.aN*valor.bX*valor.cZ} + ${valor.aX*valor.bZ*valor.cN} + ${valor.aZ*valor.bN*valor.cX})`;
    DY3.innerHTML = `Dy=  ${(valor.aX*valor.bN*valor.cZ)+(valor.aN*valor.bZ*valor.cX)+(valor.aZ*valor.bX*valor.cN)} - ${(valor.aN*valor.bX*valor.cZ) + (valor.aX*valor.bZ*valor.cN) + (valor.aZ*valor.bN*valor.cX)}`;
    DY.innerHTML = `Dy=  ${((valor.aX*valor.bN*valor.cZ)+(valor.aN*valor.bZ*valor.cX)+(valor.aZ*valor.bX*valor.cN)) - ((valor.aN*valor.bX*valor.cZ) + (valor.aX*valor.bZ*valor.cN) + (valor.aZ*valor.bN*valor.cX))}`;
}

function Calculo_DZ(){
    var valor = JSON.parse(sessionStorage.getItem('meusValores'));
    let DZ1 = document.getElementById('DZ1');
    let DZ2 = document.getElementById('DZ2');
    let DZ3 = document.getElementById('DZ3');
    let DZ = document.getElementById('DZ');

    DZ1.innerHTML = `Dz= ((${valor.aX} * ${valor.bY} * ${valor.cN}) + (${valor.aY} * ${valor.bN} * ${valor.cX}) + (${valor.aN} * ${valor.bX} * ${valor.cY})) - ((${valor.aY} * ${valor.bX} * ${valor.cN}) + (${valor.aX} * ${valor.bN}* ${valor.cY}) + (${valor.aN} * ${valor.bY} * ${valor.cX}))`;
    DZ2.innerHTML = `Dz= (${valor.aX*valor.bY*valor.cN} + ${valor.aY*valor.bN*valor.cX} + ${valor.aN*valor.bX*valor.cY}) - (${valor.aY*valor.bX*valor.cN} + ${valor.aX*valor.bN*valor.cY} + ${valor.aN*valor.bY*valor.cX})`;
    DZ3.innerHTML = `Dz= ${(valor.aX*valor.bY*valor.cN)+(valor.aY*valor.bN*valor.cX)+(valor.aN*valor.bX*valor.cY)} - ${(valor.aY*valor.bX*valor.cN) + (valor.aX*valor.bN*valor.cY) + (valor.aN*valor.bY*valor.cX)}`;
    DZ.innerHTML = `Dz= ${((valor.aX*valor.bY*valor.cN)+(valor.aY*valor.bN*valor.cX)+(valor.aN*valor.bX*valor.cY)) - ((valor.aY*valor.bX*valor.cN) + (valor.aX*valor.bN*valor.cY) + (valor.aN*valor.bY*valor.cX))}`;
}

function Chamar() {
    let resultado = document.getElementById('equacao');
    resultado.innerHTML = "";

    var valor = JSON.parse(sessionStorage.getItem('meusValores'));

    resultado.innerHTML = `${valor.aX}x + ${valor.aY}y + ${valor.aZ}z = ${valor.aN}<br>${valor.bX}x + ${valor.bY}y + ${valor.bZ}z = ${valor.bN}<br>${valor.cX}x + ${valor.cY}y + ${valor.cZ}z = ${valor.cN}`;
    
    
    let aX = document.getElementsByName('aX');
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


window.onload = function () {

    Chamar();
    Calculo_D();
    Calculo_DX();
    Calculo_DY();
    Calculo_DZ();

    alert("função funcionando");

    (async function () {
        while (true) {
            const celulas = [];

            const numRows = 3;
            const numCols = 5;

            for (let i = 0; i < numRows; i++) {
                for (let j = 0; j < numCols; j++) {
                    const classe = `_${i}_${j}`;
                    const celula = new Celula(classe);
                    celulas.push(celula);
                }
            }

            for (let k = 0; k < numCols - 2; k++) {
                for (let i = 0, j = k; i < numRows && j < numCols; i++, j++) {
                    const celula = celulas[i * numCols + j];
                    await celula.animacao();
                }
            }

            for (let k = numCols - 1; k >= 2; k--) {
                for (let i = 0, j = k; i < numRows && j >= 0; i++, j--) {
                    const celula = celulas[i * numCols + j];
                    await celula.animacao();
                }
            }
        }
    })();

    
}