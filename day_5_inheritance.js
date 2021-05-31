class Rectangle {
    constructor(w, h) {
        this.w = w;
        this.h = h;
    }

}
Rectangle.prototype.area = function(){
    return this.w * this.h
}
class Square extends Rectangle{
    constructor(h) {
        super(h)
        this.h = h
    //  console.log("initilizing swaure object")
    //  console.log(w,h)
    //     super(w,h)
    }
    // area(){
    //     return super.area();
    // }
}

function main(){
    rect = new Rectangle(2,4)
    square = new Square(3)
    console.log(rect.area())
    console.log(square.area())
}
// main()
if (JSON.stringify(Object.getOwnPropertyNames(Square.prototype)) === JSON.stringify([ 'constructor' ])) {
    const rec = new Rectangle(3, 4);
    const sqr = new Square(3);
    
    console.log(rec.area());
    console.log(sqr.area());
} else {
    console.log(-1);
    console.log(-1);
}