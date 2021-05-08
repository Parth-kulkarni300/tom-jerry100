var bgImage;
var mouse;
var cat;
var catimg1,catimg2,catimg3;
var mouseimg1,mouseimg2,mouseimg3;


function preload() {
    //load the images here

    bgImage=loadImage("images/garden.png");
    catimg1=loadAnimation("images/cat1.png");
    mouseimg1=loadAnimation("images/mouse1.png");
    catimg2=loadAnimation("images/cat2.png","images/cat3.png");
    mouseimg2=loadAnimation("images/mouse2.png","images/mouse3.png");
    catimg3=loadAnimation("images/cat4.png");
    mouseimg3=loadAnimation("images/mouse4.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    cat=createSprite(900,600);
    cat.addAnimation("catty",catimg1);
    cat.scale=0.15;

    mouse=createSprite(100,600);
    mouse.addAnimation("jerry",mouseimg1);
    mouse.scale=0.15;



}

function draw() {

    background(bgImage);
    //Write condition here to evalute if tom and jerry collide


    if(cat.isTouching(mouse)){
      cat.velocityX=0;
      cat.addAnimation("HELLO",catimg3);
      cat.changeAnimation("HELLO");
      mouse.addAnimation("hi",mouseimg3);
      mouse.changeAnimation("hi");
    }
    drawSprites();
}


  

function keyPressed(){

  //For moving and changing animation write code here

   if(keyCode === LEFT_ARROW){
     cat.velocityX=-13;
     cat.addAnimation("tom",catimg2);
    cat.changeAnimation("tom");
    mouse.addAnimation("mouse teasing",mouseimg2);
    mouse.frameDelay = 25
    mouse.changeAnimation("mouse teasing");

  }


}
