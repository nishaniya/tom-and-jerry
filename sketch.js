var cat,mouse;
var catImg,mouseImg;
var gardenImg;
var catAni;


function preload() {
   catImg = loadAnimation("images/cat1.png")
   mouseImg = loadAnimation("images/mouse1.png")

   gardenImg = loadImage("images/garden.png");

   catAni = loadAnimation("images/cat2.png","images/cat3.png");
  
}
function setup(){
    createCanvas(1000,800);

    cat = createSprite(800,600,80,80);
    cat.addAnimation("catImg",catImg);
    cat.scale = 0.3;

    mouse= createSprite(200,600,80,80);
    mouse.addAnimation("mouseImg",mouseImg);
    mouse.scale = 0.2;
    

}

function draw() {

    background(gardenImg);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

 if(keyCode===LEFT_ARROW){

    cat.velocityX = -5;
    cat.addAnimation("catAni",catAni);
    cat.changeAnimation("catAni",catAni);
 }


}
