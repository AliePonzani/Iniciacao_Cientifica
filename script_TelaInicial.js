var valores = [];
let colunaX = [];
let colunaY = [];
let colunaZ = [];
let colunaN = [];

var tabela = [], matrizD = [], matrizX = [], matrizY = [], matrizZ = [];

function verificarCampos(valores) {
    for (var i in valores) {
        if (valores[i] == "") {
            return false;
            break;
        }
    }
    return true;
}

function Prova(x, y, z) {
    let totalLinha1 = (valores.aX * x) + (valores.aY * y) + (valores.aZ * z);
    let totalLinha2 = (valores.bX * x) + (valores.bY * y) + (valores.bZ * z);
    let totalLinha3 = (valores.cX * x) + (valores.cY * y) + (valores.cZ * z);

    if (totalLinha1 === parseFloat(valores.aN) && totalLinha2 === parseFloat(valores.bN) && totalLinha3 === parseFloat(valores.cN)) {
        return true;
    }
    return false;
}


function criarMatriz(cabecalho) {
    let matriz = [];
    for (let linha = 0; linha < 3; linha++) {
        matriz[linha] = [];
        for (let coluna = 0; coluna < cabecalho.length; coluna++) {
            if (cabecalho[coluna] === "x") {
                matriz[linha][coluna] = colunaX[linha];
            } else if (cabecalho[coluna] === "y") {
                matriz[linha][coluna] = colunaY[linha];
            } else if (cabecalho[coluna] === "z") {
                matriz[linha][coluna] = colunaZ[linha];
            } else if (cabecalho[coluna] === "N") {
                matriz[linha][coluna] = colunaN[linha];
            }
        }
    }
    return matriz;
}


function calculo(matriz) {
    let diagonalPrincipal = 0, diagonalSecundaria = 0;
    for (let i = 0; i < matriz.length; i++) {
        let multiplica = 1;
        for (let j = 0; j < matriz.length; j++) {
            multiplica *= matriz[j][i + j];
        }
        diagonalPrincipal += multiplica;

    }

    for (let i = matriz[0].length - 1; i >= matriz.length - 1; i--) { //coluna
        let multiplica = 1;
        for (let j = 0; j < matriz.length; j++) {
            multiplica *= matriz[j][i - j];
        }
        diagonalSecundaria += multiplica;
    }
    let resultado = diagonalPrincipal - diagonalSecundaria;
    return resultado;
}


function fecharMsg(status) {
    let divMessage = document.querySelector('.alert');
    if (status == false) {
        divMessage.innerHTML = "";
        divMessage.style.visibility = "hidden";
    }
    else {
        divMessage.innerHTML = "";
        divMessage.style.visibility = "hidden";
        window.location.reload();
    }

}

function ativarMsg(text, status) {
    let divMessage = document.querySelector('.alert');
    divMessage.innerHTML = text;
    divMessage.style.visibility = "visible";
    let button = document.createElement("button");
    button.innerHTML = "OK";
    button.addEventListener("click", () => { fecharMsg(status) });
    divMessage.append(button);
}


