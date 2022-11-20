//Create two different objects having same keys of properties and one methods
const player1 = {
  fname: "virat",
  lname: "kohli"
};
// creted one common function for multiple objects
//we mentioned one default parameter called country and 2 other parameters called city and state
//then passed arguments
const fullname = function (city, state, country = "india") {
  console.log(
    this.fname +
      " " +
      this.lname +
      " from " +
      city +
      " " +
      state +
      " " +
      country
  );
};
//invoking function and providing arguments
fullname.call(player1, "delhi", "UT");
//Apply method
fullname.apply(player1, ["delhi", "DELHI"]);
//Bind method
let getFullName = fullname.bind(player1, "delhi", "UT");
console.log(getFullName);
getFullName();

const player2 = {
  fname: "sachin",
  lname: "tendulkar"
};
// we can borrow a function from other object
//invoking function and providing arguments
fullname.call(player2, "mumbai", "maharastra");

const player3 = {
  fname: "rahul",
  lname: "dravid"
};
//invoking function and providing arguments
fullname.call(player3, "bangalore", "karnataka");
