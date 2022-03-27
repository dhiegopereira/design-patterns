function Mediator() {
    this.colleague1 = null;
    this.colleague2 = null;

    this.setColleague1 = function (colleague1) {
        this.colleague1 = colleague1;
    }

    this.setColleague2 = function (colleague2) {
        this.colleague2 = colleague2;
    }

    this.send = function (message, colleague) {
        if (colleague === this.colleague1) {
            this.colleague2.notify(message);
        } else {
            this.colleague1.notify(message);
        }
    }
}


function Colleague1(mediator) {
    this.mediator = mediator;

    this.send = function (message) {
        this.mediator.send(message, this);
    }

    this.notify = function (message) {
        console.log("Colleague1 gets message: " + message);
    }
}


function Colleague2(mediator) {
    this.mediator = mediator;

    this.send = function (message) {
        this.mediator.send(message, this);
    }

    this.notify = function (message) {
        console.log("Colleague2 gets message: " + message);
    }
}


function Test() {
    var mediator = new Mediator();
    var colleague1 = new Colleague1(mediator);
    var colleague2 = new Colleague2(mediator);

    mediator.setColleague1(colleague1);
    mediator.setColleague2(colleague2);

    colleague1.send("Hello");
    colleague2.send("Hi");
}