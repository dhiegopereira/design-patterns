function Observer() {
    this.update = function (context) {
        console.log("Observer got notified");
    }
}


function Subject() {
    this.observers = [];

    this.addObserver = function (observer) {
        this.observers.push(observer);
    }

    this.removeObserver = function (observer) {
        this.observers = this.observers.filter(function (obs) {
            return observer !== obs;
        });
    }

    this.notify = function (context) {
        this.observers.forEach(function (observer) {
            observer.update(context);
        });
    }
}


function Test() {
    var subject = new Subject();
    var observer = new Observer();

    subject.addObserver(observer);
    subject.notify("Something interesting happened");
}