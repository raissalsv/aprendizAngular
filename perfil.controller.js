angular
		.module("meuapp")
		.controller("PerfilController", PerfilController);


		function PerfilController (UsuarioService){
			var self = this;

			self.UsuarioService = UsuarioService;

		}

