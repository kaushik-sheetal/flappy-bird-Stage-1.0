var flappyBird, flappyBirdImage;
var backgroundImage;
var railing, railingImage;
var pillar, pillarImage;

function preload(){
 flappyBirdImage = loadAnimation("bird1.png", "bird2.png");
 backgroundImage = loadImage("backgroundImage.png");
 railingImage = loadImage("railing.png");
 pillarImage = loadImage("pillar.png");
}
function setup(){
 createCanvas(windowWidth,windowHeight);
 flappyBird = createSprite(600,windowHeight/2,20,20);
 flappyBird.scale = 2;
 flappyBird.addAnimation("flappyBirdImage", flappyBirdImage);
 railing = createSprite(windowWidth/2,windowHeight-10);
 railing.addImage("railingImage",railingImage);
 railing.x = railing.width/2
 railing.scale = 6.0;
 railing.velocityX = -5;
}
function draw(){
  background(backgroundImage);

  if(railing.x<200) {
    railing.x = railing.width/2
  }
 
  spawnPillar();
  drawSprites();
}
function spawnPillar(){
  if(frameCount % 200 === 0){
    pillar = createSprite(windowWidth+10,50);
    pillar.addImage("pillarImage",pillarImage);
    pillar.velocityX = -5;
  }
}
