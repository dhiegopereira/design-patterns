function Composite() {
    this.operation = function () {
        console.log("Composite: Operation");
    }
}


function Leaf() {
    this.operation = function () {
        console.log("Leaf: Operation");
    }
}


function Composite1() {
    this.operation = function () {
        console.log("Composite1: Operation");
    }
}


function Composite2() {
    this.operation = function () {
        console.log("Composite2: Operation");
    }
}


function Test() {
    var composite1 = new Composite1();
    var composite2 = new Composite2();
    var leaf = new Leaf();

    composite1.add(leaf);
    composite1.add(composite2);
    composite1.operation();
}