angular
	.module("todo")
	.service("todoService", todoService)

	function todoService (){
		var self = this;
		var listaTarefas = [];

		self.incluir = incluir;
		self.excluir = excluir;
		self.finalizar = finalizar;
		self.ativa = ativa;
		self.listaTarefas = listaTarefas;



		function incluir(texto){
			
			var tarefa = {
				texto: texto,
				id: listaTarefas.length + 1,
				finalizada: false 
			};
			listaTarefas.push(tarefa);
		}

		function excluir(tarefa){
			idTarefa = listaTarefas.indexOf(tarefa);
			listaTarefas.splice(idTarefa,1);
		}

		function finalizar(tarefa){
			idTarefa = listaTarefas.indexOf(tarefa);
			listaTarefas[idTarefa].finalizada = !listaTarefas[idTarefa].finalizada;
			console.log(listaTarefas[idTarefa].finalizada);
 		}

 		function ativa(tarefa){
 			idTarefa = listaTarefas.indexOf(tarefa);
 			return listaTarefas[idTarefa].finalizada;
 		}

	}