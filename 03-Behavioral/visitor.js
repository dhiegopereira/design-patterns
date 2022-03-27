function Visitor() {
    this.visitConcreteElementA = function (concreteElementA) {
        console.log("Visitor: Visited ConcreteElementA");
    }

    this.visitConcreteElementB = function (concreteElementB) {
        console.log("Visitor: Visited ConcreteElementB");
    }
}


function ConcreteElementA() {
    this.accept = function (visitor) {
        visitor.visitConcreteElementA(this);
    }
}


function ConcreteElementB() {
    this.accept = function (visitor) {
        visitor.visitConcreteElementB(this);
    }
}


function ObjectStructure() {
    this.elements = [];

    this.attach = function (element) {
        this.elements.push(element);
    }

    this.detach = function (element) {
        this.elements = this.elements.filter(function (el) {
            return el !== element;
        });
    }

    this.accept = function (visitor) {
        this.elements.forEach(function (el) {
            el.accept(visitor);
        });
    }
}


function Test() {
    var visitor = new Visitor();
    var elementA = new ConcreteElementA();
    var elementB = new ConcreteElementB();
    var objectStructure = new ObjectStructure();

    objectStructure.attach(elementA);
    objectStructure.attach(elementB);

    objectStructure.accept(visitor);
}