(function () {
    "use strict";

    angular
        .module("app.users.controllers")
        .controller("UsersController", UsersController);

    UsersController.$inject = ['Users'];

    function UsersController(Users) {
        var self = this;

        self.users = [];
        self.getUsers = getUsers;
        self.init = init;
        
        self.init();

        function init() {
            self.getUsers();
        }

        function getUsers(){
            Users.getUsers().then(getUsersSuccessHandler, getUsersErrorHandler);

            function getUsersSuccessHandler(data, status, headers, config) {
                self.users = data.data;
            }

            function getUsersErrorHandler(data, status, headers, config) {
                toastr.error("There was an error retrieving the users", "Sorry!!")
            }
        }
    }
})();