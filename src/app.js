angular.module('Codegurukul', ['ngResource', 'ui.router', '720kb.socialshare', 'ngSanitize', 'flash', 'satellizer'])
  .config(function ($urlRouterProvider, $stateProvider, $locationProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
    url: '/',
    templateUrl: 'src/views/home.html',
    controller: 'HomeCtrl'
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
  $stateProvider
    .state('logout', {
    url: '/logout',
    template: null,
    controller: 'LogoutCtrl'
  })
  $stateProvider
    .state('profile', {
    url: '/profile',
    templateUrl: 'src/views/profile.html',
    controller: 'ProfileCtrl',
    resolve: {
      authenticated: function($q, $location, $auth) {
        var deferred = $q.defer();

        if (!$auth.isAuthenticated()) {
          $location.path('/login');
        } else {
          deferred.resolve();
        }

        return deferred.promise;
      }
    }
  });

})
.config(function($authProvider, config) {

    // the following shows the default values. values passed to this method
    // will extend the defaults using angular.extend
    $authProvider.facebook({
        clientId: config.clientId,
        url: config.url,
        authorizationEndpoint: config.authorizationEndpoint,
        redirectUri: config.redirectUri,
        scope: config.scope,
        scopeDelimiter: ',',
        requiredUrlParams: ['display', 'scope'],
        display: 'popup',
        type: '2.0',
        popupOptions: { width: 481, height: 269 }
      });
  
  console.log(window.location.origin || window.location.protocol + '//' + window.location.host + '/');
  });

