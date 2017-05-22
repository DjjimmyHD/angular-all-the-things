  angular.module('app.forms')
    .controller('Forms', Forms)

    function Forms() {
      vm = this
      vm.users = [
        {name:'james schultz',
        email: 'ninjames101@gmail.com',
        age:30,}

      ]
    }
