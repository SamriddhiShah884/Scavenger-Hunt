var bImg;
var ladybug, bell, owl , swing,cup, lamp1, lamp2;
var ladybugFound=0;
var bellFound=0;
var owlFound=0;
var swingFound=0;
var cupFound=0;
var lampFound=0;
var tingSound;

var database;
var form;
var player;
var game;
var ladybugScore, bellScore, owlScore, swingScore, cupScore, lampScore=0;

var gameState=0;

var playerCount;
//0 for form mode, 1 is for play mode, 2 is for end mode

//lamp1 is the purple one and lamp2 is yellow

function preload(){
  bImg=loadImage("scene/Animal Tree House.webp");
 tingSound=loadSound("bubble.mp3");

}

function setup() {
 canvas=createCanvas(1504-300,1003);

 database=firebase.database();
 console.log(database);

 form=new Form();
 game=new Game();

 ladybug=createSprite (904,1003-130,35,35);
 ladybug.shapeColor="#ffffff00";


 bell = createSprite (62,630,25,95);
 bell.shapeColor="#ffffff00";

 owl =createSprite (1060,345,55,105);
 owl.shapeColor="#ffffff00";

 swing= createSprite (180,320,115,35);
 swing.shapeColor="#ffffff00";



 lamp2=createSprite (780,680,25,70);
 lamp2.shapeColor="#ffffff00";

 cup=createSprite (700,390,25,30);
 cup.shapeColor="#ffffff00";

 gameState=game.getState();

 game.start();


 //#ffffff00 transparent hex
}


function draw() {
    background(bImg);
    
if(playerCount===0){
  game.update(1);
}


    

  if(gameState===1){

    clear ();
    form.hide();


//ladybug.onclick=ladybugCircle();
if(mousePressedOver(ladybug)){
  console.log("ladybug clicked new");
  ladybugFound=1;
  tingSound.play();
}

if(mousePressedOver(bell)){
  console.log("bell clicked new");
  bellFound=1;
  tingSound.play();
}

if(mousePressedOver(owl)){
  console.log("owl clicked new");
  owlFound=1;
  tingSound.play();
}

if(mousePressedOver(swing)){
  console.log("swing clicked new");
  swingFound=1;

  tingSound.play();
}

if(mousePressedOver(cup)){
  //console.log("swing clicked new");
  cupFound=1;
  tingSound.play();
}

if(mousePressedOver(lamp2)){
  //console.log("swing clicked new");
 lampFound=1;
 tingSound.play();
}


if(mousePressedOver(lamp2)){
  //console.log("swing clicked new");

}

if(ladybugFound===1){
  fill ("#ffffff00");
  strokeWeight (3);
  stroke ("white");
  circle (904,873, 100);
  document.getElementById("cross1").src = "tick.png";
}

if(bellFound===1){
  fill ("#ffffff00");
  strokeWeight (3);
  stroke ("white");
  circle (bell.x+15,bell.y, 140);
  document.getElementById("cross2").src = "tick.png";
}

if(owlFound===1){
  fill ("#ffffff00");
  strokeWeight (3);
  stroke ("white");
  circle (owl.x,owl.y, 200);
  document.getElementById("cross3").src = "tick.png";
}

if(swingFound===1){
  fill ("#ffffff00");
  strokeWeight (3);
  stroke ("white");
  circle (swing.x,swing.y, 150);
  document.getElementById("cross4").src = "tick.png";
}

if(cupFound===1){
  fill ("#ffffff00");
  strokeWeight (3);
  stroke ("white");
  circle (cup.x,cup.y, 50);
  document.getElementById("cross5").src = "tick.png";
}

if(lampFound===1){
  fill ("#ffffff00");
  strokeWeight (3);
  stroke ("white");
  
  circle (lamp2.x,lamp2.y, 100);
  document.getElementById("cross6").src = "tick.png";
}





  
  }


  drawSprites();
}

