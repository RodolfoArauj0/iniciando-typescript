const pessoal = {
    nome: "Mariana",
    idade: 29,
    profissao: "desenvolvedora"
}

pessoal.idade = 20;

const andre: { nome: string, idade: number, profissao: string } = {
    nome: "Andre",
    idade: 29,
    profissao: "Pintor"
}

const paula: { nome: string, idade: number, profissao: string } = {
    nome: "Paula",
    idade: 23,
    profissao: "Desenvolvedora"
}

enum Profissao {
    Professpra, atriz, desenvolvedora, jogadora
}

const vanessa: { nome: string, idade: number, profissao: string } = {
    nome: "Vanessa",
    idade: 22,
    profissao: "Pilota"
}


interface Pessoa {
    nome: string,
    idade: number,
    profissao?: Profissao
}

const viviane: Pessoa = {
    nome: "Viviane",
    idade: 43,
    profissao: Profissao.atriz
}

interface Estudante extends Pessoa {
    materiais: string[]
}

const rodrigo: Estudante = {
    nome: "Rodrigo",
    idade: 22,
    materiais: ["inglês", "programação Java"],
}

function listar(lista: string) {
    for (const item of lista) {
        console.log(' ', item)
    }
}

listar(rodrigo.materiais)