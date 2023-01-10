let nome = prompt('Digite seu nome:');

let idade = prompt('Digite sua idade:');

let maiorOuMenor

if (idade >= 18) {
    maiorOuMenor = 'MAIOR'
} else {
    maiorOuMenor = 'MENOR'
}

let mensagem = `Olá ${nome}, você é ${maiorOuMenor} de idade!`

document.write(mensagem);
