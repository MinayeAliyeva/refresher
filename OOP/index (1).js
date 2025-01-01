function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  console.log(`${this.name} səslənir.`);
};

function Dog(name, breed) {
  // Parent xüsusiyyətləri miras al
  Animal.call(this, name);
  this.breed = breed;
}

// Prototipi miras al
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

// Dog-a özünə məxsus metod əlavə et
Dog.prototype.bark = function () {
  console.log("Hav-hav!");
};

const cat = new Animal("Kitty", "Persian");
console.log("CAT", cat);

//   cat.bark(); // Error
// İstifadə
const myDog = new Dog("Rex", "Alman Çoban İti");
console.log("DOG", myDog);
