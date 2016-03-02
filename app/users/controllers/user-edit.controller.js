(function () {
    "use strict";
    angular
        .module("app.users.controllers")
        .controller("UserEditController", UserEditController);


    UserEditController.$inject = ["Users", "$stateParams"];
    
    function UserEditController(Users, $stateParams) {
        var self = this;
        self.user = null;
        self.getUser = getUser;
        self.init = init
        self.updateUser = updateUser;

        self.init($stateParams.userId);

        function init(id) {
            self.getUser(id);
        }

        function getUser(id) {
            Users.getUser(id).then(success, error);

            function success(data, status, headers, config) {
                self.user = data.data;
            }

            function error(data, status, headers, config) {
                console.error("Error retrieving the user");
            }
        }

        function updateUser() {
            Users.updateUser(self.user).then(success, error);

            function success(data, status, headers, config) {
                console.log("User updated");
            }

            function error(data, status, headers, config) {
                console.error("Error updating the user");
            }
        }
    }
})();