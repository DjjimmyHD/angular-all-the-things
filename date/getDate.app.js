angular.module('lessonOne')
  .controller('GetDate', GetDate)

function GetDate() {
  const vm = this

  vm.$onInit = function() {
    vm.time = new Date()
  }

  vm.updateTime = function() {
    vm.time = new Date()

  }
}
