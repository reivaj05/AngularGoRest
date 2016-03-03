(function () {
    "use strict";

    angular
        .module("app.users.controllers")
        .controller("UsersController", UsersController);

    UsersController.$inject = ["Users", "$location"];

    function UsersController(Users, $location) {
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
                if (self.users.length == 0){
                    $location.path("/home");
                    toastr.info("There are no users for the moment", "Try creating one");
                }
            }

            function getUsersErrorHandler(data, status, headers, config) {
                toastr.error("There was an error retrieving the users", "Sorry!!")
            }
        }
    }
})();