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
            createUser: createUser,
            updateUser: updateUser,
            deleteUser: deleteUser
        }; 

        return Users;

        function getUsers() {
            return $http.get("http://localhost:8080/all/");
        }

        function getUser(id) {
            return $http.get("http://localhost:8080/user/"+id+"/edit/");
        }

        function createUser(user) {
            return $http.post("http://localhost:8080/users/create/", user);
        }

        function updateUser(user) {
            return $http.put("http://localhost:8080/users/update/", user);
        }

        function deleteUser(user) {
            return $http.post("http://localhost:8080/users/delete/", user);
        }
    }
})();