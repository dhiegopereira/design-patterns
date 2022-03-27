function AbstractFactory() {
    this.createProductA = function () {
        throw new Error("AbstractFactory: createProductA not implemented");
    }

    this.createProductB = function () {
        throw new Error("AbstractFactory: createProductB not implemented");
    }
}


function ConcreteFactory1() {
    this.createProductA = function () {
        return new ConcreteProductA1();
    }

    this.createProductB = function () {
        return new ConcreteProductB1();
    }
}


function ConcreteFactory2() {
    this.createProductA = function () {
        return new ConcreteProductA2();
    }

    this.createProductB = function () {
        return new ConcreteProductB2();
    }
}


function Test() {
    var factory1 = new ConcreteFactory1();
    var productA1 = factory1.createProductA();
    var productB1 = factory1.createProductB();

    var factory2 = new ConcreteFactory2();
    var productA2 = factory2.createProductA();
    var productB2 = factory2.createProductB();
}