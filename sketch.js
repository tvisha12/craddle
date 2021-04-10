
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

var bobobject1,bobobject2,bobobject3,bobobject4,bobobject5,bobobject,roofobject,chain,chain1,chain2,chain3,chain4,chain5,bobDiameter;
var roof,bob; 

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
  engine = Engine.create();
	world = engine.world;
 
//Create the Bodies Here.
	roofobject = new Roof(315,200,200,20);
	bobobject1 = new Bob(250,350,30);
  bobobject2 = new Bob(281,350,30);
  bobobject3 = new Bob(312,350,30);
  bobobject4 = new Bob(343,350,30);
  bobobject5 = new Bob(374,350,30);
  bobDiameter=60;
  //chain = new Chain(250,350,30,30);
  chain1 = new Chain(bobobject1.body,roofobject.body,-bobDiameter*1.1,150);
  chain2 = new Chain(bobobject2.body,roofobject.body,-bobDiameter*0.6,150);
  chain3 = new Chain(bobobject3.body,roofobject.body,-bobDiameter*0.01,150);
  chain4 = new Chain(bobobject4.body,roofobject.body,bobDiameter*0.5,150);
  chain5 = new Chain(bobobject5.body,roofobject.body,bobDiameter*1,150);
 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  Engine.update(engine);
  drawSprites();
  roofobject.display();
  bobobject1.display();
  bobobject2.display();
  bobobject3.display();
  bobobject4.display();
  bobobject5.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  //constrainedbob.display();
}



