angular.module('lessonOne')
  .controller('Late', Late)

function Late() {
  const vm = this

  vm.$onInit = function() {
    vm.time = new Date()
  }

  vm.updateTime = function() {
    vm.time = new Date()

  }
}
