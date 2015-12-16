angular.module('swipeify', ['ui.router', 'swipeify.songs', 'swipeify.directives'])

  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/songview");

    $stateProvider
      .state('state1', {
        url: "/login",
        templateUrl: "./client/auth/login.html" 
      })
      .state('state2', {
        url: "/signup",
        templateUrl: "./client/auth/signup.html"
      })
      .state('state3', {
        url: "/songview",
        templateUrl: "./client/song/songview.html"
      });
  });

