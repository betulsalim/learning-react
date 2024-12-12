const users = ["Betül","Burak","Nesrin"];

/*
push
map
find
filter
some
every
includes
*/
//push
users.push("Ayşe");
users.push("İbrahim");
console.log(users);


//map
console.log();

console.log("For ile");
console.log();


for (let index = 0; index < users.length; index++) {
  const element = users[index];
  console.log(element);
}
console.log();

console.log("map ile");

console.log();

users.map((item) => {
  console.log(item);

})

const UsersObj = [{
  name: "Çiğdem",
  age: 20
},{
  name: "Cemalettin",
  age: 30
},{
  name: "Nafiye",
  age: 60
},{
  name: "Çiğdem",
  age: 28
}];

console.log();

UsersObj.map((item) => {
  console.log(item);

})

UsersObj.map((item) => {
  console.log(item.name);

})
console.log();

//find
console.log("Find");

const result = UsersObj.find((item) => item.name === "Cemalettin")
console.log(result);


console.log();

//filter

const result1  = UsersObj.filter((item) => item.name == "Çiğdem")
console.log(result1);
console.log();

//some
console.log("Some dizideki tek bir eleman sağlasa bile true");

const result2 = UsersObj.some((item) => item.name == "Çiğdem")
console.log(result2);


console.log();

//every
console.log("Every dizideki bütün elemanlar şartı sağlarsa");

const result3 = UsersObj.every((item) => item.age > 5)
console.log(result3);

console.log();

//includes
console.log("İnclude dizide include a verilen eleman var mı yok mu");

const result4 = users.includes("Burak")
console.log(result4);
