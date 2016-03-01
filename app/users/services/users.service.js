(function () {
    "use strict";
    angular
        .module("app.users.services")
        .factory("Users", Users);

    Users.$inject = ['$http'];
    
    function Users($http) {
        var Users = {
            getUsers: getUsers,
            getUser: getUser,
            createUser: createUser
        }; 

        return Users;

        function getUsers() {
            return $http.get("http://localhost:8080/all/");
        }

        function getUser(id) {
            return $http.get("http://localhost:8080/user/"+id+"/edit");
        }

        function createUser(user) {
            return;
        }
    }
})();