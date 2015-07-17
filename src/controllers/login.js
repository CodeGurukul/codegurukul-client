angular.module('Codegurukul')
  .controller('LoginCtrl', function($scope, Auth, Flash) {
    $scope.login = function() {
      console.log($scope.signup);
      Auth.login({ email: $scope.login.email, password: $scope.login.password });
    };
    $scope.signup = function() {
      Auth.signup({ email: $scope.signup.email, password: $scope.signup.password });
    };
    $scope.facebookLogin = function() {
      Auth.facebookLogin();
    };
    $scope.googleLogin = function() {
      Auth.googleLogin();
    };
    $scope.pageClass = 'fadeZoom';
});