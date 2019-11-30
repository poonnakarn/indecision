var nameVar = "Poonnakarn";
var nameVar = "Mike";
console.log("nameVar", nameVar);
// weakness of var -> it can be redefined

let nameLet = "Andrew";
nameLet = "Julie";
console.log("nameLet", nameLet);

const nameConst = "Frank";
console.log("nameConst", nameConst);

// var, let, const all is function scope
function getPetName() {
  const petName = "Hal";
  return petName;
}

const petName = getPetName();
console.log(petName);

// Block scoping of variable
// Let and const are block scoped

var fullName = "Poonnakarn Panjasriprakarn";
let firstName;

if (fullName) {
  firstName = fullName.split(" ")[0];
  console.log(firstName);
}

console.log(firstName);
