var valores = [];

const Calcular = () => {

    if (sessionStorage.meusValores) {
        valores = JSON.parse(sessionStorage.getItem('meusValores'));
    }

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

    valores = { aX: aX, bX: bX, cX: cX, aY: aY, bY: bY, cY: cY, aZ: aZ, bZ: bZ, cZ: cZ, aN: aN, bN: bN, cN: cN };

    for (var i in valores) {
        if (!valores[i]) {
            alert("Todos os campos devem ser preenchidos!");
            break;
        }
        else {
            const cliqueAqui = document.querySelector('#cliqueAqui');
            cliqueAqui.href = "../Segunda_Tela/segundaTela.html";
        }
    }

    sessionStorage.meusValores = JSON.stringify(valores);

    // const dd = ((aX * bY * cZ) + (aY * bZ * cX) + (aZ * bX * cY)) - ((aY * bX * cZ) + (aX * bZ * cY) + (aZ * bY * cX));
    // const x1 = (((aN * bY * cZ) + (aY * bZ * cN) + (aZ * bN * cY)) - ((aY * bN * cZ) + (aN * bZ * cY) + (aZ * bY * cN))) / dd;
    // const x2 = (((aX * bN * cZ) + (aN * bZ * cX) + (aZ * bX * cN)) - ((aN * bX * cZ) + (aX * bZ * cN) + (aZ * bN * cX))) / dd;
    // const x3 = (((aX * bY * cN) + (aY * bN * cX) + (aN * bX * cY)) - ((aY * bX * cN) + (aX * bN * cY) + (aN * bY * cX))) / dd;

    // // window.location.href = 'processo.html'

    // let exibirResultado = document.getElementById('resultado');

    // exibirResultado.innerHTML = `x = ${x1.toFixed()} <br> y = ${x2.toFixed()} <br> z = ${x3.toFixed()} <br>`
    // exibirResultado.style.visibility = "visible";


}



