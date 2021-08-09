const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

function setup()
{
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var options = {
    restitution : 0.7,
    frictionAir:0.008
  }

  ball = Bodies.circle(100,10,20, options);
  World.add(world, ball);

  var option2 = {
    restitution : 1,
    frictionAir:0.008
  }

  ball1 = Bodies.circle(300,20,20, option2);
  World.add(world, ball1);

  var option1={
    isStatic:true
  }

  ground = Bodies.rectangle(200,380,400,10,option1);
  World.add(world,ground);

}

function draw() 
{
  background(51);
  Engine.update(engine)

  fill ("cyan");
  ellipseMode(RADIUS)
  ellipse(ball.position.x, ball.position.y, 20);

  fill ("red");
  ellipseMode(RADIUS)
  ellipse(ball1.position.x, ball1.position.y, 10);

  fill("lightgreen");
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,400,10)
 
}

