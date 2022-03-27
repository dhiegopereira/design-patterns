function Interpreter() {
    this.interpret = function (context) {
        console.log("Interpreter: Interpret");
    }
}


function Context() {
    this.input = "";
}


function Test() {
    var context = new Context();
    var interpreter = new Interpreter();
    interpreter.interpret(context);
}
