angular.module('riskMatch')
    .controller('careerCtrl', function($scope, jobService) {
        $scope.jobs = jobService.jobs;
        $scope.shortenD = function(str) {
            if (str.length > 309) {
                str = str.slice(0, 309) + "...";
            }
            return str;
        }
    })
