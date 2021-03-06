function HomeController() {

    var vm = this;
    vm.message = "Bonjour OXiane";

    function activate() {
        console.log(vm.hello);
    }

    vm.$onInit = function() {
        activate();
    };
    console.log("home comp");
}
HomeController.$inject = [];
angular.module('pmApp.homeComponent', [
    'pmApp.formulaireComponent'
]).component('homeComponent', {
    templateUrl: 'src/home/home.component.html',
    controller: HomeController,
    controllerAs: "homeCtrl",
    require: { parent: '^rootComponent' },
    bindings: {
        hello: '<'
    }
});