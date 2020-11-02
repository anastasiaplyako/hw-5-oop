var Hamburger = require('./Hamburger');
var Drink = require('./Drink');
var Salad = require('./Salad');
var Order = require('./Order');

var potatoHamburger = new Hamburger(Hamburger.SIZE_LARGE, Hamburger.STUFFING_POTATO);
console.log(potatoHamburger.calculatePrice());
console.log(potatoHamburger.calculateCalories());

var cola = new Drink(Drink.COLA);
console.log(cola.calculatePrice());
console.log(cola.calculateCalories());

var coffee = new Drink(Drink.COFFEE);
console.log(coffee.calculatePrice());
console.log(coffee.calculateCalories());

var saladCaesar = new Salad(Salad.CAESAR, 200);
console.log(saladCaesar.calculatePrice());
console.log(saladCaesar.calculateCalories());

var saladOlivie = new Salad(Salad.OLIVIE, 200);
console.log(saladOlivie.calculatePrice());
console.log(saladOlivie.calculateCalories());

var junkFoodOrder = new Order(cola, potatoHamburger);
junkFoodOrder.addItem(coffee);
junkFoodOrder.showAllOrder();
console.log(junkFoodOrder.calculateTotalCalories());
console.log(junkFoodOrder.calculateTotalPrice());

junkFoodOrder.deleteItem(saladCaesar);
junkFoodOrder.showAllOrder();

console.log(junkFoodOrder.hasItem(saladCaesar));
console.log(junkFoodOrder.hasItem(potatoHamburger));
junkFoodOrder.statusOrder();
junkFoodOrder.pay();
junkFoodOrder.statusOrder();
junkFoodOrder.addItem(coffee);
junkFoodOrder.showAllOrder();




