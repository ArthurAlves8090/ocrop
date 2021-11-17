class cao
{
    constructor(x,y,width,height)
    {
        var config_bjetin = {
            isStatic:true
        }
    
        this.bjetin = Bodies.rectangle(x,y,width,height,config_bjetin);
        this.width=width;
        this.height=height;
        World.add(world,this.bjetin);
    }
    display()
    {
        rectMode(CENTER);
        fill("green");
	rect (this.bjetin.position.x,this.bjetin.position.y,this.width,this.height);
    }







}