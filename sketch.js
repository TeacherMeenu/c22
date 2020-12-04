const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var myengine, world;
var ground, ball;

function setup(){
    var canvas = createCanvas(400,400);

    myengine = Engine.create();
    world = myengine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,400,20,{isStatic:true});
    World.add(world,ground);

    var ball_options ={
        restitution: 1.0
    }

    ball = Bodies.circle(200,100,20,ball_options);
    World.add(world,ball);

    console.log(ground);
}

function draw(){
    background("pink");
  Engine.update(myengine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);

    //circle(ball.position.x,ball.position.y,20);

    ellipseMode(RADIUS);
    ellipse(ball.position.x, ball.position.y, 20, 20);
}