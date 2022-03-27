function Command(execute, undo) {
    this.execute = execute;
    this.undo = undo;
}


function Invoker() {
    this.commands = [];

    this.storeAndExecute = function (command) {
        this.commands.push(command);
        command.execute();
    }

    this.undo = function () {
        var command = this.commands.pop();
        command.undo();
    }
}


function Test() {
    var invoker = new Invoker();

    var command = new Command(function () {
        console.log("Command: Doing something");
    }, function () {
        console.log("Command: Undoing something");
    });

    invoker.storeAndExecute(command);
    invoker.undo();
}
