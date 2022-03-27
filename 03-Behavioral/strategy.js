function Strategy() {
    this.algorithm = function () {
        console.log("Strategy: Default algorithm");
    }
}


function ConcreteStrategyA() {
    this.algorithm = function () {
        console.log("ConcreteStrategyA: Implemented algorithm");
    }
}


function ConcreteStrategyB() {
    this.algorithm = function () {
        console.log("ConcreteStrategyB: Implemented algorithm");
    }
}


function Context(strategy) {
    this.strategy = strategy;

    this.contextInterface = function () {
        this.strategy.algorithm();
    }
}


function Test() {
    var strategy = new ConcreteStrategyA();
    var context = new Context(strategy);

    context.contextInterface();

    strategy = new ConcreteStrategyB();
    context.strategy = strategy;

    context.contextInterface();
}
