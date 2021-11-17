class caxinha
{
    constructor(x,y,width,height)
    {
        var config_bolinha = {
            restitution:0.8,
            friction:1,
            density:1
        }
        this.bolinha = Bodies.rectangle(x,y,width,height,config_bolinha);
        this.width=width;
        this.height=height;
        this.image=loadImage("wood1.png");
        World.add(world,this.bolinha);
    }
    display()
    {
        push();
        translate(this.bolinha.position.x,this.bolinha.position.y)
        rotate(this.bolinha.angle)
        
        imageMode(CENTER);
        fill("white");
        image (this.image,0,0,this.width,this.height);
        pop();
    }






}
