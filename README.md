Audio Visualizer
================

This is a simple audio visualizer that listens to ambient sound and flashes a string of lights in response.
I've found it working pretty well with a string of Christmas lights listening to music on my laptop.

## Materials

* [Tessel](//tessel.io)
* [Ambient Module](//tessel.io/modules#module-ambient)
* Christmas lights (optional– you could use Tessel's LEDs if you wanted.) I used [these](http://www.amazon.com/Innootech-Battery-Operated-Christmas-Birthday/dp/B005GTC2A6).

## Instructions

1. Clone this repo
1. `npm install` to install the drivers for the ambient module
1. Plug in the ambient module to port A on the Tessel
1. Cut off the battery pack from the string lights and expose the wires. Plug one end of the wire into GND on the Tessel, and the other into pin G1.
1. Plug in the Tessel to your computer.
1. Run `tessel run visualizer.js` to run the code on your Tessel.
1. Snap your fingers; the lights should flash!
1. If the lights don't flash, try switching the wires; it will only work in one direction.
1. You might need to change the sound trigger value to better match the volume of your music.

![](https://lh3.googleusercontent.com/-6G3xLObs8Fc/VIzGZ19_IwI/AAAAAAAALb4/0PYmgMY4aJg/w988-h556-no/20141213_143724.jpg)

Good songs to visualize with it:
* [Something in my Heart](https://www.youtube.com/watch?v=0_aFSNB8E5Y)
* [Aware](https://www.youtube.com/watch?v=jLsB4rtK1vg)

Vines of it working:
* https://vine.co/v/O6tWEHMm6j6
* https://vine.co/v/O6TVhpmIvvW
