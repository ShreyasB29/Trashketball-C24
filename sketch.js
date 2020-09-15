const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper, ground;
var bar,lbar,rbar;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paper= new Paper(200,500);
	ground = new Ground(400,690,800,20);
	bar = new Bars(700,670,165,20);
	lbar=new Bars(625,625,20,70);
	rbar=new Bars(775,625,20,70);

	Engine.run(engine);
  
}


function draw() {
  
  background(0);
  paper.display();  
  ground.display();
  bar.display();
  lbar.display();
  rbar.display();
  drawSprites();
 
}

function keyPressed(){

	if (keyCode===UP_ARROW){

		Matter.Body.applyForce(paper.body,paper.body.position,{x:45,y:-75});

	}

}

