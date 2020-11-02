var Order = function () {
    this.order = [].slice.call(arguments);
    this.isPaid = false;
}

Order.prototype.addItem = function (item) {
    if (this.isPaid) {
        console.log('You already pay order');
    } else {
        this.order.push(item);
    }
}

Order.prototype.deleteItem = function (item) {
    if (this.isPaid) {
        console.log('You already pay order');
    } else {
        this.order.splice(this.order.indexOf(item), 1)
    }
}

Order.prototype.hasItem = function (item) {
    return this.order.indexOf(item) !== -1;
}

Order.prototype.statusOrder = function () {
    return this.isPaid;
}

Order.prototype.calculateTotalPrice = function () {
    var totalPrice = 0;
    this.order.forEach(function (item) {
        totalPrice += item.calculatePrice();
    });
    return totalPrice;
}

Order.prototype.calculateTotalCalories = function () {
    var totalCalories = 0;
    this.order.forEach(function (item) {
        console.log(item.calculateCalories());
        totalCalories += item.calculateCalories();
    });
    return totalCalories;
}

Order.prototype.showAllOrder = function () {
    this.order.forEach(function (item) {
        console.log(`Name = ${item.name} Price = ${item.price}`)
    });
}

Order.prototype.pay = function () {
    this.isPaid = true;
}

module.exports = Order;