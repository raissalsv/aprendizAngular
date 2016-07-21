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
            url: root + '/posts/1',
        }).then(function successCallback(response) {
            console.log(response.data);
            self.dadosResposta = {
                titulo: response.data.title,
                msg: response.data.body
            };
        }, function errorCallback(response) {
            console.log("ERRO: " + response);
        });
    }

    requestApi();
};