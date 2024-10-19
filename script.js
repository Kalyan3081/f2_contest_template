/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

// console.log(arr);
function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  let developer = arr.filter((item) => item.profession === "developer");
  console.log(developer.map((item) => item.name));
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  let developer = arr.filter((item) => item.profession === "developer");
  developer.forEach((item) => console.log(item.name));
}

function addData() {
  //Write your code here, just console.log
  arr.push({
    id: 4, name: "susan", age: "20",
    profession: "intern"
  });
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  arr = arr.filter((item) => item.profession !== "admin");
  console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
  let arr2 = [
    { id: 5, name: "vijay", age: "21", profession: 'Teacher' },
    { id: 6, name: "saurab", age: "25", profession: 'Engineer' },
    { id: 7, name: "ufo", age: "50", profession: 'Astronaut' },
  ]
  console.log(arr.concat(arr2))
}
