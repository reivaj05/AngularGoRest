(function () {
    "use strict";

    angular
        .module("app.routes", [
            "ui.router"
        ])
        .config(config);

    config.$inject = ["$stateProvider", "$urlRouterProvider"];
    
    function config($stateProvider, $urlRouterProvider) {
         //
      $urlRouterProvider.otherwise("/all");

      $stateProvider
        .state('all', {
          url: "/all",
          templateUrl: "app/templates/users/users.html",
          controller: "UsersController",
          controllerAs: "vm"
        })
        .state('userEdit', {
          url: "/user/{userId:[0-9]+}/edit",
          templateUrl: "app/templates/users/user-edit.html",
          controller: "UserEditController",
          controllerAs: "vm"
        });/*
        .state('state2', {
          url: "/state2",
          templateUrl: "partials/state2.html"
        })
        .state('state2.list', {
          url: "/list",
          templateUrl: "partials/state2.list.html",
          controller: function($scope) {
            $scope.things = ["A", "Set", "Of", "Things"];
          }
        });    */
    }
})();