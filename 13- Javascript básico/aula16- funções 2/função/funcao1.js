// escopo da função são as {}
// tudo que esta fora da function é possivel acessar dentro dela.
// tudo que é criado dentro da function, não é possivel acessar do lado de fora.

const idadeLudi = 25;
const idadeGabi = 27;

const idadePri = 22;
const idadeLuana = 28;

//declara a function com parametros dentro()
function sum(number1, number2){
    console.log(number1 + number2);
}
// executa a function com parametros dentro()
sum(idadeLudi, idadeGabi);
sum(idadePri, idadeLuana);

