angular.module('app.options')
  .controller('Options',Options)

function Options() {
  const vm = this
  vm.$onInit = function () {
  vm.colors = [
      {name:'black', shade:'dark'},
      {name:'white', shade:'light', notAnOption: true},
      {name:'red', shade:'dark'},
      {name:'blue', shade:'dark', notAnOption: true},
      {name:'yellow', shade:'light', notAnOption: false}
    ];
    vm.myColor = vm.colors[3];
  }
  vm.remove = function (color) {
    vm.colors.splice(vm.colors.indexOf(color), 1)
  }
  vm.add = function () {
    vm.colors.push({})
  }
}
