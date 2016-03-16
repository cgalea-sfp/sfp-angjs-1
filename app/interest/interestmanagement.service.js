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
    service.addInterest = addInterest;
    service.editInterest = editInterest;
    service.deleteInterest = deleteInterest;

    return service;

    function getInterests() {
      return interests;
    }

    function getInterestById(id) {
      for (var i = 0; i < interests.length; i++) {
        if (interests[i].id == id) {
          return interests[i];
        }
      }
      return false;
    }

    function addInterest(newInterest) {
      interests.push(newInterest);
    }

    function editInterest(newInterest) {
      for (var i = 0; i < interests.length; i++) {
        if (interests[i].id == newInterest.id) {
          interests[i] = newInterest;
        }
      }
    }

    function deleteInterest(id) {
      var index = -1;
      for (var i = 0; i < interests.length; i++) {
        if (interests[i].id == id) {
          index = i;
        }
      }
      if (index != -1) {
        interests.splice(index, 1);
      }
    }
  }
})();
