function isTouching(objeto1,objeto2){
    if (objeto1.x - objeto2.x < objeto2.width/2 + objeto1.width/2
      && objeto2.x - objeto1.x < objeto2.width/2 + objeto1.width/2
      && objeto1.y - objeto2.y < objeto2.height/2 + objeto1.height/2
      && objeto2.y - objeto2.y < objeto2.height/2 + objeto1.height/2) {
      
      return true;
    }
    else {
      return false;
    } 
  }

  function bounssaeoffa(bjeto1,bjeto2){
		if (bjeto1.x - bjeto2.x < bjeto2.width/2 + bjeto1.width/2
			&& bjeto2.x - bjeto1.x < bjeto2.width/2 + bjeto1.width/2){
				bjeto1.velocityX*=(-1);
				bjeto2.velocityX*=(-1);
			}
		if (bjeto1.y - bjeto2.y < bjeto2.height/2 + bjeto1.height/2
			&& bjeto2.y - bjeto2.y < bjeto2.height/2 + bjeto1.height/2){
				bjeto1.velocityY*=(-1);
				bjeto2.velocityY*=(-1);
			}
	}