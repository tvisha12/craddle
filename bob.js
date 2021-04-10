class Bob{
    constructor(x,y,radius){
        var options={
            isStatic:true,
            
         }

        this.body=Bodies.circle(x,y,radius,options)
        this.radius = radius;
        //this.height = height;
        World.add(world,this.body);
}
    display(){
        var pos =this.body.position;
        push ();
        translate(pos.x,pos.y);
        ellipseMode(CENTER);
        ellipse(0,0, this.radius);
        pop ();
    }
}