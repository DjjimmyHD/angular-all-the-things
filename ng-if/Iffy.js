angular.module('app.iffy')
  .controller('Iffy',Iffy)

  function Iffy () {
    const vm = this

    vm.$onInit = function () {
       vm.tab = 0
     }
  }
