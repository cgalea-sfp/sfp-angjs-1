(function () {
  'use strict'

  angular.module('interests').service('InterestsService', InterestsService);

  function InterestsService() {
    var service = {
      getInterests: getInterests
    };

    var interests = [{
      id: 'js',
      name: 'JavaScript',
      level: 'Advanced',
      isImproving: true,
    },
    {
      id: 'ng',
      name: 'AngularJS',
      level: 'Beginnger',
      isImproving: true,
    },
    {
      id: 'nd',
      name: 'NodeJS',
      level: 'Intermediate',
      isImproving: false,
    }];

    function getInterests () {
      return interests;
    }

    return service;
  }
})();
