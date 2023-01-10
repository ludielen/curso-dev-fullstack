function parimpar(numero) {
    if (numero % 2 === 0) {
        return 'par'
    } else {
        return 'impar'
    }
}

let resultado = parimpar(4)
console.log(resultado)