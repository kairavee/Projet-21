function hasCollide() 
{
    bullet.velocityX=0;
  var damage=0.5 * bulletWeight * bulletSpeed * bulletSpeed/(ThicknessofWall * ThicknessofWall * ThicknessofWall);

  if(damage>10)
  {
    bullet.shapeColor=color(255,0,0);
  }
  if(damage<10)                                                                             
  {
    bullet.shapeColor=color(0,255,0);
  }
}