function Bridge() {
    this.operation = function () {
        console.log("Bridge: Operation");
    }
}


function ConcreteImplementorA() {
    this.operation = function () {
        console.log("ConcreteImplementorA: Operation");
    }
}


function ConcreteImplementorB() {
    this.operation = function () {
        console.log("ConcreteImplementorB: Operation");
    }
}


function Abstraction() {
    this.implementor = null;

    this.setImplementor = function (implementor) {
        this.implementor = implementor;
    }

    this.operation = function () {
        this.implementor.operation();
    }
}


function RefinedAbstraction() {
    this.operation = function () {
        console.log("RefinedAbstraction: Operation");
    }
}


function Test() {
    var implementorA = new ConcreteImplementorA();
    var implementorB = new ConcreteImplementorB();
    var abstraction = new Abstraction();
    var refinedAbstraction = new RefinedAbstraction();

    abstraction.setImplementor(implementorA);
    abstraction.operation();

    abstraction.setImplementor(implementorB);
    abstraction.operation();

    refinedAbstraction.setImplementor(implementorA);
    refinedAbstraction.operation();

    refinedAbstraction.setImplementor(implementorB);
    refinedAbstraction.operation();
}