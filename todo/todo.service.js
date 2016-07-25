angular
	.module("todo")
	.service("todoService", todoService)

	function todoService ($http){
		var self = this;
		var listaTarefas = [];

		self.incluir = incluir;
		self.excluir = excluir;
		self.finalizar = finalizar;
		self.ativa = ativa;
        self.listar = listar;
		self.listaTarefas = listaTarefas;



		function incluir(texto){

			var root = 'http://localhost:8000';

			$http({
				method: 'POST',
				url: root + '/incluir',
                data: {texto: texto},
                headers : {'Content-Type': 'application/json'}
			}).then(function successCallback(response) {
			    listar();

			}, function errorCallback(response) {
				console.log("ERRO: " + response);
			});
		}

		function excluir(tarefa){
            var root = 'http://localhost:8000';

            $http({
                method: 'POST',
                url: root + '/excluir',
                headers : {'Content-Type': 'application/json'},
                data: {
                    id:tarefa.id
                }
            }).then(function successCallback(response) {
                listar();
            }, function errorCallback(response) {
                console.log("ERRO: " + response);
            });
		}

        function listar(){
            var root = 'http://localhost:8000';

            $http({
                method: 'GET',
                url: root + '/listar',
                headers : {'Content-Type': 'application/json'}


            }).then(function successCallback(response) {
                self.listaTarefas = response.data;
            }, function errorCallback(response) {
                console.log("ERRO: " + response);
            });
        }

		function finalizar(tarefa){

            var root = 'http://localhost:8000';

            $http({
                method: 'POST',
                url: root + '/finalizar',
                data: {
                    id:tarefa.id,
                    finalizada: !tarefa.finalizada
                },
                headers : {'Content-Type': 'application/json'}

            }).then(function successCallback(response) {
                listar();
            }, function errorCallback(response) {
                console.log("ERRO: " + response);
            });
 		}

 		function ativa(tarefa){
 			return tarefa.finalizada;
 		}

	}