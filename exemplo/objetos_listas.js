"use strict";
var pessoal = {
    nome: "Mariana",
    idade: 29,
    profissao: "desenvolvedora"
};
pessoal.idade = 20;
var andre = {
    nome: "Andre",
    idade: 29,
    profissao: "Pintor"
};
var paula = {
    nome: "Paula",
    idade: 23,
    profissao: "Desenvolvedora"
};
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professpra"] = 0] = "Professpra";
    Profissao[Profissao["atriz"] = 1] = "atriz";
    Profissao[Profissao["desenvolvedora"] = 2] = "desenvolvedora";
    Profissao[Profissao["jogadora"] = 3] = "jogadora";
})(Profissao || (Profissao = {}));
var vanessa = {
    nome: "Vanessa",
    idade: 22,
    profissao: "Pilota"
};
var viviane = {
    nome: "Viviane",
    idade: 43,
    profissao: Profissao.atriz
};
var rodrigo = {
    nome: "Rodrigo",
    idade: 22,
    materiais: ["inglês", "programação Java"],
};
function listar(lista) {
    for (var _i = 0, lista_1 = lista; _i < lista_1.length; _i++) {
        var item = lista_1[_i];
        console.log(' ', item);
    }
}
listar(rodrigo.materiais);
