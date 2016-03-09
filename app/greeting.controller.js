(function () {
  'use strict';
  angular.module('my-app').controller('GreetingController', GreetingController);

  function GreetingController() {
    var vm = this;
    vm.name = "Cristi";
    vm.startYear = 2013;
    vm.info = {
      team: 'Architects',
      role: 'JsArch',
      num_members: 5
    };
    vm.toggleInfo = toggleInfo;

    vm.interests = [{
      name: 'JavaScript',
      level: 'advanced'
    }, {
      name: 'AngularJS',
      level: 'beginner'
    }, {
      name: 'Node',
      level: 'intermediate'
    }];


    function toggleInfo() {
      vm.show = !vm.show;
    }
  }

})();
