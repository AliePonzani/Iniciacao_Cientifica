var valores = [];

const Calcular = () => {
    if(sessionStorage.meusValores){
        valores = JSON.parse(sessionStorage.getItem('meusValores'));
        alert("não há valor a ser retornado");
    }

    var a1 = document.getElementById('aX').value;
    var b1 = document.getElementById('bY').value;
    var c1 = document.getElementById('cZ').value;
    var n1 = document.getElementById('dN').value;
    var a2 = document.getElementById('eX').value;
    var b2 = document.getElementById('fY').value;
    var c2 = document.getElementById('gZ').value;
    var n2 = document.getElementById('hN').value;
    var a3 = document.getElementById('iX').value;
    var b3 = document.getElementById('jY').value;
    var c3 = document.getElementById('kZ').value;
    var n3 = document.getElementById('lN').value;

    valores = {a1: a1, a2: a2, a3: a3, b1: b1, b2: b2, b3: b3, c1: c1, c2: c2, c3: c3, n1: n1, n2: n2, n3: n3};

    sessionStorage.meusValores = JSON.stringify(valores);

    // const dd = ((a1 * b2 * c3) + (b1 * c2 * a3) + (c1 * a2 * b3)) - ((b1 * a2 * c3) + (a1 * c2 * b3) + (c1 * b2 * a3));
    // const x1 = (((n1 * b2 * c3) + (b1 * c2 * n3) + (c1 * n2 * b3)) - ((b1 * n2 * c3) + (n1 * c2 * b3) + (c1 * b2 * n3))) / dd;
    // const x2 = (((a1 * n2 * c3) + (n1 * c2 * a3) + (c1 * a2 * n3)) - ((n1 * a2 * c3) + (a1 * c2 * n3) + (c1 * n2 * a3))) / dd;
    // const x3 = (((a1 * b2 * n3) + (b1 * n2 * a3) + (n1 * a2 * b3)) - ((b1 * a2 * n3) + (a1 * n2 * b3) + (n1 * b2 * a3))) / dd;

    // // window.location.href = 'processo.html'

    // let exibirResultado = document.getElementById('resultado');

    // exibirResultado.innerHTML = `x = ${x1.toFixed()} <br> y = ${x2.toFixed()} <br> z = ${x3.toFixed()} <br>`
    // exibirResultado.style.visibility = "visible";

    
}



