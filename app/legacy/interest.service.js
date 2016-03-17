(function() {
  'use strict';

  angular.module('legacy').factory('InterestService', InterestService);

  function InterestService() {
    var service = {};
    var interests = [{
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

    var name = 'Cristi';
    var personalInfo = {
      age: 25,
      gender: 'm'
    };

    service.getInterestList = getInterestList;
    service.getName = getName;
    service.getPersonalInfo = getPersonalInfo;

    return service;

    function getInterestList() {
      return interests;
    }

    function getName() {
      return name;
    }

    function getPersonalInfo() {
      return personalInfo;
    }

  }

})();
