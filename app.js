"use strict";

(function(){
  angular
  .module("inventory", [])
  .controller("inventory_controller", InventoryController)

  function InventoryController(){
     var vm = this;
     vm.data = data;
   }
   vm.reveal = function (name) {
                var pos = vm.data.map(function(e) { return e.name; }).indexOf(name);
                vm.pic = vm.data[pos].img;
            }
})();
