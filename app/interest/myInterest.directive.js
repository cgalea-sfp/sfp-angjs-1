(function() {
  'use strict';

  angular.module('interest').directive('myInterest', myInterest);

  function myInterest() {
    return {
      restrict: 'AE',
      link: function (scope, element, attrs) {
        scope.message = "hello from directive";
        console.log(attrs.current);
        scope.interest = JSON.parse(attrs.current);
      },
      templateUrl: 'app/interest/myInterest.directive.view.html'
    };
  }
})();
