// primitive data types
// PDT are number, string, boolean, null, undefined
// PDT are immutable i.e. whenever value is assigned to PDT variable, their value can not be changed.

var num1 = 10;
var num2 = num1;
if (num1 === num2) {
  console.log("same");
}
num1++;
console.log(num1);
console.log(num2);

let string1 = "Muttu";
let string2 = "Muttu";
if (string1 === string2) {
  console.log("same1");
}
//1st, we assigned string into "name" variable
//Then appended that name with another string called academy
// then,newly assigned variable will be relocated to the newly created space memory.
var name = "scaler";
var name = name + " Academy";
console.log(name);

//Non-primitive data types : Objects, Arrays, Functions
const obj1 = {
    name: "muttu",
    id: 3
  },
  obj2 = obj1;
console.log(obj2.id);
obj1.id++;
console.log(obj2.id);

const array1 = [1, 2, 3, 4];
const array2 = [1, 2, 3, 4];
if (array1 === array2) {
  console.log("yes");
} else {
  console.log("NO");
}
//
