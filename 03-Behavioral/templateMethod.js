function AbstractClass() {
    this.templateMethod = function () {
        this.primitiveOperation1();
        this.primitiveOperation2();
        if (this.isPrimitiveOperation3Avail()) {
            this.primitiveOperation3();
        }
    }

    this.primitiveOperation1 = function () {
        console.log("AbstractClass: Primitive operation 1");
    }

    this.primitiveOperation2 = function () {
        console.log("AbstractClass: Primitive operation 2");
    }

    this.primitiveOperation3 = function () {
        console.log("AbstractClass: Primitive operation 3");
    }

    this.isPrimitiveOperation3Avail = function () {
        return true;
    }
}


function ConcreteClassA() {
    this.isPrimitiveOperation3Avail = function () {
        return false;
    }
}


function ConcreteClassB() {
    this.primitiveOperation3 = function () {
        console.log("ConcreteClassB: Primitive operation 3");
    }
}


function Test() {
    var abstractClass = new AbstractClass();
    var concreteClassA = new ConcreteClassA();
    var concreteClassB = new ConcreteClassB();

    abstractClass.templateMethod();
    console.log("");

    concreteClassA.templateMethod();
    console.log("");

    concreteClassB.templateMethod();
}