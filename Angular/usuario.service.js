angular
		.module("meuapp")
		.service("UsuarioService", UsuarioService);


		function UsuarioService (){
			var self = this;
  
       		self.usuario = {
                nome: null,
                email: null,
                telefone: null
        	};
		}

