var five = require("johnny-five"),
    board = new five.Board();

board.on("ready", function() {
  // Create an Led on pin 13
  
  var led = new five.Led(12);
  var led2 = new five.Led(11);
  var led3 = new five.Led(10);
  // Strobe the pin on/off, defaults to 100ms phases
  led.on();
  led2.strobe(500);
  led3.strobe(200);
});