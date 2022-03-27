function Iterator() {
    this.first = function () {
        console.log("Iterator: First");
    }

    this.next = function () {
        console.log("Iterator: Next");
    }

    this.isDone = function () {
        console.log("Iterator: IsDone");
    }

    this.currentItem = function () {
        console.log("Iterator: CurrentItem");
    }
}


function ConcreteIterator() {
    this.first = function () {
        console.log("ConcreteIterator: First");
    }

    this.next = function () {
        console.log("ConcreteIterator: Next");
    }

    this.isDone = function () {
        console.log("ConcreteIterator: IsDone");
    }

    this.currentItem = function () {
        console.log("ConcreteIterator: CurrentItem");
    }
}


function Test() {
    var iterator = new ConcreteIterator();
    iterator.first();
    iterator.next();
    iterator.isDone();
    iterator.currentItem();
}
