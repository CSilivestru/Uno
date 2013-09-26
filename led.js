var arduino = require('duino'),
board = new arduino.Board({
    debug: true
});

var led = new arduino.Led({
    board: board,
    pin: 13
});

board.on('ready', function(){
    console.log("Board is ready!");
    led.blink();
});

