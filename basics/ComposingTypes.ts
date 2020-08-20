//Unions. You can declare that a type could be one of many types. eg boolean could be true or false
type MyBool = true | false;

//----------------------------------------------------------------------------------------------------------//
//Union types to describe the set of strings or numbers literal that a value is allowed to be
type WindowStates = "open" | "closed" | "minimized";
type LockStates = "locked" | "unlocked";
type OddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;

//----------------------------------------------------------------------------------------------------------//
//Union used to handle different types. eg array or string
function getLength(obj: string | string[]) {
    return obj.length;
}

//----------------------------------------------------------------------------------------------------------//
/* to learn the type of variable, use typeof: 
string typeof s === "string"
number typeof n === "number"
boolean typeof b === "boolean"
undefined typeof u === "undefined"
function typeof f === "function"
array Array.isArray(a) */
//Make a function return different values depending on whether it is passed as a string of array:
function wrapInArray(obj: string | string[]) {
    if (typeof obj === "string") {
        return [obj];
        //       ^ = (parameter) obj: string
    }
    else {
        return obj;
    }
}

//----------------------------------------------------------------------------------------------------------//
//GENERICS can provide variable to types. such as an array. an array without generics can contain anything.
//An array with generics can describe the values in the array.
type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{ name: string }>;

//Declaring your own types using generics.
interface Backpack<Type> {
    add: (obj: Type) => void;
    get: () => Type;
}

//this is a shortcut to tell typescript there is a constant called 'backpack'. and don't worry where it came from.
declare const backpack: Backpack<string>;

//object is a string, because we declared it above as a variable part of backpack.
const object = backpack.get();

//because the variable is a string, you can't pass a number
backpack.add(23);