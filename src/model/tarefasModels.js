let listas =[{title: "Lista de Casa",  status: false,id: "1", tarefas: [ {title: "Lavar Louça", status: false, id:"30", ListaId:1}, {title: "Varrer a casa", status: false, id:"70",ListaId:"1"}]},
{title: "Lista de Escola",  status: false, id: "2", tarefas: [{title: "Exercícios", status: false, id:"90", ListaId:"2"}]}]

const tarefasModels ={
    createList(title){
        const lista = {
            title: title,
            status: false,
            id: Date.now().toString(),
            tarefas: [],
        }
        return lista
    },

    deleteList(id){
        listas = listas.filter(lista => lista.id !== id)
    },

    saveList(lista){
        listas.unshift(lista)
    },

    createTarefa(title,listaId){
        const tarefa = {
            title: title,
            status: false,
            id: Date.now().toString(),
            ListaId:listaId.toString()
        }
        console.log(listas)
        return tarefa
    },

    saveTarefa(tarefa, listaId){
        const lista = listas.find(lista => lista.id === listaId)
          if (!lista) {
        throw new Error(`Lista com ID "${listaId}" não encontrada.`);
    }

    if (!Array.isArray(lista.tarefas)) {
        lista.tarefas = [];
    }
        lista.tarefas.unshift(tarefa)
    },

    deleteTarefa(tarefaId, listaId){
        const lista = listas.find(lista => lista.id === listaId) 
        if (!lista) {
        console.error("Lista não encontrada");
        return;
    }
        lista.tarefas = lista.tarefas.filter(tarefa => tarefa.id !== tarefaId)
    },

    concludesTarefa(tarefaId, listaId){
        const lista = listas.find(list => list.id === listaId) 
        const tarefa = lista.tarefas.find(task => task.id === tarefaId)
        tarefa.status = true
    },

    undoTarefa(tarefaId, listaId){
        const lista = listas.find(list => list.id === listaId) 
        const tarefa = lista.tarefas.find(task => task.id === tarefaId)
        tarefa.status = false
    },

     getAllListas() {
        return listas;
    }, 

    getListastById(id){
        return listas.find(lista => lista.id === id)
    }
}

module.exports = tarefasModels
//Tarefa{title: "", status:false, id:""}
//List{title: "", Tarefas:[], id:"" }