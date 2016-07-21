
  angular.module('meuapp')
    .config(routesConfig);

  function routesConfig($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/melancia");

    $stateProvider
      .state('app', {
        abstract: true,
        views: {
          "conteudo": {
            templateUrl: "home.html"
          }
        }
      })
      .state('app.home', {
        url: "/melancia",
        views: {
          "conteudo@": {
            templateUrl: "home.html",
            controller: "HomeController",
            controllerAs: "home"
          }
        }
      })
      .state('app.perfil', {
        url: "/perfil",
        views: {
          "conteudo@": {
            templateUrl: "perfil.html",
            controller: "PerfilController",
            controllerAs: "perfil"
          }
        }
      })
        .state('app.editar', {
          url: "/editar",
          views: {
            "conteudo@": {
              templateUrl: "editar.html",
              controller: "ApiController",
              controllerAs: "editar"
            }
          }
        });
  }
