const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let universe;
let planet;
var ground, ball, wedge;
var angle = 60

function setup(){
  createCanvas(400,400);

  universe = Engine.create();

  planet = universe.world;

  var groundOptions = {
    isStatic: true
  }

  ground = Bodies.rectangle(200,390,400,10,groundOptions);
  World.add(planet, ground);

  ball =new Ball(200,100,35)

  var wedgeOptions = {
    isStatic: true
  }
  wedge = Bodies.rectangle(100,200,100,20,wedgeOptions);
  World.add(planet,wedge);
}

function draw() {
  background(51);

  Engine.update(universe);

  Matter.Body.rotate(wedge,angle)
  push();
  translate(wedge.position.x,wedge.position.y);
  rotate(angle);
  fill('yellow');
  rectMode(CENTER);
  rect(0,0,100,20);
  pop();
  
  angle +=0.1;

  push(); //store new setting
  fill('red')
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 400,10);
  pop(); //revert back to old setting

  ball.display();
}

