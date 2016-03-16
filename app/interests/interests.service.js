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
      return $http.get('https://sfp-angjs1-back.herokuapp.com/api/interests');
    }

    function getInterestById(id) {
      return $http.get('https://sfp-angjs1-back.herokuapp.com/api/interests' + '/' + id);
    }

    function addInterest(interest) {
      interest.id = generateId();
      return $http.post('https://sfp-angjs1-back.herokuapp.com/api/interests', interest);
    }

    function editInterest(interest) {
      return $http.put('https://sfp-angjs1-back.herokuapp.com/api/interests' + '/' + interest.id, interest);
    }

    function removeInterest(id) {
      return $http.delete('https://sfp-angjs1-back.herokuapp.com/api/interests' + '/' + id);
    }

    function generateId() {
      return idGen++;
    }

    return service;
  }
})();
