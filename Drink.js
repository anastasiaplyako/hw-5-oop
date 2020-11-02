var config = require('./config.js');
var MenuItem = require('./MenuItem').MenuItem;
var Drink = function (type) {
    MenuItem.call(this, type);
};

Drink.prototype = Object.create(MenuItem.prototype);
Drink.prototype.constructor = Drink;

Drink.COFFEE = {
    name: config.DRINK_COFFEE_NAME,
    price: config.DRINK_COFFEE_PRICE,
    calories: config.DRINK_COFFEE_CALORIES
};

Drink.COLA = {
    name: config.DRINK_COLA_NAME,
    price: config.DRINK_COLA_PRICE,
    calories: config.DRINK_COLA_CALORIES
};

module.exports = Drink;