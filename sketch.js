var boy, boyRun, boyJump, boyDead;
var rob, robRun, robJump, robRunShoot, robShoot, robIdle;

var healthbars;
var power,powerimg;

var bg, bgImg;
var stones, stonesImg;
var points, pointsImg;
var bullet, bulletAnimation;
var heart1,heart2,heart3,heart1img,heart2img,heart3img;
var ground;
var invisibleground;

var x,y;
var canvas;
var edges;
var life=3;
var gamestate="play";

function preload(){
 /*robRun=loadAnimation("Animages/runRob/1.png","Animages/runRob/2.png","Animages/runRob/3.png","Animages/runRob/4.png","Animages/runRob/5.png","Animages/runRob/6.png","Animages/runRob/7.png","Animages/runRob/8.png");
  robJump=loadAnimation("Animages/jumpRob/1.png","Animages/jumpRob/2.png","Animages/jumpRob/3.png","Animages/jumpRob/4.png","Animages/jumpRob/5.png","Animages/jumpRob/6.png","Animages/jumpRob/7.png","Animages/jumpRob/8.png","Animages/jumpRob/9.png","Animages/jumpRob/10.png");
  robRunShoot=loadAnimation("Animages/runShootRob/1.png","Animages/runShootRob/1.png","Animages/runShootRob/1.png","Animages/runShootRob/1.png","Animages/runShootRob/1.png","Animages/runShootRob/1.png","Animages/runShootRob/1.png","Animages/runShootRob/1.png","Animages/runShootRob/1.png");
  robShoot=loadAnimation("Animages/shootRob/1.png","Animages/shootRob/2.png","Animages/shootRob/3.png","Animages/shootRob/4.png");
  robIdle=loadAnimation("Animages/idleRob/1.png","Animages/idleRob/2.png","Animages/idleRob/3.png","Animages/idleRob/4.png","Animages/idleRob/5.png","Animages/idleRob/6.png","Animages/idleRob/7.png","Animages/idleRob/8.png","Animages/idleRob/9.png","Animages/idleRob/10.png");

  boyRun=loadAnimation("Animages/runBoy/1.png","Animages/runBoy/2.png","Animages/runBoy/3.png","Animages/runBoy/4.png","Animages/runBoy/5.png","Animages/runBoy/6.png","Animages/runBoy/7.png","Animages/runBoy/8.png","Animages/runBoy/9.png","Animages/runBoy/10.png","Animages/runBoy/11.png","Animages/runBoy/12.png","Animages/runBoy/13.png","Animages/runBoy/14.png","Animages/runBoy/15.png");
  boyJump=loadAnimation("Animages/jumpBoy/1.png","Animages/jumpBoy/2.png","Animages/jumpBoy/3.png","Animages/jumpBoy/4.png","Animages/jumpBoy/5.png","Animages/jumpBoy/6.png","Animages/jumpBoy/7.png","Animages/jumpBoy/8.png","Animages/jumpBoy/9.png","Animages/jumpBoy/10.png","Animages/jumpBoy/11.png","Animages/jumpBoy/12.png","Animages/jumpBoy/13.png","Animages/jumpBoy/14.png","Animages/jumpBoy/15.png");
  boyDead=loadAnimation("Animages/deadBoy/1.png","Animages/deadBoy/2.png","Animages/deadBoy/3.png","Animages/deadBoy/4.png","Animages/deadBoy/5.png","Animages/deadBoy/6.png","Animages/deadBoy/7.png","Animages/deadBoy/8.png","Animages/deadBoy/9.png","Animages/deadBoy/10.png","Animages/deadBoy/11.png","Animages/deadBoy/12.png","Animages/deadBoy/13.png","Animages/deadBoy/14.png","Animages/deadBoy/15.png");*/
  
  //bgImg=loadImage("Animages/bg.jpg");
  //pointsImg=loadImage("Animages/points.png");

  heart1img=loadImage("Animages/heart.png");
  //heart2img=loadImage("Animages/heart.png");
  //heart3img=loadImage("Animages/heart.png"); 

  powerimg=loadImage("Animages/medic.png");
}

function setup(){
  canvas = createCanvas(windowWidth, windowHeight);

  edges = createEdgeSprites();

  invisibleground=createSprite(windowWidth/2,windowHeight-90,windowWidth,90);
  invisibleground.visible=false;
  
  
  heart1=createSprite(width-200,50)
  heart1.addImage(heart1img)
  heart1.scale=0.1;

  heart2=createSprite(width-250,50)
  heart2.addImage(heart1img)
  heart2.scale=0.1;

  heart3=createSprite(width-300,50);
  heart3.addImage(heart1img);
  heart3.scale=0.1;
  

 // bheart1=createSprite(width-200,50);
  // bheart1.addImage(bheart1img);
   //bheart1.scale=0.1;
   //bheart1.visible=false;

  rob = createSprite(438,159,20,20);
  rob.shapeColor="red";
  //rob.addAnimation("running",robRun);
  //rob.scale=0.2;
  //rob.setCollider("circle",0,0,30);
  rob.setCollider("rectangle",0,0,150,rob.height*1.5);
  rob.debug=true;



 //bg=createSprite(width/2,height/2);
 /* bg.addImage(bgIm);
  bg.x=bg.width/2;
  bg.velocityX=-2;
  bg.scale=5;*/

  boy=createSprite(100,200,50,50);
  /*boy.addAnimation("running",boyRun); 
  boy.scale=0.2;
  boy.setCollider("circle",0,0,30);*/

  //power=createSprite(50,50,30,20);
  /*power.addImage(powerimg)
  power2=createSprite(150,50,30,20);
  power3=createSprite(200,50,30,20);
  power4=createSprite(250,50,30,20);

  powers.push(power2);
  powers.push(power3);
  powers.push(power4);
  powers.push(power1);*/

  //ground = createSprite(windowWidth/2, windowHeight);

  rob.velocityX =5;
  rob.velocityY = 15;
}

function draw() {
  background("cyan");

  x = Math.round(random(-25,25));
  y = Math.round(random(-25,45));

  /*if (bg.x<0){
    bg.x=bg.width-200;
  }

  bg.velocityX=-2;*/
  
 rob.velocityX =x*2
  rob.velocityY = y*4;

  //rob.x = x;
  //rob.y = y;

  if(keyDown("RIGHT_ARROW")){
    boy.x=boy.x+5;
  }

  if(keyDown("LEFT_ARROW")){
    boy.x=boy.x-5;
  }
  
  if(keyDown("UP_ARROW")){
    boy.velocityY=-10;
  }

  boy.velocityY=boy.velocityY+0.5;
  
 // AI_robots();

 rob.bounceOff(edges);
 boy.collide(invisibleground);

 textSize(50);
 fill("RED");

 if (boy.isTouching(rob)){
  text("DANGER- RUN",windowWidth/2,windowHeight/2);
  life--;  
  boy.x=100;
  boy.y=100;
  boy.velocityX+=2
  /*heart1.visible=false;
    bheart1.visible=true;*/
  }

  console.log(life);
  drawSprites();
}

function scientist(){ 
}

function AI_robots(){
}
