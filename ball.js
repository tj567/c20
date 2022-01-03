class Ball {
    constructor(x,y,radius){
        var options = {
            restitution: 3,
            frictionAir: 0.05,
            density: 0.1,
        }

        this.b = Bodies.circle(x,y,radius, options);
        this.r = radius;
        World.add(planet, this.b);
    }
    display(){
        var pos = this.b.position;
        var angle = this.b.angle;

        push();
        translate(pos.x, pos.y); 
        rotate(angle);
        ellipseMode(RADIUS);
        fill("green");
        ellipse(0,0,this.r,this.r);
        pop();
    }
}
