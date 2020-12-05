
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,ball1,ball2,ball3,ball4,ball5
var chain1,chain2,chain3,chain4,chain5

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,100,600,30)
	ball1 = new Ball (100,200,50)
	chain1 = new Chain(ball1,ground)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();
  ball1.display();
  chain1.display();

  drawSprites();
 
}



