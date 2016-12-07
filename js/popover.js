angular.module('riskMatch')
    .directive('loginPopover', function() {

        return {
            restrict: 'A',

            link: function(scope, el, attrs) {
                scope.label = attrs.popoverLabel;
                $(el).popover({
                    trigger: 'click',
                    html: true,
                    content: attrs.popoverTemplate,
                    placement: attrs.popoverPlacement
                })
            }
        }
    })
