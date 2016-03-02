(function () {
    "use strict";
    angular
        .module("app.users.controllers")
        .controller("UserCreateController", UserCreateController);

    UserCreateController.$inject = ["Users", "$location"];

    function UserCreateController(Users) {
        var self = this;

        self.user = {
            name: "",
            lastName: "",
            email: "",
            username: ""
        };

        self.createUser = createUser;

        function createUser() {
            Users.createUser(self.user).then(success, error);

            function success(data, status, headers, config) {
                $location.path("/all");
                toastr.success("A new user has been created", "YAY!!");
            }

            function error(data, status, headers, config){
                toastr.error("There was an error trying to create the new user", "This sucks!!")
            }
        }
    }
})();