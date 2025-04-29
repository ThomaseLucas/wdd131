const PI = 3.14159265358979323846;
let radius = 20;
let area = PI * (radius * radius);
console.log("The radius of the circle is: " + radius);
console.log("The area of the circle is: " + area);

if (area > 50) {
    radius += 5;
    area = PI * (radius * radius);
}

console.log("The new radius of the circle is: " + radius);
console.log("The new area of the circle is: " + area);

function exampleFunction() {
    let block = "I am block level or local";
    console.log(block); // This will work
}

console.log(block); // this is not in the scope of the function