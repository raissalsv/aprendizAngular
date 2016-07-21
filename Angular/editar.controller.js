angular
    .module("meuapp")
    .controller("ApiController", ApiController);

function ApiController(UsuarioService, $http) {
    var self = this;
    self.usuario = UsuarioService.usuario;


    function requestApi() {
        var root = 'http://jsonplaceholder.typicode.com';

        $http({
            method: 'GET',
            url: root + '/users',
        }).then(function successCallback(response) {
           // self.dadosResposta = {
           //     name: response.data.name,
           //     username: response.data.username,
           //     email: response.data.email
           // };
           console.log(response.data);
            self.retorno = response.data;
        }, function errorCallback(response) {
            console.log("ERRO: " + response);
        });
    }

    requestApi();
};