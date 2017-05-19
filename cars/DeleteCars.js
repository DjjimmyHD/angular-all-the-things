angular.module('app.cars')
  .controller('DeleteCars', DeleteCars)

  function DeleteCars() {
    const vm = this
      vm.deleteCar = function deleteCar() {
        delete vm.car
      }


  }
