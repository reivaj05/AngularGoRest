(function () {
    "use strict";
    angular
        .module("app.users.controllers")
        .controller("UserEditController", UserEditController);


    UserEditController.$inject = ["Users", "$stateParams", "$location", "ngDialog"];
    
    function UserEditController(Users, $stateParams, $location, ngDialog) {
        var self = this;
        self.user = null;
        self.isEditing = true;
        self.init = init
        self.getUser = getUser;
        self.updateUser = updateUser;
        self.deleteUser = deleteUser;
        self.showModalDeleteUser = showModalDeleteUser;


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
                toastr.error("There was an error retrieving the user", "God damn it!");
            }
        }

        function updateUser() {
            Users.updateUser(self.user).then(success, error);

            function success(data, status, headers, config) {
                $location.path("/all");
                toastr.success("The user has been updated", "That's what I'm talking about");
            }

            function error(data, status, headers, config) {
                toastr.error("There was an error updating the user", "Inconceivable!");

            }
        }

        function showModalDeleteUser() {
            ngDialog.open({
                template: 'app/templates/users/user-delete.html',
                controller: "UserEditController",
                controllerAs: "vm",
                className: 'ngdialog-theme-default'
            });
        }

        function deleteUser() {
            Users.deleteUser(self.user).then(success, error);

            function success(data, status, headers, config) {
                
                $location.path("/all");
                toastr.success('The user has been deleted', "Nooo, please come back!!!");
            }

            function error(data, status, headers, config) {
                toastr.error("Hahaha the user wasn't deleted", "And the evil wins!");
            }
        }
    }
})();