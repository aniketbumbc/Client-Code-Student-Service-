(function () {
    'use strict';
    angular
        .module('TestApp')
        .controller('TestController',main);

    function main($scope, $http) {
        $scope.test = "Welcome WCF Service";
        $http.get('http://localhost:9090/StudentService/StudentInfo').then(function (response) {
            $scope.data = response.data;
            for (var i = 0; i < $scope.data.length; i++) {
                var currentDate = $scope.data[i].BirthDate;
                var newDate = moment(currentDate).format('MM/DD/YYYY');
                $scope.data[i].BirthDate = newDate;
            }
        });
        
    $scope.getData = function (inputValue) {
            $http.get('http://localhost:9090/StudentService/GetStudent?id='+inputValue).
            success(function (response) {
              //var nameStudent =  JSON.stringify(response);
                $scope.name = response.Name + " In ";
                $scope.school = response.School + " And Fees is ";
                $scope.fees = "$" +response.Fees;
            });
        }
    }
})();