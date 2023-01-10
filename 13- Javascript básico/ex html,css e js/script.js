
function carregar() {
    let mensagem = document.getElementById('#mensagem')
    let img = document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()

    //let hora = 19


    document.querySelector('#mensagem').innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora <= 12) {
        img.src = './imagem/foto-manha.jpg'
        document.body.style.background = '#e2cd9f'
        //ja foi declarada la em cima.
    } else if (hora > 12 && hora <= 18) {
        img.src = './imagem/foto-tarde.jpg'
        document.body.style.background = '#b9846f'
    } else {
        img.src = './imagem/foto-noite.jpg'
        document.body.style.background = '#515154'
    }
}




