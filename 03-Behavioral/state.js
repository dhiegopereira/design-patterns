function State() {
    this.save = function () {
        console.log("State saved");
    }

    this.restore = function () {
        console.log("State restored");
    }
}


function Context() {
    this.state = null;

    this.getState = function () {
        return this.state;
    }

    this.setState = function (state) {
        this.state = state;
    }
}


function ConcreteStateA() {
    this.save = function () {
        console.log("ConcreteStateA: Saving state...");
    }

    this.restore = function () {
        console.log("ConcreteStateA: Restoring state...");
    }
}


function ConcreteStateB() {
    this.save = function () {
        console.log("ConcreteStateB: Saving state...");
    }

    this.restore = function () {
        console.log("ConcreteStateB: Restoring state...");
    }
}


function Test() {
    var context = new Context();
    var state = new ConcreteStateA();

    context.setState(state);
    context.getState().save();

    state = new ConcreteStateB();
    context.setState(state);
    context.getState().save();
}