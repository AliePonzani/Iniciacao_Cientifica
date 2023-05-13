var valor = JSON.parse(sessionStorage.getItem('meusValores'));
var Determinante = ((valor.aX * valor.bY * valor.cZ) + (valor.aY * valor.bZ * valor.cX) + (valor.aZ * valor.bX * valor.cY)) - ((valor.aY * valor.bX * valor.cZ) + (valor.aX * valor.bZ * valor.cY) + (valor.aZ * valor.bY * valor.cX));

function Calculo_D() {
    
    let D1 = document.getElementById('D1');
    let D2 = document.getElementById('D2');
    let D3 = document.getElementById('D3');
    let D = document.getElementById('D');
    

    D1.innerHTML = `D= ((${valor.aX} * ${valor.bY} * ${valor.cZ}) + (${valor.aY} * ${valor.bZ} * ${valor.cX}) + (${valor.aZ} * ${valor.bX} * ${valor.cY})) - ((${valor.aY} * ${valor.bX} * ${valor.cZ}) + (${valor.aX} * ${valor.bZ}* ${valor.cY}) + (${valor.aZ} * ${valor.bY} * ${valor.cX}))`;
    D2.innerHTML = `D= (${valor.aX * valor.bY * valor.cZ} + ${valor.aY * valor.bZ * valor.cX} + ${valor.aZ * valor.bX * valor.cY}) - (${valor.aY * valor.bX * valor.cZ} + ${valor.aX * valor.bZ * valor.cY} + ${valor.aZ * valor.bY * valor.cX})`;
    D3.innerHTML = `D= ${(valor.aX * valor.bY * valor.cZ) + (valor.aY * valor.bZ * valor.cX) + (valor.aZ * valor.bX * valor.cY)} - ${(valor.aY * valor.bX * valor.cZ) + (valor.aX * valor.bZ * valor.cY) + (valor.aZ * valor.bY * valor.cX)}`;
    D.innerHTML = `D= ${Determinante}`;
}

function Calculo_DX() {
    
    let DX1 = document.getElementById('DX1');
    let DX2 = document.getElementById('DX2');
    let DX3 = document.getElementById('DX3');
    let DX = document.getElementById('DX');
    let valorDeX = document.getElementById('valorDeX');
    var resultado = ((valor.aN * valor.bY * valor.cZ) + (valor.aY * valor.bZ * valor.cN) + (valor.aZ * valor.bN * valor.cY)) - ((valor.aY * valor.bN * valor.cZ) + (valor.aN * valor.bZ * valor.cY) + (valor.aZ * valor.bY * valor.cN));
    DX1.innerHTML = `Dx= ((${valor.aN} * ${valor.bY} * ${valor.cZ}) + (${valor.aY} * ${valor.bZ} * ${valor.cN}) + (${valor.aZ} * ${valor.bN} * ${valor.cY})) - ((${valor.aY} * ${valor.bN} * ${valor.cZ}) + (${valor.aN} * ${valor.bZ}* ${valor.cY}) + (${valor.aZ} * ${valor.bY} * ${valor.cN}))`;
    DX2.innerHTML = `Dx= (${valor.aN * valor.bY * valor.cZ} + ${valor.aY * valor.bZ * valor.cN} + ${valor.aZ * valor.bN * valor.cY}) - (${valor.aY * valor.bN * valor.cZ} + ${valor.aN * valor.bZ * valor.cY} + ${valor.aZ * valor.bY * valor.cN})`;
    DX3.innerHTML = `Dx= ${(valor.aN * valor.bY * valor.cZ) + (valor.aY * valor.bZ * valor.cN) + (valor.aZ * valor.bN * valor.cY)} - ${(valor.aY * valor.bN * valor.cZ) + (valor.aN * valor.bZ * valor.cY) + (valor.aZ * valor.bY * valor.cN)}`;
    DX.innerHTML = `Dx= ${resultado}`;
    valorDeX.innerHTML = `${resultado}/${Determinante} então x = ${resultado/Determinante}`;
}

function Calculo_DY() {
    
    let DY1 = document.getElementById('DY1');
    let DY2 = document.getElementById('DY2');
    let DY3 = document.getElementById('DY3');
    let DY = document.getElementById('DY');
    let valorDeY = document.getElementById('valorDeY');
    var resultado = ((valor.aX * valor.bN * valor.cZ) + (valor.aN * valor.bZ * valor.cX) + (valor.aZ * valor.bX * valor.cN)) - ((valor.aN * valor.bX * valor.cZ) + (valor.aX * valor.bZ * valor.cN) + (valor.aZ * valor.bN * valor.cX));
    DY1.innerHTML = `Dy= ((${valor.aX} * ${valor.bN} * ${valor.cZ}) + (${valor.aN} * ${valor.bZ} * ${valor.cX}) + (${valor.aZ} * ${valor.bX} * ${valor.cN})) - ((${valor.aN} * ${valor.bX} * ${valor.cZ}) + (${valor.aX} * ${valor.bZ}* ${valor.cN}) + (${valor.aZ} * ${valor.bN} * ${valor.cX}))`;
    DY2.innerHTML = `Dy=  (${valor.aX * valor.bN * valor.cZ} + ${valor.aN * valor.bZ * valor.cX} + ${valor.aZ * valor.bX * valor.cN}) - (${valor.aN * valor.bX * valor.cZ} + ${valor.aX * valor.bZ * valor.cN} + ${valor.aZ * valor.bN * valor.cX})`;
    DY3.innerHTML = `Dy=  ${(valor.aX * valor.bN * valor.cZ) + (valor.aN * valor.bZ * valor.cX) + (valor.aZ * valor.bX * valor.cN)} - ${(valor.aN * valor.bX * valor.cZ) + (valor.aX * valor.bZ * valor.cN) + (valor.aZ * valor.bN * valor.cX)}`;
    DY.innerHTML = `Dy=  ${resultado/Determinante}`;
    valorDeY.innerHTML = `${resultado}/${Determinante} então y = ${resultado/Determinante}`;

}

