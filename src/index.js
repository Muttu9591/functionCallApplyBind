const person = {
  name: "Muttu",
  lname: "Angadi",
  age: 27
};
console.log(person.name);
person.color = "grey";
person.getFullName = function () {
  return this.name + " " + this.lname;
};
console.log(person.getFullName());
delete person.color;
console.log(person);
