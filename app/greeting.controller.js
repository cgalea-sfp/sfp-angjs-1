(function() {
  'use strict';
  
  angular.module('my-app').controller('GreetingController', GreetingController);

  function GreetingController() {
    var vm = this;
    vm.name = 'Cristi';
    vm.personalInfo = {
      age: 25,
      gender: 'm'
    };
    vm.togglePersonalInfo = togglePersonalInfo;
    vm.alertInfo = alertInfo;
    vm.isVisible = true;

    vm.interests = [{
      name: 'JavaScript',
      level: 'Advanced',
      isImproving: true
    },
    {
      name: 'AngularJS',
      level: 'Beginner',
      isImproving: true
    },
    {
      name: 'NET',
      level: 'Intermediate',
      isImproving: false
    }];

    function alertInfo(param) {
      alert(JSON.stringify(param));
    }

    function togglePersonalInfo() {
      vm.isVisible = !vm.isVisible;
    }
  }
})();
