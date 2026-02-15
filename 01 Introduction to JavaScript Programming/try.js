// class Animal {
//   constructor(lg) {
//     this.face = lg;
//   }
// }

// class Dog extends Animal {
//   constructor() {
//     super(4);
//     this.legs = Animal.face;
//   }
// }

// var result = new Dog();
// console.log(result.legs);
// class Animal {}

class Person {
  sayHello() {
    console.log("Hello");
  }
}

class Friend extends Person {
  sayHello() {
    console.log("Hey");
  }
}

var result = new Friend();
result.sayHello();
