class tronquin
{

    constructor(x,y,angle)
    {
        var config_toronco = {
            restitution:0.5,
            friction:1,
            density:1.5
        }
        this.toronco = Bodies.rectangle(x,y,500,50,config_toronco)
        this.width=500;
        this.height=50;
        this.image=loadImage("wood2.png");
        Matter.Body.setAngle(this.toronco,angle);
        World.add(world, this.toronco);
    }
    display()
    {
        push();
        translate(this.toronco.position.x,this.toronco.position.y);
        rotate(this.toronco.angle);


        imageMode(CENTER);
        fill("lightbrown");
        image (this.image,0,0,this.width,this.height);
        pop();
    }


    
}