/*
    string
    number
    boolean
    array
    object
    underfined
    null
*/ 

let nome = 'ludielen'; //string
console.log(nome);

//string - concatenada
let sobrenome = 'Hernandes';
//console.log(nome + ' ' + sobrenome); // usado antigamente

//string literal
console.log(`${nome} ${Sobrenome}`); // usada atualmente.

//number
let idade = 25;
console.log(idade);
console.log(idade + 10);

// number - float
let porcentagem = 10.2;
console.log(porcentagem + '%');

// boolean (true or false)
let maiorIdade = true;
console.log(maiorIdade);

let menorIdade = false;
console.log(menorIdade);

// array, guarda varios boolean, strings, objects...

let habilidades = ['Javascript', 'PHP', 'Python'];
console.log(habilidades);
console.log(habilidade.length); // lenght =  para saber quantos items tem dentro do array.
console.log(habilidades[2]); //[] para achar a posição do item que eu quero.

// Object permite ter flexibilidade para guardar tipos de dados especificos.
let pessoa = {
    nome: 'fulano',
    sobrenome: 'da silva',
    idade: 25,
    habilidades: ['java', 'javascript', 'python']
}
console.log(pessoa.nome);
console.log(pessoa.habilidades[0]);

//JSON (JAVASCRIPT OBJECT NOTATION)

//underfined valor não definido.
let endereco
console.log(endereco);

//null
let cidade = null;
console.log(cidade);