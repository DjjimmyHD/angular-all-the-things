angular.module('app.repeater')
  .controller('Repeater',Repeater)

function Repeater () {
  vm = this
  vm.$onInit = function () {
    vm.users = [
      {name:"mike", age:23},
      {name:"andy", age:34},
      {name:"reid", age:45},
      {name:"reid", age:45},
    ]
  }
  vm.addUser = function () {
   vm.users.push(vm.cheese)
   delete vm.cheese
}
  vm.deleteUser = function (e, cheese) {
    e.preventDefault()
    vm.users.splice(vm.users.indexOf(cheese), 1)
  }

}
