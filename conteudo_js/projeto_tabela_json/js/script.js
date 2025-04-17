import { pessoas } from "./bd.js";

// Selecionar todas as Trs da tabela
let trs = document.querySelectorAll("tr")
console.log(pessoas)

for (let index = 1; index < trs.length; index++) {
      let tr = trs[index];
    
      // criar  novaTD
    tr = criarFilho(tr)

    // selecionar os filhos
    let filhos = tr.children
    let vetor = Array.from(filhos)    

    editarFilhos(vetor, (index - 1), pessoas)   
}


function editarFilhos(filhos, index, pessoas){
    filhos[0].textContent = pessoas[index].codigo 
    filhos[1].textContent = pessoas[index].nome
    filhos[2].textContent = (pessoas[index].altura) / 100

    filhos[3].textContent = pessoas[index].peso
    filhos[4].textContent = pessoas[index].imc
    filhos[5].textContent = pessoas[index].classificacao
}

function criarFilho(tr){
    // criar tag
    let novaTD = document.createElement('td')
    tr.appendChild(novaTD)
    return tr
}

