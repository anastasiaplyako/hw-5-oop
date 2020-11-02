var mocha = require('mocha');
var chai = require('chai');
var expect = require('chai').expect;
var Hamburger = require('./Hamburger');
var Drink = require('./Drink');
var Salad = require('./Salad');
var Order = require('./Order');

describe("calculatePrice", function () {
    it('calculate price for hamburger', function ()  {
        var potatoHamburger = new Hamburger(Hamburger.SIZE_LARGE, Hamburger.STUFFING_POTATO);
        chai.assert.equal(potatoHamburger.calculatePrice(), 115);
    });

    it('calculate price for hamburger ', function ()  {
        var smallCheese = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
        chai.assert.equal(smallCheese.calculatePrice(), 60);
    });

    it('calculate price for cola', function ()  {
        var cola = new Drink(Drink.COLA);
        chai.assert.equal(cola.calculatePrice(), 50);
    });

    it('calculate price for coffee', function () {
        var coffee = new Drink(Drink.COFFEE);
        chai.assert.equal(coffee.calculatePrice(), 80);
    });

    it('calculate price for caesar', function ()  {
        var salad = new Salad(Salad.CAESAR, 200);
        chai.assert.equal(salad.calculatePrice(), 200);
    });

    it('calculate price for olivie', function ()  {
        var salad = new Salad(Salad.OLIVIE, 50);
        chai.assert.equal(salad.calculatePrice(), 25);
    });

    it('calculate total price for order', function ()  {
        var saladOlivie = new Salad(Salad.OLIVIE, 50);
        var saladCaesar = new Salad(Salad.CAESAR, 200);
        var cola = new Drink(Drink.COLA);
        var order = new Order(saladOlivie, saladCaesar, cola);
        chai.assert.equal(order.calculateTotalPrice(), 275);
    });

})


describe("calculateCalories", function () {
   it('calculate calories for hamburger', function ()  {
        var potatoBigHamburger = new Hamburger(Hamburger.SIZE_LARGE, Hamburger.STUFFING_POTATO);
       chai.assert.equal(potatoBigHamburger.calculateCalories(), 50);
    });

    it('calculate calories for hamburger ', function ()  {
        var smallCheese = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
        chai.assert.equal(smallCheese.calculateCalories(), 40);
    });

    it('calculate calories for cola', function ()  {
        var cola = new Drink(Drink.COLA);
        chai.assert.equal(cola.calculateCalories(), 40);
    });

    it('calculate calories for coffee', function ()  {
        var coffee = new Drink(Drink.COFFEE);
        chai.assert.equal(coffee.calculateCalories(), 20);
    });

    it('calculate calories for caesar', function ()  {
        var salad = new Salad(Salad.CAESAR, 200);
        chai.assert.equal(salad.calculateCalories(), 40);
    });

    it('calculate calories for olivie', function ()  {
        var salad = new Salad(Salad.OLIVIE, 50);
        chai.assert.equal(salad.calculateCalories(), 40);
    });

    it('calculate total calories for order', function ()  {
        var saladOlivie = new Salad(Salad.OLIVIE, 50);
        var saladCaesar = new Salad(Salad.CAESAR, 200);
        var cola = new Drink(Drink.COLA);
        var order1 = new Order(saladOlivie, saladCaesar, cola);
        chai.assert.equal(order1.calculateTotalCalories(), 120)
    });

})

describe("addItem", function(){
    it('add salad', function ()  {
        var saladOlivie = new Salad(Salad.OLIVIE, 50);
        var cola = new Drink(Drink.COLA);
        var order = new Order(saladOlivie);
        order.addItem(cola);
        expect(order.order[0].name).to.eql("olivie")
        expect(order.order[1].name).to.eql("cola")
    })
})


describe("deleteItem", function(){
    it('delete salad', function () {
        var saladOlivie = new Salad(Salad.OLIVIE, 50);
        var saladCaesar = new Salad(Salad.CAESAR, 200);
        var cola = new Drink(Drink.COLA);
        var order = new Order(saladOlivie, saladCaesar, cola);
        expect(order.order[0].name).to.eql("olivie");
        order.deleteItem(saladOlivie);
        expect(order.order[0].name).to.eql("caesar");
    })
})

describe("hasItem", function(){
    it("has item", function () {
        var saladOlivie = new Salad(Salad.OLIVIE, 50);
        var saladCaesar = new Salad(Salad.CAESAR, 200);
        var cola = new Drink(Drink.COLA);
        var coffee = new Drink(Drink.COFFEE);
        var order = new Order(saladOlivie, saladCaesar, cola);
        chai.assert.equal(order.hasItem(saladOlivie), true);
        chai.assert.equal(order.hasItem(coffee), false);
    });
})

describe('is payed', function () {
    it("is payed", function () {
        var saladOlivie = new Salad(Salad.OLIVIE, 50);
        var saladCaesar = new Salad(Salad.CAESAR, 200);
        var cola = new Drink(Drink.COLA);
        var coffee = new Drink(Drink.COFFEE);
        var order = new Order(saladOlivie, saladCaesar, cola);
        chai.assert.equal(order.isPaid, false);
        order.pay();
        chai.assert.equal(order.isPaid, true);
        order.addItem(coffee);
        chai.assert.equal(order.hasItem(coffee), false);
    })
});