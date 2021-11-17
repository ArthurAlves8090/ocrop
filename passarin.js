class passarin
{

    constructor(x,y)
    {
        var config_passaro = {
            restitution:0.8,
            friction:1,
            density:1
        }
        this.passaro = Bodies.rectangle(x,y,50,50,config_passaro)
        this.width=50;
        this.height=50;
        this.image=loadImage("bird.png");
        World.add(world, this.passaro);
    }
    display()
    {
        push();
        translate(this.passaro.position.x,this.passaro.position.y);
        rotate(this.passaro.angle);
        this.passaro.position.x=mouseX;
        this.passaro.position.y=mouseY;

        imageMode(CENTER);
        fill("lightgreen")
        image (this.image,0,0,this.width,this.height);
        pop();
    }


    
}
