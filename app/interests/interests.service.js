(function() {
  'use strict';

  angular.module('interests').service('InterestsService', InterestsService);

  InterestsService.$inject = ['$http'];
  function InterestsService($http) {
    var service = {
      getInterests: getInterests,
      getInterestById: getInterestById,
      addInterest: addInterest,
      editInterest: editInterest,
      removeInterest: removeInterest
    };

    var idGen = 4;

    var interests = [{
      id: 'js',
      name: 'JavaScript',
      level: 'Advanced',
      isImproving: true
    }, {
      id: 'ng',
      name: 'AngularJS',
      level: 'Beginnger',
      isImproving: true
    }, {
      id: 'nd',
      name: 'NodeJS',
      level: 'Intermediate',
      isImproving: false
    }];

    function getInterests() {
      return angular.copy(interests);
    }

    function getInterestById(id) {
      for (var i = 0, len = interests.length; i < len; i++) {
        if (interests[i].id === id) {
          return angular.copy(interests[i]);
        }
      }
      return false;
    }

    function addInterest(interest) {
      interest.id = generateId();
      interests.push(interest);
      return true;
    }

    function editInterest(interest) {
      for (var i = 0, len = interests.length; i < len; i++) {
        if (interests[i].id === interest.id) {
          interests[i] = interest;
          return true;
        }
      }
      return false;
    }

    function removeInterest(id) {
      for (var i = 0, len = interests.length; i < len; i++) {
        if (interests[i].id === id) {
          interests.splice(i, 1);
          return true;
        }
      }
      return false;
    }

    function generateId() {
      return idGen++;
    }

    return service;
  }
})();
