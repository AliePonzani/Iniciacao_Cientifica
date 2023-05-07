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