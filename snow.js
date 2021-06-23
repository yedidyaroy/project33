class Snow {
    constructor(x, y) {
        var options ={
        restitution:0.4 
         }
        
        this.r = 10;
        this.body = Bodies.circle(x, y, this.r, options);
        this.trajectory=[];
        World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;
        if (this.body.velocity.x>10 && this.body.position.x>200){
            var position = [this.body.position.x,this.body.position.y];
            this.trajectory.push(position);
          }
          
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        noStroke();
        fill("white");
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }

};