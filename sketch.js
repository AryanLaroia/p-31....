const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var ground, division1, division2, division3, division4, division5, division6, division7;

var particles=[];
var plinkos=[];
var divisions=[];

var particle;


function setup() {
  
  var canvas = createCanvas(480,600);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(240,580,480,30);
    division1 = new Division(5, 420, 5, 300);
    division2 = new Division(85, 420, 5, 300);
    division3 = new Division(85+80, 420, 5, 300);
    division4 = new Division(85+80+80, 420, 5, 300);
    division5 = new Division(85+80+80+80, 420, 5, 300);
    division6 = new Division(85+80+80+80+80, 420, 5, 300);
    division7 = new Division(85+80+80+80+160, 420, 5, 300);
    for(var j=40;j<= width; j = j+50){
     plinkos.push(new Pinko(j,75,10));
    }
   for(var j=15;j<= width-10; j = j+50){
      plinkos.push(new Pinko(j,135,10));
    }
    for(var j=10;j<= width-10; j = j+50){
      plinkos.push(new Pinko(j,205,10));
    }
}

function draw() {
  background("black"); 
  Engine.update(engine); 
  ground.display();
  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
  division7.display();
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10, width/2+10),10,10));
  }
    
  for(var k =0; k<plinkos.length; k++ ){
   plinkos[k].display();
  }
  for(var j=0; j<particles.length;j++){
     particles[j].display();
  }
}
