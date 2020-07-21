class Dustbin{
    constructor(x,y,width,height){
        var options = {            
            isStatic:true            
        }
        this.x =x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.angle = 0;
        this.image = loadImage("./dustbingreen.png");
        this.LBody = Bodies.rectangle(x-width/2, y-height/2, 20, height, options);
        Matter.Body.setAngle(this.LBody,this.angle);
        this.RBody = Bodies.rectangle(x+width/2, y-height/2, 20, height, options);
        Matter.Body.setAngle(this.RBody,-1*this.angle);
        this.body = Bodies.rectangle(x, y, 200, 20, options);
        World.add(world, this.body);
        World.add(world,this.LBody);
        World.add(world,this.RBody);
    }

       display(){
        var pos = this.body.position;
        var Lpos = this.LBody.position;
        var Rpos = this.RBody.position;
       
        push();
        rectMode(CENTER);
        angleMode(RADIANS);
        translate(Lpos.x,Lpos.y);
        rotate(this.angle);
        
        fill("blue");
       // rect(0,0,20, this.height);
        pop();

        push();
        rectMode(CENTER);
        angleMode(RADIANS);
        translate(Rpos.x,Rpos.y);
        rotate(-1*this.angle);
        
        fill("blue");
       // rect(0,0,20, this.height);
        pop();

        push();
        rectMode(CENTER);
        angleMode(RADIANS);
        translate(pos.x,pos.y);
       // rotate(this.angle);
        imageMode(CENTER);
        image(this.image,0,-this.height/2,this.width,this.height);
       // fill("blue");
        //rect(0,0,this.width,20);
        pop();
    }
}
