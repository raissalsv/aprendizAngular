    angular
            .module("meuapp")
            .controller("HomeController", HomeController);

    function HomeController(UsuarioService) {
        var self = this;
        self.dados = retornaDados;
        self.usuario = UsuarioService.usuario;
        console.log(UsuarioService);

        function retornaDados(usuario) {
           UsuarioService.usuario = usuario;

        }
    };