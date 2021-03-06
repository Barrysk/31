class resortera{
    constructor(bodyA, pointB){
        var options = { 
            bodyA: bodyA,
            pointB: pointB,
            length: 10,
            stiffness:0.04
        }
        this.image1 = loadImage("sprites/a.png")
        this.image2 = loadImage("sprites/b.png")
        this.image3 = loadImage("sprites/c.png")
        this.pointB = pointB
        this.chain = Constraint.create(options);
        World.add(world,this.chain); 
    }
    
    fly(){
        this.chain.bodyA = null
    }

    display(){
    image(this.image1,200,20)
    image(this.image2,170,20) 
    if(this.chain.bodyA){
        var pointA = this.chain.bodyA.position;
        var pointB = this.pointB
    push() 
    
        stroke(48,22,8);
          if(pointA.x < 220) {
            strokeWeight(7);
            line(pointA.x-20,pointA.y,pointB.x-10,pointB.y);
            line(pointA.x-20,pointA.y,pointB.x+30,pointB.y-3);
            image(this.image3,pointA.x-30,pointA.y-10,15,30)
          }

          else{
            strokeWeight(3);
            line(pointA.x+25,pointA.y,pointB.x-10,pointB.y);
            line(pointA.x+25,pointA.y,pointB.x+30,pointB.y-3);
            image(this.image3,pointA.x+25,pointA.y-10,15,30)
          }
            pop();
        }
     

    }
}