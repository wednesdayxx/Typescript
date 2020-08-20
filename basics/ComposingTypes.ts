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