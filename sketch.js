var trex, trex_run;
var ground, groundImg;

function preload(){
 trex_run = loadAnimation("trex1.png","trex3.png","trex4.png");
 groundImg = loadImage("ground2.png");
}

function setup(){
  createCanvas(600,200);

//creating T-Rex
trex = createSprite(50,180,20,50);
trex.addAnimation("running", trex_run);
trex.scale = 0.5;
trex.x = 50;

//create ground
ground = createSprite(200,190,400,20);
ground.addImage("ground", groundImg);
}


function draw(){
  //set background color 
  background("gray");

ground.velocityX = -5;

//resetting ground
if (ground.x < 0) {
  ground.x = ground.width/2;
}

//jumpy trex
if(keyDown("space")){
  trex.velocityY = -5;
}
trex.velocityY = trex.velocityY + 0.8;

 trex.collide(ground);
  drawSprites();
}
