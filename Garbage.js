class Garbage 
{
 constructor(x,y)
 {

  
   
        var options = {
            restitution : 0.3,
            isStatic : true,
            friction : 0.5
    }
    
        this.body = Bodies.circle(x,y,25,options);
        this.r = 25;
        World.add(world,this.body);
        
    
 
}
        
        
        display(){
       var angle = this.body.angle;
       var pos = this.body.position;
       push();
       translate(pos.x,pos.y);
       rotate(angle);
       ellipseMode(RADIUS);
       fill("pink");
       ellipse(0,0,this.r);
        pop();
        }

    
}