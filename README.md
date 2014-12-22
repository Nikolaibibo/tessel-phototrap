tessel-phototrap
================

creates a phototrap with the help of a tessel and a PIR sensor.
Each time a movement is recognized, the camera module captures a photo and saves it to harddrive.

Images of the setup and results:
https://www.flickr.com/photos/nikolaibockholt/sets/72157649462457059/

Hardware:
- tessel board
http://www.tessel.io

- PIR Sensor
http://www.adafruit.com/products/189

- a few wires




Test the code:
tessel run phototrap.js --upload-dir ./
