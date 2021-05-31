class Polygon{
    constructor(sides){
        this.sides = sides
    }
    perimeter(){
        let perimeter = 0
        for (let p in this.sides) {
                perimeter += this.sides[p]
       }
       return perimeter
    }
}
const rectangle = new Polygon([10, 20, 10, 20]);
const square = new Polygon([10, 10, 10, 10]);
const pentagon = new Polygon([10, 20, 30, 40, 43]);

console.log(rectangle.perimeter());
console.log(square.perimeter());
console.log(pentagon.perimeter());