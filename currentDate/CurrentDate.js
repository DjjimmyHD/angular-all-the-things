angular.module('app.currentDate')
  .controller('CurrentDate', CurrentDate)

function CurrentDate() {
  const vm = this

  vm.$onInit = function() {
    vm.time = new Date()
  }

  vm.updateTime = function() {
    vm.time = new Date()

  }
}
