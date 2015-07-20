angular.module('Codegurukul')
  .controller('LoginCtrl', function($scope, Flash, $auth) {
    $scope.login = function() {
      $auth.login({ email: $scope.email, password: $scope.password })
        .then(function() {
          console.log('You have successfully logged in');
        })
        .catch(function(response) {
          console.log(response.data.message);
        });
    };
    $scope.authenticate = function(provider) {
      $auth.authenticate(provider)
        .then(function() {
          console.log('You have successfully logged in');
        })
        .catch(function(response) {
          console.log(response.data);
        });
    };
});
