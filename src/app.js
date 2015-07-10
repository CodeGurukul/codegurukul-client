angular.module('Codegurukul', ['ngResource', 'ui.router', '720kb.socialshare', 'ngSanitize'])
  .config(function ($urlRouterProvider, $stateProvider, $locationProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
    url: '/',
    templateUrl: 'src/views/home.html'
//    controller: 'ProgramCtrl'
  })
})

  .config(function ($httpProvider) {
  $httpProvider.interceptors.push(function ($rootScope, $q, $window, $location) {
    return {
      request: function(config) {
        if ($window.localStorage.token) {
          config.headers.Authorization = $window.localStorage.token;
        }
        return config;
      },
      responseError: function(response) {
        if (response.status === 404) {
          $location.path('home');
        }
        return $q.reject(response);
      }
    }
  });
});
