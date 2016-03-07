angular.module('my-app').controller('DetailController', DetailController);

function DetailController() {
  var vm = this;
  vm.gender = 'm';
  vm.interests = [{
    name: "JavaScript",
    level: "advanced"
  },
  {
    name: "AngularJS",
    level: "beginner"
  },
  {
    name: "NodeJS",
    level: "intermediate"
  }];
}
