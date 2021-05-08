 const Engine = Matter.Engine;
const World= Matter.World;
 const Bodies = Matter.Bodies;
 const Constraint = Matter.Constraint;

 var engine, world;
var plinkos=[];
var divisions=[];
var particles;
var divisionHeight=300;

function setup() {
  createCanvas(895,600);
  engine = Engine.create();
  world = engine.world;
  
  tryi= new Particle(200,300,10);
  ground = new Ground(width/2,590,width,10);

  for (var k=10;k<= innerWidth;k= k+80){
divisions.push(new Division(k,height-divisionHeight/2,8,divisionHeight))
  }

  for (var j=40;j <= width; j= j+50) {
    plinkos.push(new Plinko(j,60));
  }

  for (var j=15; j <=width-10; j = j+50){
    plinkos.push(new Plinko(j,120));
  }

  for (var j=40; j <=width-10; j = j+50){
    plinkos.push(new Plinko(j,180));
  }

  for (var j=15; j <=width-10; j = j+50){
    plinkos.push(new Plinko(j,240));
  }
    
}

function draw() {
  background(0);  
  Engine.update(engine);

 ground.display();
 tryi.display();

 if(frameCount % 60 === 0){
  particles.push(new Particle(random(width / 2 - 50, width / 2 + 50), 0, 10));
}

  for (var j=0; j<plinkos.length; j++){
    plinkos[j].display();
  }

  for (var k=0;k<= divisions.length;k++){
    divisions[k].display();
   }
    
   for (var h=0;h<= particles.length;h++){
    particles[h].display();
   }
 
}