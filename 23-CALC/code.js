"use strict";


let calSum = (x, y) => {

    let result = x + y
    alert("EL RESULTADO DE LA SUMA ES " + result)
};


let calcRslt = (x, y) => {

    let result = x - y
    alert('El resultado es ' + result)
};



let calculadora = (op, funcSum, funcRest) => {

    let x = Number(prompt('ingresa el primer digito'));
    let y = Number(prompt('ingresa el segundo digito'));

    if (op === 'sum') {
        funcSum(x, y)

    }

    if (op === 'rest') {
        funcRest(x, y)

    }

}


calculadora("sum", calSum, calcRslt)


