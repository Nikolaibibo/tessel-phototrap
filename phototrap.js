var tessel = require('tessel');
var PIR = tessel.port['GPIO'].pin['G3'];

var camera = require('camera-vc0706').use(
  tessel.port['A'], {
    compression: 0.8,
    resolution: 'vga'
  });

var lights = {
  green: tessel.led[0],
  blue: tessel.led[1],
  red: tessel.led[2],
  amber: tessel.led[3]
};

var isBusy = false;

// camera listener
camera.on('ready', function () {

  PIR.on('rise', function(time) {

    if (!isBusy) {
      console.log('Motion detected! Capturing a photo...');
      isBusy = true;
      lights.blue.toggle();
      makePhoto();
    }

  });

});


camera.on('error', function (err) {
  console.log('Error: ', err);
});


// capture image
function makePhoto () {

  console.log("make photo");

  camera.takePicture(function(err, image) {

    if (err) {

      console.log('error taking image', err);

    } else {

      lights.green.toggle();
      var name = 'picture-' + Math.floor(Date.now()*1000) + '.jpg';
      console.log('Picture saving as', name, '...');
      process.sendfile(name, image);
      console.log('done.');

    }

  });

}
