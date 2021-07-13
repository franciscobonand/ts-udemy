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

enum Role { ADMIN = 5, READ_ONLY, AUTHOR };

const person = {
    name: "Francisco",
    age: 83,
    hobbies: ['Sports', 'MCCC'],
    role: Role.ADMIN
};

let favActivities: string[];
favActivities = ['Sports'];

person.hobbies.forEach(hobby => {
    console.log(hobby.toUpperCase());
})

if (person.role == Role.ADMIN) {
    console.log("is admin");
}