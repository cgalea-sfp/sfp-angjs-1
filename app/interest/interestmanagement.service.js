(function() {
  'use strict';

  angular.module('interest').factory('InterestManagementService', InterestManagementService);

  function InterestManagementService() {
    var service = {};
    var interests = [{
      id: 'js',
      name: 'JavaScript',
      level: 'advanced',
      experience: 5,
      isImproving: true
    }, {
      id: 'ng',
      name: 'AngularJS',
      level: 'beginner',
      experience: 2,
      isImproving: true
    }, {
      id: 'nd',
      name: 'Node',
      level: 'intermediate',
      experience: 1,
      isImproving: true
    }];

    service.getInterests = getInterests;
    service.getInterestById = getInterestById;

    return service;

    function getInterests() {
      return interests;
    }

    function getInterestById(id) {
      for (var i = 0; i < interest.length; i++) {
        if (interest[i].id == id) {
          return interest[i];
        }
      }
      return false;
    }
  }
})();
