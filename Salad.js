var config = require('./config');
var MenuItem = require('./MenuItem').MenuItem;

var Salad = function (type, weight) {
    MenuItem.call(this, type);
    this.weight = weight;
}

Salad.prototype = Object.create(MenuItem.prototype);
Salad.prototype.constructor = Salad;

Salad.prototype.calculatePrice = function () {
    return (this.price * this.weight) / 100;
}

Salad.prototype.calculateCalories = function () {
    return (this.calories * this.weight) / 100;
}

Salad.CAESAR = {
    name: config.SALAD_CAESAR_NAME,
    price: config.SALAD_CAESAR_PRICE,
    calories: config.SALAD_CAESAR_CALORIES
}

Salad.OLIVIE = {
    name: config.SALAD_OLIVIE_NAME,
    price: config.SALAD_OLIVIE_PRICE,
    calories: config.SALAD_OLIVIE_CALORIES
}

module.exports = Salad;