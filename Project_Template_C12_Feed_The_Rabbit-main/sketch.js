var garden,rabbit;
var gardenImg,rabbitImg;
var apple
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  applei=loadImage("apple.png")
  leafi=loadImage("leaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background



garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

}


function draw() {
  background(0);
  rabbit.x=mouseX
  edges= createEdgeSprites();
  rabbit.collide(edges);
   applemaker()
   leafmaker()
  drawSprites();
}
function applemaker(){
  
  if (frameCount %25==0){
    apple=createSprite(random(5, 395),-50)
    apple.addImage(applei)
    apple.scale=0.1
    apple.velocityY=10
    apple.lifetime=90
  }
}
function leafmaker(){
  if (frameCount %45==0){
    leaf=createSprite(random(5, 395),-50)
    leaf.addImage(leafi)
    leaf.scale=0.1
    leaf.velocityY=10
    leaf.lifetime=90
  } 

}