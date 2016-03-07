angular.module('my-app').controller('DetailController', DetailController);

DetailController.$inject = ['DetailService'];

function DetailController(DetailService) {
  var vm = this;
  vm.gender = DetailService.getGender();
  vm.interests = DetailService.getInterests();
  vm.interestsLevels = DetailService.getInterestsLevels()
}
