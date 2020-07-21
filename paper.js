class Paper{
    constructor(x,y,radius){
        var options = {
            restitution: 0.3,
            isStatic:false,
            density:1.2,
            friction:0.5
        }
        this.x =x;
        this.y = y;
        this.radius = radius;
        this.image = loadImage("./paper.png");
        this.body = Bodies.circle(x, y, (radius-20)/2,options);
        World.add(world, this.body);

    }

    display(){
        
var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,0,0,this.radius,this.radius);
        pop();
       // ellipseMode(RADIUS);
        //fill("pink");
        //ellipse(pos.x,pos.y,this.radius, this.radius);   
    } 

}