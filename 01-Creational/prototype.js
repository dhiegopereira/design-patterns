function Prototype() {
    this.primitiveOperation1 = function () {
        console.log("Prototype: Primitive operation 1");
    }

    this.primitiveOperation2 = function () {
        console.log("Prototype: Primitive operation 2");
    }
}


function ConcretePrototype1() {
    this.primitiveOperation1 = function () {
        console.log("ConcretePrototype1: Primitive operation 1");
    }

    this.primitiveOperation2 = function () {
        console.log("ConcretePrototype1: Primitive operation 2");
    }
}


function ConcretePrototype2() {
    this.primitiveOperation1 = function () {
        console.log("ConcretePrototype2: Primitive operation 1");
    }

    this.primitiveOperation2 = function () {
        console.log("ConcretePrototype2: Primitive operation 2");
    }
}


function Test() {
    var prototype1 = new ConcretePrototype1();
    var prototype2 = new ConcretePrototype2();

    var prototype1Clone = prototype1.clone();
    var prototype2Clone = prototype2.clone();
}