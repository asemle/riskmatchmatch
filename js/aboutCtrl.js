angular.module('riskMatch')
    .controller('aboutCtrl', function($scope, aboutService) {
        $scope.characters = aboutService.characters;
    })
