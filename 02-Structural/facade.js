function ComputerFacade(computer) {
    this.computer = computer;

    this.turnOn = function () {
        this.computer.getElectricShock();
        this.computer.makeSound();
        this.computer.showLoadingScreen();
        this.computer.bam();
    }

    this.turnOff = function () {
        this.computer.closeEverything();
        this.computer.pullCurrent();
        this.computer.sooth();
    }
}


function Computer(electricShock, makeSound, showLoadingScreen, bam, closeEverything, pullCurrent, sooth) {
    this.getElectricShock = function () {
        electricShock();
    }

    this.makeSound = function () {
        makeSound();
    }

    this.showLoadingScreen = function () {
        showLoadingScreen();
    }

    this.bam = function () {
        bam();
    }

    this.closeEverything = function () {
        closeEverything();
    }

    this.pullCurrent = function () {
        pullCurrent();
    }

    this.sooth = function () {
        sooth();
    }
}


function Test() {
    var computer = new Computer(
        function () {
            console.log("Computer recieved electric shock");
        },
        function () {
            console.log("Computer is making a sound");
        },
        function () {
            console.log("Computer showing loading screen");
        },
        function () {
            console.log("Computer bam bam bam");
        },
        function () {
            console.log("Computer closing everything");
        },
        function () {
            console.log("Computer pulling current");
        },
        function () {
            console.log("Computer sooting itself");
        }
    );

    var facade = new ComputerFacade(computer);
    facade.turnOn();
    facade.turnOff();
}