angular.module('Codegurukul')
.controller('LogoutCtrl', function($auth, $alert) {
    if (!$auth.isAuthenticated()) {
        return;
    }
    $auth.logout()
      .then(function() {
        console.log('You have been logged out');
      });
  });