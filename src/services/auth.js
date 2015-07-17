angular.module('Codegurukul')
  .factory('Auth', function($http, $location, $rootScope, $window, Flash) {
    var token = $window.localStorage.token;
    if (token) {
      var payload = JSON.parse($window.atob(token.split('.')[1]));
      $rootScope.currentUser = payload.user;
    }

    // Asynchronously initialize Facebook SDK
    $window.fbAsyncInit = function() {
      FB.init({
        appId: '631388166902710',
        responseType: 'token',
        version: 'v2.0'
      });
    };

    // Asynchronously load Facebook SDK
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    // Asynchronously load Google+ SDK
    (function() {
      var po = document.createElement('script');
      po.type = 'text/javascript';
      po.async = true;
      po.src = 'https://apis.google.com/js/client:plusone.js';
      var s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(po, s);
    })();

    return {
      facebookLogin: function() {
        FB.login(function(response) {
          FB.api('/me', function(profile) {
            var data = {
              signedRequest: response.authResponse.signedRequest,
              profile: profile
            };
            $http.post('/api/auth/facebook', data).success(function(token) {
              var payload = JSON.parse($window.atob(token));
              $window.localStorage.token = token;
              $rootScope.currentUser = payload.user;
              $location.path('/');
              var message = '<strong>Cheers!</strong> You have successfully signed-in with Facebook.';
              Flash.create('success', message);
            });
          });
        }, { scope: 'email, public_profile' });
      },
      googleLogin: function() {
        gapi.auth.authorize({
          client_id: '55262601920-5jhf3qth89okujq6a7lh8bqc9epr8475.apps.googleusercontent.com',
          scope: 'https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/plus.profile.emails.read',
          immediate: false
        }, function(token) {
          gapi.client.load('plus', 'v1', function() {
            var request = gapi.client.plus.people.get({
              userId: 'me'
            });
            request.execute(function(authData) {
              $http.post('/api/auth/google', { profile: authData }).success(function(token) {
                var payload = JSON.parse($window.atob(token.split('.')[1]));
                $window.localStorage.token = token;
                $rootScope.currentUser = payload.user;
                $location.path('/');
                var message = '<strong>Cheers!</strong> You have successfully signed-in with Google.';
                Flash.create('success', message);
              });
            });
          });
        });
      },
      login: function(user) {
        console.log(user);
        return $http.post('/api/auth/login', user)
          .success(function(data) {
            $window.localStorage.token = data.token;
            var payload = JSON.parse($window.atob(data.token.split('.')[1]));
            $rootScope.currentUser = payload.user;
            $location.path('/');
            var message = '<strong>Cheers!</strong> You have successfully logged in.';
            Flash.create('success', message);
          })
          .error(function() {
            delete $window.localStorage.token;
            var message = '<strong>Error!</strong> Invalid username or password.';
            Flash.create('danger', message);
          });
      },
      signup: function(user) {
        return $http.post('/api/auth/signup', user)
          .success(function() {
            $location.path('/login');
            var message = '<strong>Congratulations!</strong> Your account has been created.';
            Flash.create('success', message); 
          })
          .error(function(response) {
            var message = 'Error!';
            Flash.create('danger', message);
          });
      },
      logout: function() {
        delete $window.localStorage.token;
        $rootScope.currentUser = null;
        var message = 'You have been logged out.';
        Flash.create('info', message); 
      }
    };
  });      