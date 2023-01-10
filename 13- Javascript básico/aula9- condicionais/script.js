/*
condicionais permitem determinar condições para funcionamento e direção do nosso
programa 

IF, ELSE
*/

/*
let idade = prompt('Digite sua idade') // não é mais utilizado.

if (idade >= 18) {
    document.write('Ok, você é maior de idade');
} else if(idade === 15) {
    document.write('Você tem 15 anos!');
} else {
    document.write('Você não pode acessar!')
}
*/

let nome = prompt ('digite seu nome');

if (nome === 'ludielen' || nome === 'Ludielen') {
    document.write(`Olá ${nome}, seja bem vindo!`)
} else {
    document.write('Você não tem acesso de administrador!')
}
