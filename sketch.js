const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var ouEengine, ourWorld,object;

var ball1;

var ball2;

function setup(){

    createCanvas(400,400);
    ourEngine = Engine.create();
    ourWorld = ourEngine.world;

    var object_options = {
        isStatic:true
    }

    var ball1_options = {
        restitution: 1.5
    }

    var ball2_options = {
        restitution: 0.5
    }

    ball1 = Bodies.circle(200,100,20,ball1_options);   

    ball2 = Bodies.circle(200,50,20,ball2_options);

    object= Bodies.rectangle(200,400,400,20,object_options);
    World.add(ourWorld,object);
    World.add(ourWorld,ball1);
    World.add(ourWorld,ball2);
    
    console.log(object);
    console.log(object.position.x);
    console.log(object.position.y);
}

function draw(){
    background(0);
    Engine.update(ourEngine);
    fill("blue");
    rectMode(CENTER);
    rect(object.position.x,object.position.y,400,20);
    fill("red");
    ellipseMode(RADIUS)
    ellipse(ball1.position.x,ball1.position.y,20,20);
    ellipseMode(RADIUS)
    ellipse(ball2.position.x,ball2.position.y,20,20);
}