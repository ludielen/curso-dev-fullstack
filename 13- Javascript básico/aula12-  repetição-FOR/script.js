/* Laços de repetição FOR 

for (let contador = 0; contador <= 5000; contador++) {
    document.write('Hello world!')
}
*/

let opcoes

for (let contador = 2021; contador >= 1990; contador--) {
    opcoes += `<option>${contador}</option>`
}

document.querySelector('#ano').innerHTML = opcoes;

let lista = '';

let clientes = ['ludielen', 'gabriel', 'fulano', 'ciclano'];

for (let contador = 0; contador <= clientes.length - 1; contador++) {
    lista += `<li>${clientes[contador]} - ${contador}</li>`
}

document.querySelector('#listaClientes').innerHTML = lista;