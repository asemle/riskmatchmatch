angular.module('riskMatch')
.controller('indexCtrl', function($scope) {
  $scope.login = '<div class="login-box">' + '<p>To find your Login Screen, enter your companys name</p>' + '<input class="loginInput" type="text">' + '<a ui-sref="news" target="blank" class="login_link">Go to Login Screen</a>' + '<p class="tip"><b>Tip:</b> Bookmark Your Login Screen for easy access</p>' + '</div>';
})
