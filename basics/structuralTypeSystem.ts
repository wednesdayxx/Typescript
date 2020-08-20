//One of typescripts principles is that type checking focuses on the shape that values have.
//In a structural type system, if two objects have the same shape, they are considered the same.
interface Point {
    x: number;
    y: number;
}

function printPoint(p: Point) {
    console.log(`${p.x}, ${p.y}`);
}

//prints "12, 26"
const point = { x: 12, y: 26 };
printPoint(point);

//----------------------------------------------------------------------------------------------------------//
//The point variable is never declared to be a POINT, However, Typescript compares the shape of point to the shape
//of Point in the type-check. They have the same shape, so the code passes.
//Shape-matching only requires a subset of the objects fields to match
const point3 = { x: 12, y: 26, z: 89 };
printPoint(point3); //prints "12, 26"

const rect = { x: 33, y: 3, width: 30, height: 80 };
printPoint(rect); //prints "33, 3"

const color = { hex: "#187ABF" };
printPoint(color); 

//There is no difference between how classes and objects conform to shapes
class VirtualPoint {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

const newVPoint = new VirtualPoint(13, 56);
printPoint(newVPoint); //prints"13, 56"