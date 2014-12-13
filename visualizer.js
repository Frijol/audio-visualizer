var tessel = require('tessel');
var ambientLib = require('ambient-attx4');

// Plug in lights to ground & pin G1.
// Or... just use tessel.led[0].
var myPin = tessel.port['GPIO'].pin['G1'];

var val = 0;

// Plug in Ambient Module to port A
var ambient = ambientLib.use(tessel.port['A']);

ambient.on('ready', function () {
  // Set a sound level trigger
  // This is a good volume for the music I'm playing on my laptop.
  // It's likely you'll need to adjust this: up for louder music.
  ambient.setSoundTrigger(0.018);

  ambient.on('sound-trigger', function(data) {
    // Turn on the lights for a short time
    myPin.write(1);
    setTimeout(function () {
      myPin.write(0);
    }, 200);
  });
});
