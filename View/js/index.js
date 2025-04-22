import { animes } from "./bd.js"

// Selecionar os botões
let btns = document.querySelectorAll('button.botoes')

// Selecionar o elemento body por causa da imagem
let bodyElement = document.querySelector('body')

// Selecionar os elementos HTML que serão atualizados (título, descrição e imagem de fundo)
let tituloElement = document.querySelector('h1')
let descricaoElement = document.querySelector('p')

// Adicionar o event listener a cada botão
btns.forEach(btn => {
    btn.onclick = pressButton
})

function pressButton(e) {
    // Captura o valor do botão para saber qual página é
    const botaoValor = parseInt(e.target.value) - 1

    if (botaoValor >= 0 && botaoValor < animes.length) {
        // Acessa o objeto do anime correspondente
        const animeSelecionado = animes[botaoValor]

        // Atualiza o conteúdo da página
        tituloElement.textContent = animeSelecionado.titulo
        descricaoElement.textContent = animeSelecionado.descricao

        // Atualiza a imagem de fundo do body
        bodyElement.style.backgroundImage = `url('${animeSelecionado.img}')`
        bodyElement.style.backgroundSize = 'cover'
        bodyElement.style.backgroundRepeat = 'no-repeat'
        bodyElement.style.backgroundPosition = 'right top'
    } else {
        console.error("Índice do botão fora dos limites do array animes.")
    }
}

// Para exibir One Piece assim que a página carregar
document.addEventListener('DOMContentLoaded', () => {
    if (animes.length > 0) {
        tituloElement.textContent = animes[0].titulo
        descricaoElement.textContent = animes[0].descricao
        bodyElement.style.backgroundImage = `url('${animes[0].img}')`
        bodyElement.style.backgroundSize = 'cover'
        bodyElement.style.backgroundRepeat = 'no-repeat'
    }
});