angular.module('app.filters')
  .controller('Filters',Filters)

function Filters() {
  const vm = this
  vm.myNumber = 1.3625435432

  vm.$onInit = function () {
    vm.users = [
      {name:"mike", dog:"bull dog"},
      {name:"andy", dog:"golden lab"},
      {name:"reid", dog:"meowth"},
      {name:"reid", dog:45},
    ]
  }
  vm.addUser = function () {
    vm.users.push(vm.user)
    delete vm.user
  }
 vm.deleteUser = function (e, user) {
   e.preventDefault()
   vm.users.splice(vm.users.indexOf(user, 1))

 }
}
