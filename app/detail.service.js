angular.module('my-app').service('DetailService', DetailService);

function DetailService() {
  var service = {
    getGender: getGender,
    getInterests: getInterests,
    getName: getName,
    calculateTimeInSFP: calculateTimeInSFP,
    getInterestsLevels: getInterestsLevels
  };

  var year = 2013;
  var gender = 'm';
  var name = 'Cristi';
  var interestsLevels = ['Beginner', 'Intermediate', 'Advanced'];
  var interests = [{
    name: "JavaScript",
    level: interestsLevels[2]
  },
  {
    name: "AngularJS",
    level: interestsLevels[0]
  },
  {
    name: "NodeJS",
    level: interestsLevels[1]
  }];

  function getGender() {
    return gender;
  }

  function getInterests() {
    return interests;
  }

  function getName() {
    return name;
  }

  function calculateTimeInSFP(currentYear) {
    return currentYear - year;
  }

  function getInterestsLevels() {
    return interestsLevels;
  }
  return service;
}
