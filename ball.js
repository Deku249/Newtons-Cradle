class Ball {
    constructor(x, y, radius ) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Matter.Bodies.circle(x, y, radius, options);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      //rectMODE(CENTER);
      strokeWeight(4);
      stroke ("red");  
      fill(255);
      ellipse(0, 0, this.radius);
      pop();
    }
  };
  