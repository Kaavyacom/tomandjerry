var bg
var tom1
var tom2
var jerry1
var jerry2
var tom
var jerry
var tom3,jerry3


function preload() {
    //load the images here
    bg=loadImage("images/garden.png") 
    tom1=loadImage("images/cat1.png")
    tom2 =loadAnimation("images/cat2.png","images/cat3.png")
    jerry1=loadImage("images/mouse2.png")
    jerry2=loadAnimation("images/mouse3.png")
    tom3=loadImage("images/cat4.png")
    jerry3=loadImage("images/mouse1.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom=createSprite(870,600)
    tom.addImage(tom1)
    tom.scale=0.2
    jerry=createSprite(200,600)
    jerry.addImage(jerry1)
    jerry.scale=0.15

}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
if(tom.x-jerry.x>(tom.width-jerry.width)/2){
tom.velocityX=0
tom.addImage(tom3)
tom.x=300
tom.scale=0.2
jerry.addImage(jerry3)
jerry.scale=0.15
}
    drawSprites();
}


function keyPressed(){

if(keyDown("LEFT_ARROW")){
jerry.addAnimation("jerryteasing",jerry2)
jerry.changeAnimation("jerryteasing")
tom.velocityX=-5
tom.addAnimation("tomrunning",tom2)
tom.changeAnimation("tomrunning")
}
  //For moving and changing animation write code here


}
