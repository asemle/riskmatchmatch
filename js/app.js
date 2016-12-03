angular.module('riskMatch', ['ui.bootstrap', 'ui.router'])
.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('careers', {
      url:'/careers',
      templateUrl: "../views/careers.html",
      // controller: 'packagesCtrl'
    })
    .state('about', {
      url:'/about-us',
      templateUrl: "../views/about-us.html",
      // controller: 'aboutCtrl'
    })
    $urlRouterProvider
      .otherwise('/');
});
