
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var engine,world;
var paperBall;
var ground1;
var launcher1;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paperBall = new Paper(200, 150,70);
	ground1 = new Ground(width/2,370,width,20);
	dustbin = new Dustbin(1000,350,200,215);
	launcher1 = new Launcher(paperBall.body,{x:250,y:55});
	Engine.run(engine);
  
}


function draw() {
 
  background(180);
  ground1.display();
  paperBall.display();
  dustbin.display();
  launcher1.display();
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Body.applyForce(paperBall.body,paperBall.body.position,{x:130,y:-145});

	}
}

function mouseDragged(){
	Matter.Body.setPosition(paperBall.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	launcher1.fly();
}