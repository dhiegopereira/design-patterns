function Builder() {
    this.product = new Product();

    this.buildPartA = function () {
        console.log("Builder: Part A");
    }

    this.buildPartB = function () {
        console.log("Builder: Part B");
    }

    this.getProduct = function () {
        return this.product;
    }
}


function ConcreteBuilder1() {
    this.buildPartA = function () {
        console.log("ConcreteBuilder1: Part A");
    }

    this.buildPartB = function () {
        console.log("ConcreteBuilder1: Part B");
    }
}


function ConcreteBuilder2() {
    this.buildPartA = function () {
        console.log("ConcreteBuilder2: Part A");
    }

    this.buildPartB = function () {
        console.log("ConcreteBuilder2: Part B");
    }
}


function Test() {
    var builder1 = new ConcreteBuilder1();
    var builder2 = new ConcreteBuilder2();

    var director = new Director();
    var product1 = director.build(builder1);
    var product2 = director.build(builder2);
}