function isTouching(object1,object2){
    if (object2.x - object1.x < object1.width/2 + object2.width/2
      && object1.x - object2.x < object1.width/2 + object2.width/2
      && object2.y - object1.y < object1.height/2 + object2.height/2
      && object1.y - object2.y < object1.height/2 + object2.height/2) {
   return true;
  }
  else {
    return false;
  }
  }

  function bounceOff(){
    if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2 && 
      fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2){
        movingRect.velocityX=movingRect.velocityX*(-1);
        fixedRect.velocityX=fixedRect.velocityX*(-1);
    
      }
      if(movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2 && 
        fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2){
          movingRect.velocityY=movingRect.velocityY*(-1);
          fixedRect.velocityY=fixedRect.velocityY*(-1);
      
        }
  }