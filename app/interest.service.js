(function () {
  angular.module('my-app').factory('InterestService', InterestService);

  function InterestService() {
    var service = {};
    var interests = [{
      name: 'JavaScript',
      level: 'advanced'
    }, {
      name: 'AngularJS',
      level: 'beginner'
    }, {
      name: 'Node',
      level: 'intermediate'
    }];

    service.getInterests = getInterests;

    return service;

    function getInterests() {
      return interests;
    }
  }
})();
