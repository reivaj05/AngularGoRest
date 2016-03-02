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
                toastr.error('There was an error retrieving the user', 'God damn it!')
            }
        }

        function updateUser() {
            Users.updateUser(self.user).then(success, error);

            function success(data, status, headers, config) {
                toastr.success('The user has been updated', "That's what I'm talking about")
            }

            function error(data, status, headers, config) {
                toastr.error('There was an error updating the user', 'Inconceivable!')

            }
        }
    }
})();