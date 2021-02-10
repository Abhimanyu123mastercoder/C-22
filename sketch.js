const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies

var myEngine, myWorld, ball,ground;

function setup() {
  createCanvas(800,400);
  //box=createSprite(400, 200, 50, 50);
  var ballOptions={
    restitution:1.0
  }
  var groundOptions={
    isStatic:true
  }
  myEngine=Engine.create();
  myWorld=myEngine.world;
  ball=Bodies.circle(200,100,25,ballOptions)
  ground=Bodies.rectangle(400,390,800,20,groundOptions);
  World.add(myWorld,ball);
  World.add(myWorld,ground);
  console.log(ball);
 
}

function draw() {
  background("black");
  Engine.update(myEngine);  
  //drawSprites();
  rectMode(CENTER);
  
  circle(ball.position.x,ball.position.y,50);
  rect(ground.position.x,ground.position.y,800,20);
}