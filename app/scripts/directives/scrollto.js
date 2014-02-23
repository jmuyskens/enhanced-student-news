/* stolen from http://angular-ui.github.io/ng-grid/ */

angular.module('enhancedStudentNewsApp')
    .directive('scrollto', [function(){
        return function(scope, elm, attrs) {
            elm.bind('click', function(e){
                e.preventDefault();
                if (attrs.href) {
                    attrs.scrollto = attrs.href;
                }
                var top = $(attrs.scrollto).offset().top - 25;
                $(jQuery.browser.webkit ? 'body': 'html').animate({ scrollTop: top }, 800);
            });
        };
    }]);