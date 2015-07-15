angular.module('Codegurukul', ['ngResource', 'ui.router', '720kb.socialshare', 'mgcrea.ngStrap', 'ngSanitize', 'ng-token-auth'])
  .config(function ($urlRouterProvider, $stateProvider, $locationProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
    url: '/',
    templateUrl: 'src/views/home.html'
//    controller: 'ProgramCtrl'
  })
  $stateProvider
    .state('login', {
    url: '/login',
    templateUrl: 'src/views/login.html',
    controller: 'LoginCtrl'
  })
  $stateProvider
    .state('angular-workshop', {
    url: '/angular-workshop',
    templateUrl: 'src/views/angular-workshop.html',
    controller: 'LoginCtrl'
  })
  $stateProvider
    .state('side', {
    url: '/side',
    templateUrl: 'src/views/partials/home/side.html',
    controller: 'LoginCtrl'
  })
})
.config(function($authProvider) {

    // the following shows the default values. values passed to this method
    // will extend the defaults using angular.extend

    $authProvider.configure({
      apiUrl:                  '/api',
      tokenValidationPath:     '/auth/validate_token',
      signOutUrl:              '/auth/sign_out',
      emailRegistrationPath:   '/auth',
      accountUpdatePath:       '/auth',
      accountDeletePath:       '/auth',
      confirmationSuccessUrl:  window.location.href,
      passwordResetPath:       '/auth/password',
      passwordUpdatePath:      '/auth/password',
      passwordResetSuccessUrl: window.location.href,
      emailSignInPath:         '/auth/sign_in',
      storage:                 'cookies',
      proxyIf:                 function() { return false; },
      proxyUrl:                '/proxy',
      authProviderPaths: {
        github:   '/api/auth/github',
        facebook: '/api/auth/facebook',
        google:   '/api/auth/google'
      },
      tokenFormat: {
        "access-token": "{{ token }}",
        "token-type":   "Bearer",
        "client":       "{{ clientId }}",
        "expiry":       "{{ expiry }}",
        "uid":          "{{ uid }}"
      },
      parseExpiry: function(headers) {
        // convert from UTC ruby (seconds) to UTC js (milliseconds)
        return (parseInt(headers['expiry']) * 1000) || null;
      },
      handleLoginResponse: function(response) {
        return response.data;
      },
      handleAccountResponse: function(response) {
        return response.data;
      },
      handleTokenValidationResponse: function(response) {
        return response.data;
      }
    });
  });