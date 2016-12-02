angular.module('riskMatch', ['ui.bootstrap', 'ui.router'])
.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('careers', {
      url:'/careers',
      templateUrl: "../views/careers.html",
      // controller: 'packagesCtrl'
    })
    $urlRouterProvider
      .otherwise('/');
});
