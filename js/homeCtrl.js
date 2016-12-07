angular.module('riskMatch')
    .controller('homeCtrl', function($scope, $element, newsService, $location, $anchorScroll, anchorSmoothScroll, $window, $document) {
        $scope.scrollTo = function(id) {
            $location.hash(id);
            $anchorScroll();
        }

        var element = $element.find('#someId');
        $scope.getOffset = function() {
            return element.offset().top;
        };

        var home, intro, brokers, carriers, media;
        intro = $element.find('#intro').prop('offsetTop') - 150;
        brokers = $element.find('#brokers').prop('offsetTop') - 150;
        carriers = $element.find('#carriers').prop('offsetTop') - 150;
        media = $element.find('#media').prop('offsetTop') - 150;

        $scope.firstsc = 'active';


        $document.on('scroll', function() {
            if ($window.scrollY < intro) {
                $scope.firstsc = 'active';
                $scope.secondsc = null;
                $scope.thirdsc = null;
                $scope.fourthsc = null;
                $scope.fifthsc = null;
            } else if ($window.scrollY >= intro && $window.scrollY < brokers) {
                $scope.firstsc = null;
                $scope.secondsc = 'active';
                $scope.thirdsc = null;
                $scope.fourthsc = null;
                $scope.fifthsc = null;
            } else if ($window.scrollY >= brokers && $window.scrollY < carriers) {
                $scope.firstsc = null;
                $scope.secondsc = null;
                $scope.thirdsc = 'active';
                $scope.fourthsc = null;
                $scope.fifthsc = null;
            } else if (carriers <= $window.scrollY && $window.scrollY < media) {
                $scope.firstsc = null;
                $scope.secondsc = null;
                $scope.thirdsc = null;
                $scope.fourthsc = 'active';
                $scope.fifthsc = null;
            } else if ($window.scrollY >= media) {
                $scope.firstsc = null;
                $scope.secondsc = null;
                $scope.thirdsc = null;
                $scope.fourthsc = null;
                $scope.fifthsc = 'active';
            }
            // or pass this to the scope
            $scope.$apply(function() {
                $scope.pixelsScrolled = $window.scrollY;
            })
        });

        $scope.frontpagenews = newsService.frontpagenews;

        $scope.gotoElement = function(eID) {
            $location.hash(eID);

            anchorSmoothScroll.scrollTo(eID);

        };

    })
