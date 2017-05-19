angular.module('app.cars')
  .controller('Cars', Cars)

  function Cars() {
    const vm = this

    vm.createCar = function createCar() {
        // if the user typed "Ford", 1999 then `vm.car` would be {make: "Ford", year: 1999} here
        console.log(vm.car)
      }
  }
