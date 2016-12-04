angular.module('riskMatch', ['ui.bootstrap', 'ui.router'])
.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('careers', {
      url:'/careers',
      templateUrl:"../views/careers.html",
      controller: 'careerCtrl'
    })
    .state('job', {
      url:'/job/:id',
      templateUrl:"../views/job.html",
      controller: 'jobCtrl'
    })
    .state('about-us', {
      url:'/about-us',
      templateUrl:"../views/about-us.html",
      // controller: 'aboutCtrl'
    })
    .state('news', {
      url:'/news',
      templateUrl:"../views/news.html",
      controller: 'newsCtrl'
    })
    $urlRouterProvider
      .otherwise('/');
});
