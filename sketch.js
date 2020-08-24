var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var piece1, piece2, piece3;
var p1Body, p2Body, p3Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	packageSprite.debug = false;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	piece1 = createSprite(400,655, 200, 20);
	piece1.shapeColor = "red";

	piece2 = createSprite(300,605, 20, 100);
	piece2.shapeColor = "red";

	piece3 = createSprite(500,605, 20, 100);
	piece3.shapeColor = "red";


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 piece1Body = Bodies.rectangle(400,639, 200, 20, {isStatic:true} );
	 World.add(world, piece1Body);

	 piece2Body = Bodies.rectangle(300,605, 20, 100, {isStatic:true} );
	 World.add(world, piece2Body);
	 
	 piece3Body = Bodies.rectangle(500,605, 20, 100, {isStatic:true} );
	 World.add(world, piece3Body);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody, false);
    
  }
}



