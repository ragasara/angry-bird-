const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var bird1;
var pig1;
var log1;
var box3;
var box4;
var pig3;
var log3;
var box5;
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new box(700,320,70,70);
    box2 = new box(920,320,70,70);
    ground = new Ground(600,height,1200,20)
    bird1=new bird(100,250);
    pig1=new pig(810,350);
    log1=new log(810,260,300,PI/2);
    box3=new box(700,240,70,70);
    box4=new box(920,240,70,70);
    pig3=new pig(810,220);
    log3=new log(810,180,300,PI/2);
    box5=new box(810,160,70,70);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    bird1.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig3.display();
    log3.display();
    box5.display();

    
}