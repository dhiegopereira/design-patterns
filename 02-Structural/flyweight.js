function Flyweight(sharedState) {
    this.sharedState = sharedState;
}
Flyweight.prototype.operation = function(uniqueState) {
    console.log("Flyweight: " + this.sharedState + " " + uniqueState);
}


function FlyweightFactory() {
    this.flyweights = {};
}
FlyweightFactory.prototype.getFlyweight = function(sharedState) {
    if (!this.flyweights[sharedState]) {
        this.flyweights[sharedState] = new Flyweight(sharedState);
    }
    return this.flyweights[sharedState];
}


function Test() {
    var factory = new FlyweightFactory();
    var fx = factory.getFlyweight("X");
    var fy = factory.getFlyweight("Y");
    var fz = factory.getFlyweight("Z");

    fx.operation("a");
    fy.operation("b");
    fz.operation("c");
}
