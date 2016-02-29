(function () {
    "use strict";

    angular
        .module("app.routes", [
            "ui.route"
        ])
        .config(config);

    config.$inject = ["$stateProvider", "$urlRouterProvider"];
    
    function config($stateProvider, $urlRouterProvider) {
         //
      $urlRouterProvider.otherwise("/all");

      $stateProvider
        .state('all', {
          url: "/all",
          templateUrl: "templates/users/users.html"
          controller: "UsersController",
          controllerAs: "users"
        });
        /*
        .state('state1.list', {
          url: "/list",
          templateUrl: "partials/state1.list.html",
          controller: function($scope) {
            $scope.items = ["A", "List", "Of", "Items"];
          }
        })
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