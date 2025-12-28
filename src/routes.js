const express = require('express')
const tarefasController = require('./controller/tarefasController')
const adminController = require('./controller/adminController')
const router = express.Router()

router.get('/',tarefasController.inicio)

router.get('/listas',tarefasController.listaCompleta)
router.get('/listas/tarefas/:id',tarefasController.listaTarefas)
router.get('/listas/criarLista',tarefasController.NovaLista)

//Rotas do Admin
router.post('/listas/criarLista', adminController.create)
router.post('/listas/:id', adminController.delete)
router.post('/lista/tarefas/:id', adminController.createTask)
router.post('/listas/:listId/tarefas/:TaskId/concluir', adminController.concludeTask)
router.post('/listas/:listId/tarefas/:TaskId/desfazer', adminController.undoTask)

module.exports = router
