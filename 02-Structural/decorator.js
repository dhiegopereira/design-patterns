function MacBook() {
    this.cost = function () {
        return 997;
    }

    this.screenSize = function () {
        return 11.6;
    }
}


function Memory(macbook) {
    var v = macbook.cost();
    macbook.cost = function () {
        return v + 75;
    }
}


function Engraving(macbook) {
    var v = macbook.cost();
    macbook.cost = function () {
        return v + 200;
    }
}


function Insurance(macbook) {
    var v = macbook.cost();
    macbook.cost = function () {
        return v + 250;
    }
}


function Test() {
    var m = new MacBook();
    Memory(m);
    Engraving(m);
    Insurance(m);

    console.log("Cost: " + m.cost());
    console.log("Screen Size: " + m.screenSize());
}