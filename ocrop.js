class ocrop
{

    constructor(x,y)
    {
        var config_ocrop = {
            restitution:0.8,
            friction:1,
            density:1
        }
        this.porco = Bodies.rectangle(x,y,100,100,config_ocrop)
        this.width=100;
        this.height=100
        this.image=loadImage("enemy.png");
        World.add(world, this.porco);
    }
    display()
    {
        push();
        translate(this.porco.position.x,this.porco.position.y);
        rotate(this.porco.angle);


        imageMode(CENTER);
        fill("lightgreen")
        image (this.image,0,0,this.width,this.height);
        pop();
    }


    
}