function Calculo_DZ() {
    
    let DZ1 = document.getElementById('DZ1');
    let DZ2 = document.getElementById('DZ2');
    let DZ3 = document.getElementById('DZ3');
    let DZ = document.getElementById('DZ');
    let valorDeZ = document.getElementById('valorDeZ');
    var resultado = ((valor.aX * valor.bY * valor.cN) + (valor.aY * valor.bN * valor.cX) + (valor.aN * valor.bX * valor.cY)) - ((valor.aY * valor.bX * valor.cN) + (valor.aX * valor.bN * valor.cY) + (valor.aN * valor.bY * valor.cX));
    DZ1.innerHTML = `Dz= ((${valor.aX} * ${valor.bY} * ${valor.cN}) + (${valor.aY} * ${valor.bN} * ${valor.cX}) + (${valor.aN} * ${valor.bX} * ${valor.cY})) - ((${valor.aY} * ${valor.bX} * ${valor.cN}) + (${valor.aX} * ${valor.bN}* ${valor.cY}) + (${valor.aN} * ${valor.bY} * ${valor.cX}))`;
    DZ2.innerHTML = `Dz= (${valor.aX * valor.bY * valor.cN} + ${valor.aY * valor.bN * valor.cX} + ${valor.aN * valor.bX * valor.cY}) - (${valor.aY * valor.bX * valor.cN} + ${valor.aX * valor.bN * valor.cY} + ${valor.aN * valor.bY * valor.cX})`;
    DZ3.innerHTML = `Dz= ${(valor.aX * valor.bY * valor.cN) + (valor.aY * valor.bN * valor.cX) + (valor.aN * valor.bX * valor.cY)} - ${(valor.aY * valor.bX * valor.cN) + (valor.aX * valor.bN * valor.cY) + (valor.aN * valor.bY * valor.cX)}`;
    DZ.innerHTML = `Dz= ${resultado}`;
    valorDeZ.innerHTML = `${resultado}/${Determinante} então z = ${resultado/Determinante}`;
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



window.onload = function () {
    Chamar();
    Calculo_D();
    Calculo_DX();
    Calculo_DY();
    Calculo_DZ();

    var teste = document.querySelectorAll('td');

    (async function () {
        let CITP2 = 12; //Célula Inicial Tabela Passo 2
        let CITP3 = 27; //Célula Inicial Tabela Passo 3
        let CITP4 = 42; //Célula Inicial Tabela Passo 4
        let CITP5 = 57; //Célula Inicial Tabela Passo 5

        while (true) {
            for (let i = 0; i < 6; i++) {
                if (i < 2) {
                    for (let j = 0; j < 3; j++) {
                        await animacao(teste[CITP2], teste[CITP3], teste[CITP4], teste[CITP5]);
                        CITP2 = CITP2 + 6;
                        CITP3 = CITP3 + 6;
                        CITP4 = CITP4 + 6;
                        CITP5 = CITP5 + 6;
                    }
                    CITP2 = CITP2 - 17;
                    CITP3 = CITP3 - 17;
                    CITP4 = CITP4 - 17;
                    CITP5 = CITP5 - 17;
                }
                else if (i == 2) {
                    for (let k = 0; k < 3; k++) {
                        await animacao(teste[CITP2], teste[CITP3], teste[CITP4], teste[CITP5]);
                        CITP2 = CITP2 + 6;
                        CITP3 = CITP3 + 6;
                        CITP4 = CITP4 + 6;
                        CITP5 = CITP5 + 6;
                    }
                    CITP2 = 16;
                    CITP3 = 31;
                    CITP4 = 46;
                    CITP5 = 61;
                }
                else {
                    for (let l = 0; l < 3; l++) {
                        try {
                            await animacao(teste[CITP2], teste[CITP3], teste[CITP4], teste[CITP5]);
                            CITP2 = CITP2 + 4;
                            CITP3 = CITP3 + 4;
                            CITP4 = CITP4 + 4;
                            CITP5 = CITP5 + 4;
                        } catch (error) {
                            console.error(error);
                        }
                    }
                    CITP2 = CITP2 - 13;
                    CITP3 = CITP3 - 13;
                    CITP4 = CITP4 - 13;
                    CITP5 = CITP5 - 13;
                }
            }
            CITP2 = 12;
            CITP3 = 27;
            CITP4 = 42;
            CITP5 = 57;
        }
    })();
}