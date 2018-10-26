angular.module('app', [])

.service('myservice', function ($http) {
  this.myFun = function () {
    return $http.get('http://localhost:8080/products')
    .then(function (posRes) {
      return posRes.data;
    },

    function (errRes) {
      return errRes;
    });
  };
})
.controller('ctrl', function ($scope, myService) {
  myService.myFun().then(function (res) {
    $scope.result = res;
  });
});
