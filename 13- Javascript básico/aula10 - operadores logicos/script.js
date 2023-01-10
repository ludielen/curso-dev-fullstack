let inputNota1 = prompt('digite a primeira nota?');
let inputNota2 = prompt('digite a segunda nota?');

let nota1 = parseInt(inputNota1); // parseInt transforma string em numeros inteiros.
let nota2 = parseInt(inputNota2);

let mediaMinima = 7;

let media = (nota1 + nota2) / 2;
console.log(media);

if (media >= mediaMinima) {
    document.write('Ok, passou de ano')
} else if (media < mediaMinima) {
    document.write('Ops, não passou de ano!')
} 

document.write('<br>')

if(media >= mediaMinima && media === 10) {
    document.write('NOSSA!, Você foi muito bem continue assim!')
} else if(media >= mediaMinima && media === 9 ) {
    document.write('Voce mandou bem! Vamos tentar chegar na media 10?')
}