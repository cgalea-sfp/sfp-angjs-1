(function() {
  'use strict';

  angular.module('interests').directive('myGreeting', myGreeting);

  function myGreeting() {
    return {
      restrict: 'AE',
      scope: {
        message : '@',
        name: '=',
        sayGreeting: '&'
      },
      templateUrl: 'app/interests/mygreeting.directive.view.html',
      link: function (scope, element, attrs) {
      }
    };
  }
})();
