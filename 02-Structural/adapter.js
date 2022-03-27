function Adapter() {
    this.operation = function () {
        console.log("Adapter: Operation");
    }
}


function ConcreteAdapter() {
    this.operation = function () {
        this.adaptee.operation();
    }
}


function Adaptee() {
    this.operation = function () {
        console.log("Adaptee: Operation");
    }
}


function Test() {
    var adaptee = new Adaptee();
    var adapter = new ConcreteAdapter(adaptee);

    adapter.operation();
}
