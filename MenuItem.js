var MenuItem = function (type) {
    this.type = type;
    this.name = type.name;
    this.price = type.price;
    this.calories = type.calories;
}

MenuItem.prototype.getType = function () {
    return this.type;
}

MenuItem.prototype.getName = function () {
    return this.name;
}

MenuItem.prototype.calculatePrice = function () {
    return this.price;
}

MenuItem.prototype.calculateCalories = function () {
    return this.calories;
}

module.exports = {
    MenuItem: MenuItem
}

