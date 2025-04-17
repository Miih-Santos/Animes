let pessoas = [
    { "codigo": 1, "nome": "Ana Souza", "altura": 162, "peso": 58.5 },
    { "codigo": 2, "nome": "Bruno Lima", "altura": 175, "peso": 72.3 },
    { "codigo": 3, "nome": "Carlos Menezes", "altura": 180, "peso": 80.2 },
    { "codigo": 4, "nome": "Daniela Rocha", "altura": 168, "peso": 64.7 },
    { "codigo": 5, "nome": "Eduardo Silva", "altura": 185, "peso": 85.0 },
    { "codigo": 6, "nome": "Fernanda Alves", "altura": 159, "peso": 56.8 },
    { "codigo": 7, "nome": "Gustavo Martins", "altura": 178, "peso": 76.4 },
    { "codigo": 8, "nome": "Helena Castro", "altura": 170, "peso": 61.9 },
    { "codigo": 9, "nome": "Igor Ribeiro", "altura": 182, "peso": 78.6 },
    { "codigo": 10, "nome": "Juliana Costa", "altura": 165, "peso": 60.3 },
    { "codigo": 11, "nome": "Kleber Duarte", "altura": 174, "peso": 74.0 },
    { "codigo": 12, "nome": "Larissa Mendes", "altura": 160, "peso": 55.1 },
    { "codigo": 13, "nome": "Marcos Vinícius", "altura": 179, "peso": 81.7 },
    { "codigo": 14, "nome": "Natália Bernardes", "altura": 167, "peso": 63.5 },
    { "codigo": 15, "nome": "Otávio Moreira", "altura": 176, "peso": 77.2 },
    { "codigo": 16, "nome": "Patrícia Neves", "altura": 158, "peso": 54.9 },
    { "codigo": 17, "nome": "Rafael Borges", "altura": 181, "peso": 79.8 },
    { "codigo": 18, "nome": "Sabrina Lopes", "altura": 162, "peso": 59.6 },
    { "codigo": 19, "nome": "Tiago Ferreira", "altura": 177, "peso": 75.4 },
    { "codigo": 20, "nome": "Vanessa Dias", "altura": 169, "peso": 62.0 }
  ]

function calcularImc(pessoas){
    pessoas.map(p => {
        let peso = p.peso
        let altura = (p.altura) / 100
        p.imc = parseFloat( (peso / (altura^2)).toFixed(2))
    })   
    return pessoas
}

function classificarIMC(pessoas){
    pessoas.map(p => {
        if(p.imc < 18.5){
            console.log("Deu RUim")
            p.classificacao = "Baixo Peso"
        } else if(p.imc < 25){
            p.classificacao = "Peso Ideal"
        } else if(p.imc < 30){
             p.classificacao = "Sobrepeso"
        } else if(p.imc < 35){
            p.classificacao = "Obesidade I"
        } else if(p.imc <40){
             p.classificacao = "Obesidade Nível II"
        } else {
             p.classificacao = "Obesidade Mórbida"
        }
    }) 
    return pessoas
}

pessoas = calcularImc(pessoas)
pessoas = classificarIMC(pessoas)


export {pessoas}