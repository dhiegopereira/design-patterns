function FactoryMethod() {
    this.createProduct = function () {
        throw new Error("FactoryMethod: createProduct not implemented");
    }
}


function ConcreteFactory1() {
    this.createProduct = function () {
        return new ConcreteProduct1();
    }
}


function ConcreteFactory2() {
    this.createProduct = function () {
        return new ConcreteProduct2();
    }
}


function Test() {
    var factory1 = new ConcreteFactory1();
    var factory2 = new ConcreteFactory2();

    var product1 = factory1.createProduct();
    var product2 = factory2.createProduct();
}