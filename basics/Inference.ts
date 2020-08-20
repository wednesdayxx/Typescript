//Type Inference, when there is no explicit type annotation.

let helloWorld = "Hello World";
//      ^ = let helloWorld: string

//----------------------------------------------------------------------------------------------------------//
//Type Inference is made from several expressions, used to calculate the "best common type"
let x = [13, 40, null];
//      ^ = let x: (number | null)[]

//Where types share the same structure, but no one type is superior of all candidate types
let zoo1 = [new Rhino(), new Elephant(), new Snake()];
//      ^ = let zoo: (Rhino | Elephant | Snake)[]

//Infer Zoo as an Animal[], so we set a type that is superior
let zoo: Animal[] = [new Rhino(), new Elephant(), new Snake()];
//      ^ = let zoo: Animal[]