function Memento(state) {
    this.state = state;
}


function Originator() {
    this.state = null;

    this.saveStateToMemento = function () {
        return new Memento(this.state);
    }

    this.getStateFromMemento = function (memento) {
        this.state = memento.state;
    }
}


function Caretaker() {
    this.mementos = [];

    this.add = function (memento) {
        this.mementos.push(memento);
    }

    this.get = function (index) {
        return this.mementos[index];
    }
}


function Test() {
    var originator = new Originator();
    var caretaker = new Caretaker();

    originator.state = "State #1";
    caretaker.add(originator.saveStateToMemento());
    originator.state = "State #2";
    caretaker.add(originator.saveStateToMemento());
    originator.state = "State #3";
    caretaker.add(originator.saveStateToMemento());

    originator.getStateFromMemento(caretaker.get(1));
    console.log(originator.state);
}
