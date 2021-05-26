
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ce,g,paperobject,p,d;
function preload(){
p=loadImage("paper.png")
d=loadImage("dustbingreen.png")


}

function setup() {
	createCanvas(800, 900);
	
	var options={
		istatic:false,
		restitution:0.3,
		friction:0.5,
		density:1.2}

	//var ground=createSprite(0,800,800,10)
	

	engine = Engine.create();
	world = engine.world;
    
	//Create the Bodies Here.
	ce=Bodies.circle(100, 0, 60,options) 
	World.add(world,ce)

	d1=Bodies.rectangle(600,750,7,220,{isStatic:true})
    World.add(world,d1)
    d2=Bodies.rectangle(750,750,7,220,{isStatic:true})
    World.add(world,d2)


   g=Bodies.rectangle(400,870,800,10,{isStatic:true})
   World.add(world,g)
   
	Engine.run(engine);
  
}


function draw() {
 background("white");
imageMode(RADIUS)
 image(p,ce.position.x,ce.position.y,60,60)
rectMode(CENTER) 
rect(g.position.x,g.position.y,800,10)

rect(d1.position.x,d1.position.y,7,220)
rect(d2.position.x,d2.position.y,7,220)
image(d,500,545)





  drawSprites();
 
}
function keyPressed(){
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(this.ce,this.ce.position, {x:415,y:-1000})
	}
}


