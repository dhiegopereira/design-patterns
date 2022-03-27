function ChainResponsibility() {
    this.request = function () {
        console.log("ChainResponsibility: Request");
    }
}


function Handler() {
    this.handle = function (request) {
        console.log("Handler: Handle");
        request.request();
    }

    this.setNext = function (handler) {
        this.next = handler;
    }
}


function Test() {
    var request = new Request();
    var handler = new Handler();
    handler.setNext(new Handler());
    handler.handle(request);
}