// continuação FOR of
//length = quantidade

let listaClientes = [

    {
        nome: 'Ludielen',
        idade: 25,
        linguagens: ['javascript', 'python', 'java']
    },
    {
        nome: 'Gabriel',
        idade: 27,
        linguagens: ['java', 'kotlin', 'ruby']
    },
    {
        nome: 'Fulano',
        idade: 32,
        linguagens: ['c#', 'c++', 'c']
    }
]

/*for (let contador = 0; contador < clientes.length; contador++) {
    console.log(clientes[contador].nome)
}*/

let htmlClientes = '';

for (let cliente of listaClientes) {

    let listaLinguagens = ''

    for(let linguagem of cliente.linguagens) {
        listaLinguagens += `<li>${linguagem}</li>`

    }
    htmlClientes += `
        <li>
            <b>Nome:</b> ${cliente.nome} <br>
            <b>Idade:</b> ${cliente.idade} <br>
            <b>Linguagens:</b><br>
            <ul>
                ${listaLinguagens}
            </ul>
        </li> 
    `
}   

document.querySelector('#listaClientes').innerHTML = htmlClientes