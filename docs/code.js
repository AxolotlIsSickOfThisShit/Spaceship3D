

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["aa2e7c33-7bf5-4cd7-bf27-97e4efd313b6","c254f179-1ebd-4904-a8b7-568bb69320ba"],"propsByKey":{"aa2e7c33-7bf5-4cd7-bf27-97e4efd313b6":{"name":"ship1","sourceUrl":null,"frameSize":{"x":104,"y":59},"frameCount":1,"looping":true,"frameDelay":12,"version":"7WibkIR1lTSyjzn5juBFibbcZP8y77QX","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":104,"y":59},"rootRelativePath":"assets/aa2e7c33-7bf5-4cd7-bf27-97e4efd313b6.png"},"c254f179-1ebd-4904-a8b7-568bb69320ba":{"name":"ship2","sourceUrl":null,"frameSize":{"x":84,"y":59},"frameCount":1,"looping":true,"frameDelay":12,"version":"ClBHCug4vGzWmsQLoA0vCEFdqBp79nep","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":84,"y":59},"rootRelativePath":"assets/c254f179-1ebd-4904-a8b7-568bb69320ba.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

background("black");
var bug = createSprite(200, 200);
bug.setAnimation("ship1");
World.frameRate=60;
var spd = 0.025;
var rot = 1;
var cap = 45;
var msg = ["> Press C to adjust settings","> Hold R to reset ship orientation","> Use arrow keys to move"];
function draw(){
  background("black");
    textSize(20);
    fill("#00ff00");
    text(msg[0],0,15);
    text(msg[1],0,30);
    text(msg[2],0,45);
  if(keyDown("up")&bug.scale >0){
    bug.scale = bug.scale - bug.scale*spd;
    bug.setAnimation("ship2");
  }
  if(keyDown("down")){
    bug.scale = bug.scale + bug.scale*spd;
    bug.setAnimation("ship1");

  }
  if(keyDown("left")& bug.rotationSpeed > -cap){
    bug.rotationSpeed = bug.rotationSpeed - rot;

  }
  if(keyDown("right")& bug.rotationSpeed < cap){
    bug.rotationSpeed = bug.rotationSpeed + rot;

  }
  if (keyWentDown("c")){
    World.frameRate = promptNum("Target FPS (Default: 60):");
    if (World.frameRate==0){World.frameRate=60}
    spd = 0.025*promptNum("Enter Ship Speed (Default: 1):");
    if (spd == 0){spd = 0.025;}
    rot = promptNum("Set Ship Roll Speed (Default: 1)");
    if (rot == 0){rot = 1;}
    cap = promptNum("Set Ship Roll Speed Maximum (Default: 45):");
    if (cap == 0){cap = 45;}
  }
  if (keyDown("r")){
    bug.rotationSpeed = 0;
    if (0 - bug.rotation<=0){bug.rotation = bug.rotation - ceil(bug.rotation/10)}
    if (0 - bug.rotation>=0){bug.rotation = bug.rotation - floor(bug.rotation/10)}
    if (0 - bug.rotation==0){bug.rotation = 0}
  }
  drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
