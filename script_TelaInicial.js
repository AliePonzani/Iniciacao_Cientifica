var valores = [];

function verificarVetorCompleto(vetor) {
    var cont = 0;
    for (var i in vetor) {
        if (vetor[i] == "") {
            cont++;
        }
    }
    if (cont > 0) {
        return false;
    } else {
        return true;
    }

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

    if (sessionStorage.meusValores) {
        valores = JSON.parse(sessionStorage.getItem('meusValores'));
    }

    //Tenha como base que "a" representa a primeira linha da matriz, "b" a segunda linha e "c" a terceira linha
    //Assim como "X" representa os valores de "x", "Y" de "y", "Z" de "z" e "N" o "total".
    var aX = document.getElementById('aX').value;
    var aY = document.getElementById('bY').value;
    var aZ = document.getElementById('cZ').value;
    var aN = document.getElementById('dN').value;
    var bX = document.getElementById('eX').value;
    var bY = document.getElementById('fY').value;
    var bZ = document.getElementById('gZ').value;
    var bN = document.getElementById('hN').value;
    var cX = document.getElementById('iX').value;
    var cY = document.getElementById('jY').value;
    var cZ = document.getElementById('kZ').value;
    var cN = document.getElementById('lN').value;
    const cliqueAqui = document.querySelector('#cliqueAqui');

    valores = { aX: aX, bX: bX, cX: cX, aY: aY, bY: bY, cY: cY, aZ: aZ, bZ: bZ, cZ: cZ, aN: aN, bN: bN, cN: cN };

    var verificar = verificarVetorCompleto(valores);


    if (verificar == false) {
        let msg = "Todos os campos devem ser preenchidos! Se a incógnita não tem nenhum valor acompanhando então coloque 1 no campo, por exemplo: x+2y-z=0, então x é 1 e z é -1. Agora, se a incógnita não existe, digite 0, por exemplo: 2y+2z=8, então x é 0.<br>";
        ativarMsg(msg, false);
    } else {
        const dd = ((aX * bY * cZ) + (aY * bZ * cX) + (aZ * bX * cY)) - ((aY * bX * cZ) + (aX * bZ * cY) + (aZ * bY * cX));
        if (dd == 0) {
            msg = "O determinante da matriz de coeficientes desta equação é zero, então não é possível aplicar a Regra de Cramer para encontrar as soluções do sistema de equações lineares 3x3. Isso ocorre porque a Regra de Cramer envolve a divisão de determinantes, e se o determinante da matriz de coeficientes for zero, a divisão por zero é indefinida e não é possível obter as soluções do sistema dessa maneira. Nesse caso, é necessário utilizar outros métodos para resolver o sistema, como a eliminação gaussiana ou a decomposição LU, por exemplo.<br>";
            ativarMsg(msg, true);

        }
        else {

            cliqueAqui.href = "SegundaTela.html"; //https://alieponzani.github.io/Iniciacao_Cientifica/SegundaTela.html
            let x = (((aN * bY * cZ) + (aY * bZ * cN) + (aZ * bN * cY)) - ((aY * bN * cZ) + (aN * bZ * cY) + (aZ * bY * cN))) / dd;
            let y = (((aX * bN * cZ) + (aN * bZ * cX) + (aZ * bX * cN)) - ((aN * bX * cZ) + (aX * bZ * cN) + (aZ * bN * cX))) / dd;
            let z = (((aX * bY * cN) + (aY * bN * cX) + (aN * bX * cY)) - ((aY * bX * cN) + (aX * bN * cY) + (aN * bY * cX))) / dd;

            let verificaLinha1 = (aX * x) + (aY * y) + (aZ * z);
            let verificaLinha2 = (bX * x) + (bY * y) + (bZ * z);
            let verificaLinha3 = (cX * x) + (cY * y) + (cZ * z);

            if (verificaLinha1 == aN && verificaLinha2 == bN && verificaLinha3 == cN) {
                let exibirResultado = document.getElementById('resultado');

                exibirResultado.innerHTML = `x = ${x} <br> y = ${y} <br> z = ${z} <br>`;
                exibirResultado.style.visibility = "visible";
                sessionStorage.meusValores = JSON.stringify(valores);
                fecharMsg(false);
            }
            else {
                msg = "Esta equação é um Sistema Possível e Indeterminado (SPI): as soluções possíveis são infinitas ou um Sistema Impossível (SI): não é possível apresentar qualquer tipo de solução.<br>";
                ativarMsg(msg, true);
            }
        }
    }

}




