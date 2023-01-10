// escopo da função são as {}
// tudo que esta fora da function é possivel acessar dentro dela.
// tudo que é criado dentro da function, não é possivel acessar do lado de fora.

const idadeLudi = 25;
const idadeGabi = 27;

const idadePri = 22;
const idadeLuana = 28;

//declarei outra function
function printInit(){
    console.log('Init');
    console.log('show!')
}

//declara a function com parametros dentro()
function sum(number1, number2){
    printInit(); // executei dentro de outra function
    const resultado = number1 + number2;

    //return retorna o valor de resultado jogando o valor pra fora da function.
    return resultado;
}
// executa a function com parametros dentro()
const sumLudiGabi = sum(idadeLudi, idadeGabi);

console.log(`ludi e gabi: ${sumLudiGabi}`);

const sumPriLuana = sum(idadePri, idadeLuana);

console.log(`pri e luana: ${sumPriLuana}`);

