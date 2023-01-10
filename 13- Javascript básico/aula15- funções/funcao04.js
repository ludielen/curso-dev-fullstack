// fatorial 
//5! = 5x4x3x2x1 = 120

function fatorial(numero) {
    let fat = 1

    for (let contador = numero; contador > 1; contador--) {
        fat = fat * contador
    }

    return fat
}

console.log(fatorial(5))