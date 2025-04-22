// async way
console.log("1920");
console.log("1930");

setTimeout(() => {
  console.log("1940");
}, 2000);

sum(2,3) //sum func call test 

console.log("1950");
// async way
 
 
function sum(a, b) {
  var result = a + b;
  console.log(result);
}

sum(1, 2);
