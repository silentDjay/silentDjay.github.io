var Profijl = angular.module("Profijl", ['ngRoute']);

//DON'T GET IN THE WAY OF SOMEONE HIRING YOU!
//PUT YOUR NAME, EMAIL, GITHUB AND LINKEDIN ABOVE THE FOLD!

Profijl.config(function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: 'partials/home.html',
      controller: 'homepageController'
    })
    // .when('/chess', {
    //   templateUrl: 'chessboard.html'
    // })
    // .when('/clickMaps', {
    //   templateUrl: 'mappies.html'
    // })
    // .when('/memory', {
    //   templateUrl: 'memoryShame.html'
    // })
    // .when('/survey', {
    //   templateUrl: 'rubyOnRoadkill.html'
    // })
    // .when('/blueprintSpoonerism thing', {
    //   templateUrl: 'chessboard.html'
    // })
    .otherwise({
      redirectTo: '/home'
    });
});
