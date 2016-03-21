(function() {
  'use strict';

  angular.module('interest').factory('InterestManagementService', InterestManagementService);

  InterestManagementService.$inject = ['$http'];

  function InterestManagementService($http) {
    var service = {};
    var interests = [{
      id: 'js',
      name: 'JavaScript',
      level: 'advanced',
      isImproving: true
    }, {
      id: 'ng',
      name: 'AngularJS',
      level: 'beginner',
      isImproving: true
    }, {
      id: 'nd',
      name: 'Node',
      level: 'intermediate',
      isImproving: false
    }];

    var currentIndex = 4;

    service.getInterests = getInterests;
    service.getInterestById = getInterestById;
    service.addInterest = addInterest;
    service.editInterest = editInterest;
    service.deleteInterest = deleteInterest;

    return service;

    function getInterests() {
      return $http.get('https://sfp-angjs1-back.herokuapp.com/api/interests', {});
    }

    function getInterestById(id) {
      return $http.get('https://sfp-angjs1-back.herokuapp.com/api/interests' + '/' + id);
    }

    function addInterest(newInterest) {
      newInterest.id = currentIndex++;
      return $http.post('https://sfp-angjs1-back.herokuapp.com/api/interests', newInterest);
    }

    function editInterest(newInterest) {
      return $http.put('https://sfp-angjs1-back.herokuapp.com/api/interests' + '/' + newInterest.id, newInterest);
    }

    function deleteInterest(id) {
      return $http.delete('https://sfp-angjs1-back.herokuapp.com/api/interests' + '/' + id);
    }
  }
})();
