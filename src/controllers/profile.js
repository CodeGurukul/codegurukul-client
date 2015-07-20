angular.module('Codegurukul')
.controller('ProfileCtrl', function($scope, $auth, Profile) {

    /**
     * Get user's profile information.
     */
    $scope.getProfile = function() {
      Profile.getProfile()
        .success(function(data) {
          $scope.user = data;
        })
        .error(function(error) {
          console.log(error.message);
        });
    };


    /**
     * Update user's profile information.
     */
    $scope.updateProfile = function() {
      Profile.updateProfile({
        fullname: $scope.user.fullname,
        email: $scope.user.email
      }).then(function() {
        console.log('Profile has been updated');
      });
    };

    /**
     * Link third-party provider.
     */
    $scope.link = function(provider) {
      $auth.link(provider)
        .then(function() {
          console.log('You have successfully linked ' + provider + ' account');
        })
        .then(function() {
          $scope.getProfile();
        })
        .catch(function(response) {
          console.log(response.data.message);
        });
    };

    /**
     * Unlink third-party provider.
     */
    $scope.unlink = function(provider) {
      $auth.unlink(provider)
        .then(function() {
          console.log('You have successfully unlinked ' + provider + ' account');
        })
        .then(function() {
          $scope.getProfile();
        })
        .catch(function(response) {
          console.log(response.data ? response.data.message : 'Could not unlink ' + provider + ' account');
        });
    };

    $scope.getProfile();

  });