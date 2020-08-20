//Create an object with an inferred type
const user = {
    name: "wednesday",
    id: 5150,
};

//----------------------------------------------------------------------------------------------------------//
//explicity describe this objects shape using an INTERFACE declaration:
interface User1 {
    name: string;
    id: number;
}

//Then declare that a Javascript object and conform to the shape of your new INTERFACE by using syntax:
const user1: User1 = {
    name: "wednesday",
    id: 5150,
};

//----------------------------------------------------------------------------------------------------------//
//Typescript and Javascript support classes and OO programming, Interface declaration with classes:
interface User2 {
    name: string;
    id: number;
}

class UserAccount {
    name: string;
    id: number;

    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
    }
}

const user2: User2 = new UserAccount("wednesday", 13);

//----------------------------------------------------------------------------------------------------------//
//Use interfaces to annotate parameters and return values to functions
const user3 = {
    name: "mark",
    id: 6,
};

interface User3 {
    name: string;
    id: number;
}

function getAdminUser(): User3 {
    return user3;
}

function deleteUser(user3: User3) {
    return user3;
}