var wall,thickness;
var bullet,speed,weight

function setup()
{
  createCanvas(1350,400);

  speed=random(55,90);
  weight=random(400,1500);
  thickness=random(22,83);

  bullet=createSprite(50, 200, 30, 10);
  bullet.shapeColor=color("white");
  bullet.velocityX=speed;

  wall=createSprite(1200, 200, thickness, height/2);
  wall.shapeColor=color(80,80,80);

}

function draw()
 {
  background("black");

  bullet.collide(wall);

  hasCollide();

  drawSprites();
}