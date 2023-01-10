function entrar(){
    let nome = prompt('Digite seu nome:')
    let idade = prompt('Digite sua idade:')

    let mensagemPersonalizada = ''

    if(nome === '' && idade === ''){
        document.write('preencha os campos corretamente!!')
    } else if(nome === 'thomas anderson' || nome === 'Thomas Anderson'){
        mensagemPersonalizada = 'você é personagem do filme THE MATRIX!'
    }

    let maiorOuMenor

    if (idade >= 18) {
        maiorOuMenor = 'MAIOR'
    } else {
        maiorOuMenor = 'MENOR'
    }

    let saudacao = `Olá ${nome} você é ${maiorOuMenor} de idade.`

    document.querySelector('#saudacao').innerHTML = saudacao
    document.querySelector('#mensagemPersonalizada').innerHTML = mensagemPersonalizada
}