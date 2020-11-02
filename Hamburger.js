var MenuItem = require('./MenuItem').MenuItem;
var config = require('./config');

var Hamburger = function (size, stuffing) {
    MenuItem.call(this, size);
    this.size = size;
    this.stuffing = stuffing;
    this.price += stuffing.price;
    this.calories += stuffing.calories;
}

Hamburger.prototype = Object.create(MenuItem.prototype);
Hamburger.prototype.constructor = Hamburger;

Hamburger.prototype.getSize = function () {
    return this.size;
}

Hamburger.prototype.getStuffing = function () {
    return this.stuffing;
}

Hamburger.SIZE_SMALL = {
    name: config.SIZE_SMALL_NAME,
    price: config.SIZE_SMALL_PRICE,
    calories: config.SIZE_SMALL_CALORIES
};

Hamburger.SIZE_LARGE = {
    name: config.SIZE_LARGE_NAME,
    price: config.SIZE_LARGE_PRICE,
    calories: config.SIZE_LARGE_CALORIES
};

Hamburger.STUFFING_CHEESE = {
    name: config.STUFFING_CHEESE_NAME,
    price: config.STUFFING_CHEESE_PRICE,
    calories: config.STUFFING_CHEESE_CALORIES
};

Hamburger.STUFFING_SALAD = {
    name: config.STUFFING_SALAD_NAME,
    price: config.STUFFING_SALAD_PRICE,
    calories: config.STUFFING_SALAD_CALORIES
};

Hamburger.STUFFING_POTATO = {
    name: config.STUFFING_POTATO_NAME,
    price: config.STUFFING_POTATO_PRICE,
    calories: config.STUFFING_POTATO_CALORIES
};

module.exports = Hamburger;