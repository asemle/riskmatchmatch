angular.module('riskMatch')
.controller('jobCtrl', function($scope, jobService, $stateParams) {
    for(var i = 0; i < jobService.jobs.length; i++) {
      if($stateParams.id == jobService.jobs[i].id) {
        $scope.job = jobService.jobs[i];
      }
    }

})