const Calcular = () => {
    //Tenha como base que "a" representa a primeira linha da matriz, "b" a segunda linha e "c" a terceira linha
    //Assim como "X" representa os valores de "x", "Y" de "y", "Z" de "z" e "N" o "total".
    var aX = document.getElementById('aX').value;
    var aY = document.getElementById('aY').value;
    var aZ = document.getElementById('aZ').value;
    var aN = document.getElementById('aN').value;
    var bX = document.getElementById('bX').value;
    var bY = document.getElementById('bY').value;
    var bZ = document.getElementById('bZ').value;
    var bN = document.getElementById('bN').value;
    var cX = document.getElementById('cX').value;
    var cY = document.getElementById('cY').value;
    var cZ = document.getElementById('cZ').value;
    var cN = document.getElementById('cN').value;
    const cliqueAqui = document.querySelector('#cliqueAqui');

    valores = { aX: aX, bX: bX, cX: cX, aY: aY, bY: bY, cY: cY, aZ: aZ, bZ: bZ, cZ: cZ, aN: aN, bN: bN, cN: cN };

    var verificar = verificarCampos(valores);

    if (verificar == false) {
        let msg = "Todos os campos devem ser preenchidos! Se a incógnita não tem nenhum valor acompanhando então coloque 1 no campo, por exemplo: x+2y-z=0, então x é 1 e z é -1. Agora, se a incógnita não existe, digite 0, por exemplo: 2y+2z=8, então x é 0.";
        ativarMsg(msg, false);
    } else {
        colunaX = [valores.aX, valores.bX, valores.cX];
        colunaY = [valores.aY, valores.bY, valores.cY];
        colunaZ = [valores.aZ, valores.bZ, valores.cZ];
        colunaN = [valores.aN, valores.bN, valores.cN];

        let cabecalhoMatriz = ["x", "y", "z", "N"];
        tabela = criarMatriz(cabecalhoMatriz);

        let cabecalhoDeterminante = ["x", "y", "z", "x", "y"];
        matrizD = criarMatriz(cabecalhoDeterminante);
        const Determinante = calculo(matrizD);

        if (Determinante == 0) {
            msg = "O determinante da matriz de coeficientes desta equação é zero, então não é possível aplicar a Regra de Cramer para encontrar as soluções do sistema de equações lineares 3x3. Isso ocorre porque a Regra de Cramer envolve a divisão de determinantes, e se o determinante da matriz de coeficientes for zero, a divisão por zero é indefinida e não é possível obter as soluções do sistema dessa maneira. Nesse caso, é necessário utilizar outros métodos para resolver o sistema, como a eliminação gaussiana ou a decomposição LU, por exemplo.<br>";
            ativarMsg(msg, true);
        } else {

            let cabecalhoDx = ["N", "y", "z", "N", "y"];
            matrizX = criarMatriz(cabecalhoDx);
            let Dx = calculo(matrizX);
            const x = Dx / Determinante

            let cabecalhoDy = ["x", "N", "z", "x", "N"];
            matrizY = criarMatriz(cabecalhoDy);
            let Dy = calculo(matrizY);
            const y = Dy / Determinante;

            let cabecalhoDz = ["x", "y", "N", "x", "y"];
            matrizZ = criarMatriz(cabecalhoDz);
            let Dz = calculo(matrizZ);
            const z = Dz / Determinante;


            let prova = Prova(x, y, z);

            if (prova === true) {
                let exibirResultado = document.getElementById('resultado');
                exibirResultado.innerHTML = `x = ${Dx / Determinante} <br> y = ${Dy / Determinante} <br> z = ${Dz / Determinante} <br>`;
                exibirResultado.style.visibility = "visible";
                sessionStorage.meusValores = JSON.stringify(valores);

                let dadosMatriz = { matriz: tabela, cabecalho: cabecalhoMatriz };
                let dadosDoDeterminante = { valor: Determinante, matriz: matrizD, cabecalho: cabecalhoDeterminante };
                let dadosDoX = { valor: Dx, matriz: matrizX, cabecalho: cabecalhoDx };
                let dadosDoY = { valor: Dy, matriz: matrizY, cabecalho: cabecalhoDy };
                let dadosDoZ = { valor: Dz, matriz: matrizZ, cabecalho: cabecalhoDz };

                sessionStorage.setItem('dadosMatriz', JSON.stringify(dadosMatriz));
                sessionStorage.setItem('dadosDoDeterminante', JSON.stringify(dadosDoDeterminante));
                sessionStorage.setItem('dadosDoX', JSON.stringify(dadosDoX));
                sessionStorage.setItem('dadosDoY', JSON.stringify(dadosDoY));
                sessionStorage.setItem('dadosDoZ', JSON.stringify(dadosDoZ));
                fecharMsg(false);

                cliqueAqui.href = "https://alieponzani.github.io/Iniciacao_Cientifica/SegundaTela.html"; 
                cliqueAqui.style.color = 'purple';
            }
            else {
                msg = "Esta equação é um Sistema Possível e Indeterminado (SPI): as soluções possíveis são infinitas ou um Sistema Impossível (SI): não é possível apresentar qualquer tipo de solução.<br>";
                ativarMsg(msg, true);
            }
        }
    }
}