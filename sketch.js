/**

  Duplicate this sketch to start your project 🧪
  More info: https://dev.codemotionkids.com/libraries/diorama/docs/
  
  Creative Commons BY-SA

**/

function setup() {
  createCanvas3D(windowWidth, windowHeight);
  //Change background color of the scene
  background3D("#FFFFFFFF");
  
  environment(SUNSET)
  var albero = beginGroup();
  //Change material color to orange
  diffuse("#02AF09");
  //Create a cylindere in 0, 0, 0 with1 radius 1;
  sphere(0, 2.8, 0, 1);
  diffuse("brown");
  align(TOP);
  cylinder(0, 0, 0, 0.3, 2);
  diffuse("#05A50B");
 
  endGroup();
  
  
  align(BOTTOM);
  diffuse("#1F6E12");
  box(0, 0, 0, 400, 0, 400);


  var lato = 400;
  var numberAlberi = 2000;
  for (var i = 0; i < numberAlberi; i++) {
    var x = random(-lato / 2, lato / 2);
    var y = 0;
    var z = random(-lato / 2, lato / 2);

    
    var nuovoAlbero = clone(albero, x, y, z);
    nuovoAlbero.setScale(random(2, 3));
  }
  
  pushFX(HALFTONE, 0.5)
  pushFX(GLITCH)
  pushFX(LUMINOSITY,)
}
function draw() {
  // 🔍 Never create objects here, but don't forget to have it in your code:
  // leave empty for the moment
}
