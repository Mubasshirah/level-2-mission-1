"use strict";
let course = 'web development';
console.log(course);
// **How to decleare object in typescript
let user = {
    firstName: 'maryam',
    middleName: 'noor',
    lastName: 'junaira',
    companyName: 'programming hero ',
    isMarried: true,
};
// kono akta file e jodi akta object define kora hoa tahole object name. dilei tar sob key gulo implicitly show kore. tai error korar chance thakena.
// ex: user.
// **function in typescript
// normal function
function add(num1, num2) {
    return num1 + num2;
}
add(2, 2);
// function er parameter er type assign na kore dile value any type hisebe dhore nibe and number+ boolean or number+string value dileu sta accept korbe. but type assign kroe dile wrong vabe value assign korle error dibe,
// arrow function
const addArrow = (num1, num2) => num1 + num2;
const result = addArrow(2, 2);
console.log(result);
