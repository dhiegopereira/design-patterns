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


function Observer() {
    this.update = function (context) {
        console.log("Observer got notified");
    }
}


function SubjectProxy() {
    this.realSubject = new Subject();

    this.addObserver = function (observer) {
        this.realSubject.addObserver(observer);
    }

    this.removeObserver = function (observer) {
        this.realSubject.removeObserver(observer);
    }

    this.notify = function (context) {
        this.realSubject.notify(context);
    }
}


function Test() {
    var subject = new SubjectProxy();

    var observer = new Observer();
    subject.addObserver(observer);

    subject.notify("Something interesting happened");
}