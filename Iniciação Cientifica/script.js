
var a1 = document.getElementById('aX').value;
let b1 = document.getElementById('bY');
let c1 = document.getElementById('cZ');
let n1 = document.getElementById('dN');
let a2 = document.getElementById('eX');
let b2 = document.getElementById('fY');
let c2 = document.getElementById('gZ');
let n2 = document.getElementById('hN');
let a3 = document.getElementById('iX');
let b3 = document.getElementById('jY');
let c3 = document.getElementById('kZ');
let n3 = document.getElementById('lN');
alert(a1);
const  Calcular = ()=>   {
    
    



    const dd = ((a1.value * b2.value * c3.value) + (b1.value * c2.value * a3.value) + (c1.value * a2.value * b3.value)) - ((b1.value * a2.value * c3.value) + (a1.value * c2.value * b3.value) + (c1.value * b2.value * a3.value));
    const x1 = (((n1.value * b2.value * c3.value) + (b1.value * c2.value * n3.value) + (c1.value * n2.value * b3.value)) - ((b1.value * n2.value * c3.value) + (n1.value * c2.value * b3.value) + (c1.value * b2.value * n3.value))) / dd;
    const x2 = (((a1.value * n2.value * c3.value) + (n1.value * c2.value * a3.value) + (c1.value * a2.value * n3.value)) - ((n1.value * a2.value * c3.value) + (a1.value * c2.value * n3.value) + (c1.value * n2.value * a3.value))) / dd;
    const x3 = (((a1.value * b2.value * n3.value) + (b1.value * n2.value * a3.value) + (n1.value * a2.value * b3.value)) - ((b1.value * a2.value * n3.value) + (a1.value * n2.value * b3.value) + (n1.value * b2.value * a3.value))) / dd;

    // window.location.href = 'processo.html'

    let exibirResultado = document.getElementById('resultado')

    exibirResultado.innerHTML = `x = ${x1.toFixed()} <br> y = ${x2.toFixed()} <br> z = ${x3.toFixed()} <br>`
    exibirResultado.style.visibility = "visible";

}

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


window.onload = function () {

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