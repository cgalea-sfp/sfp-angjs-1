angular.module('my-app').factory('InterestService', InterestService);

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

  service.getInterestList = getInterestList;
  
  return service;

  function getInterestList() {
    return interests;
  }

}
