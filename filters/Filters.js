angular.module('app.filters')
  .controller('Filters',Filters)

function Filters() {
  const vm = this
  vm.myNumber = 1.3625435432

  vm.$onInit = function () {
    vm.users = [
      {name:"mike", age:23},
      {name:"andy", age:34},
      {name:"reid", age:45},
      {name:"reid", age:45},
    ]
  }
  vm.addUser = function () {
    vm.users.push(vm.user)
    delete vm.user
  }

}
