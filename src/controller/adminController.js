const tarefasModels = require("../model/tarefasModels")


const adminController ={

    create: (req,res) =>{
        const {title} = req.body
        const newList = tarefasModels.createList(title)

        tarefasModels.saveList(newList)
        res.redirect('../listas')
    },

    delete: (req,res) =>{
        const {id} = req.params
        tarefasModels.deleteList(id)
        res.redirect('/listas')
    },

    createTask: (req,res) =>{
        const listaId = req.params.id
        const title = req.body.title
        const newTarefa= tarefasModels.createTarefa(title,listaId)
        tarefasModels.saveTarefa(newTarefa,listaId)
        res.redirect("/")
    },

    concludeTask: (req,res) =>{
         const { listId, TaskId } = req.params

        tarefasModels.concludesTarefa(TaskId, listId)

        res.redirect(`/listas`)
    },

    undoTask:(req,res) =>{
         const { listId, TaskId } = req.params

        tarefasModels.undoTarefa(TaskId, listId)

        res.redirect(`/listas`)
    }

}

module.exports = adminController