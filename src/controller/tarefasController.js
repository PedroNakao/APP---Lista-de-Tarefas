const tarefasModels = require("../model/tarefasModels");

const tarefasController = {
    inicio: (req,res) =>{
        res.render('inicio')
    },

    listaCompleta: (req,res) =>{
        const listas = tarefasModels.getAllListas()
        res.render('listaCompleta', {listas})
    },

    listaTarefas: (req,res) =>{
        const id = req.params.id
         const lista = tarefasModels.getListastById(id)
         res.render('tarefas', {lista})
    },

    NovaLista: (req,res) =>{
        res.render('criarNovaLista')
    }



}

module.exports = tarefasController