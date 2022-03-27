function Singleton() {
    this.operation = function () {
        console.log("Singleton: Operation");
    }
}


function Test() {
    var singleton1 = new Singleton();
    var singleton2 = new Singleton();

    singleton1.operation();
    singleton2.operation();
}