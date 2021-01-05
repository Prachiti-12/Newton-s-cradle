
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var roof;
var bob1;
var bob2;
var bob3;
var bob4;
var bob5;
var rope1;
var rope2;
var rope3;
var rope4;
var rope5;

function setup() {
	createCanvas(800, 600);

roof=createSprite(290,100,300,20);
roof.shapeColor=('black');

bob1=createSprite(200,300,30,30);
bob1.shapeColor=('pink');

bob2=createSprite(250,300,30,30);
bob2.shapeColor=('pink');

bob3=createSprite(300,300,30,30);
bob3.shapeColor=('pink');

bob4=createSprite(350,300,30,30);
bob4.shapeColor=('pink');

bob5=createSprite(400,300,30,30);
bob5.shapeColor=('pink');
               

rope1=createSprite(200,200,2,200);
rope1.shapeColor=('black');

rope2=createSprite(250,200,2,200);
rope2.shapeColor=('black');

rope3=createSprite(300,200,2,200);
rope3.shapeColor=('black');

rope4=createSprite(350,200,2,200);
rope4.shapeColor=('black');

rope5=createSprite(400,200,2,200);
rope5.shapeColor=('black');



engine = Engine.create();
world = engine.world;

//Create the Bodies Here.
 

Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(' grey');
  
constructor(bob1,bob5,offsetX,offsetY)
{
  this.offsetX=offsetX
   this.offsetY=offsetY

 var options={
   bodyA:bob1,
   body:bob5,
   point:{x:this.offsetX,y:this.offsetY}

 }
//console.log(options);
this.rope1=constraint.create(options)
world.add(world,this.rope)

  drawSprites();
 
}

}

