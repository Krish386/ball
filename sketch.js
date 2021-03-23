function setup() {
  createCanvas(800,400);
  ball=createSprite(400, 200, 50, 50);
  ball.shapeColor=("blue")



}

function draw() {
  background(255,255,255);  

  if(keyDown(LEFT_ARROW))
  {
    ChangePostion(-1,0)
  }

  if(keyDown(RIGHT_ARROW))
  {
    ChangePostion(1,0)
  }

  if(keyDown(UP_ARROW))
  {
    ChangePostion(0,-1)
  }

  if(keyDown(DOWN_ARROW))
  {
    ChangePostion(0,1)
  }


  drawSprites();
}

function ChangePostion(x,y)
{
  ball.x=ball.x+1
  ball.y=ball.y+1
}