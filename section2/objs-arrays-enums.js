"use strict";
// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];
// } = {
//     name: "Francisco",
//     age: 83,
//     hobbies: ['Sports', 'MCCC'],
//     role: [2, 'author']
// };
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 5] = "ADMIN";
    Role[Role["READ_ONLY"] = 6] = "READ_ONLY";
    Role[Role["AUTHOR"] = 7] = "AUTHOR";
})(Role || (Role = {}));
;
var person = {
    name: "Francisco",
    age: 83,
    hobbies: ['Sports', 'MCCC'],
    role: Role.ADMIN
};
var favActivities;
favActivities = ['Sports'];
person.hobbies.forEach(function (hobby) {
    console.log(hobby.toUpperCase());
});
if (person.role == Role.ADMIN) {
    console.log("is admin");
}
