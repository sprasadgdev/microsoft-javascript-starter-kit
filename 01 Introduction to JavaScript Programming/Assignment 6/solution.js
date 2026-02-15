// Task 1
var dairy = [
  "cheese",
  "sour cream",
  "milk",
  "yogurt",
  "ice cream",
  "milkshake",
];
// WRITE YOUR CODE HERE - Create the logDairy function and use a for...of loop to log each item in the dairy array
function logDairy() {
  for (item of dairy) {
    console.log(item);
  }
}
// Task 2
const animal = {
  canJump: true,
};

const bird = Object.create(animal);
bird.canFly = true;
bird.hasFeathers = true;
// WRITE YOUR CODE HERE - Create the birdCan function and use a for...of loop to log bird object's own properties
function birdCan() {
  for (const key of Object.keys(bird)) {
    console.log(`bird.${key}: ${bird[key]}`);
  }
}
// Task 3
function animalCan() {
  for (const key in bird) {
    console.log(`bird.${key}: ${bird[key]}`);
  }
}
// WRITE YOUR CODE HERE - Create the animalCan function and use a for...in loop to log all bird properties, including inherited ones
console.log(logDairy());
console.log(birdCan());
console.log(animalCan());
