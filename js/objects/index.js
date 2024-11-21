// JavaScript-də Obyekt Yaratmaq, Dəyişdirmək və Metodlar əlavə etmək

// 1. Obyekt Yaratmaq

// 1.1. Object Literal Sintaksisi ilə Obyekt Yaratmaq
// Bu üsul sadə obyektlər yaratmaq üçün istifadə olunur
const person = { name: "Minaya", age: 23 };

// 1.2. Konstruktor Funksiyası ilə Obyekt Yaratmaq
// Konstruktor funksiyaları obyektlərin yaradılması və başlanğıc dəyərlərin təyin edilməsi üçün istifadə olunur
function Person(name, age) {
  this.name = name;
  this.age = age;
}
const sally = new Person("Minaya", 23);
console.log("sally", sally);

// 1.3. Class Sintaksisi ilə Obyekt Yaratmaq (ES6+)
// Class sintaksisi daha oxunaqlı kod yazmağa kömək edir
class Animal {
  constructor(name) {
    this.name = name;
  }
}
const dog = new Animal("Pluppy");
console.log("dog", dog);

// 2. Obyekt Xüsusiyyətlərinə Müraciət Etmək
// Obyekt xüsusiyyətlərinə iki yolla müraciət etmək mümkündür: Nokta Notasiyası və Mötərizə Notasiyası
console.log(person.name); // Nokta Notasiyası: "Minaya"
console.log(person["age"]); // Mötərizə Notasiyası: 23

// 3. Obyekt Xüsusiyyətlərini Dəyişmək
// Mövcud bir xüsusiyyəti yeniləmək, yeni xüsusiyyət əlavə etmək və ya xüsusiyyəti silmək
person.age = 30; // Yaşı yeniləyir
person.city = "Dubai"; // Yeni bir xüsusiyyət əlavə edir
delete person.name; // "name" xüsusiyyətini silir

// 4. Xüsusiyyətin Mövcudluğunu Yoxlamaq
// Bir obyektin müəyyən xüsusiyyətə malik olub-olmadığını yoxlamaq üçün `in` operatorundan istifadə olunur
if ("name" in person) {
  console.log("mövcuddur"); // Əgər xüsusiyyət varsa "mövcuddur" yazacaq
}

// 5. Obyektdə Xüsusiyyətlər Üzərində Dövrə Girmək

// for...in döngüsü ilə obyektin bütün xüsusiyyətləri üzərində gəzə bilərik
for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}

// Object.keys() metodu ilə də xüsusiyyətlərin açarlarını alıb dövrə girə bilərik
Object.keys(person).forEach((key) => {
  console.log(`${key}: ${person[key]}`);
});

// 6. Obyektə Metod Əlavə Etmək
// JavaScript-də obyektlərə funksiya əlavə etmək mümkündür. Bu funksiyalar obyektin metodları adlanır.
const calculator = {
  add: function (a, b) {
    return a + b;
  },
};
console.log(calculator?.add(33, 4)); // 37

// 7. Obyektin JSON Formatına Çevrilməsi (Serialization)
// Obyektləri JSON formatına çevirib (serialization) və yenidən obyektə çevirmək mümkündür
const json = JSON.stringify(person); // JSON formatına çevirir
const obj = JSON.parse(json); // JSON formatından obyekt formatına çevirir
console.log(obj.name); // "Minaya"

// 8. Kalıtım (Inheritance)
// JavaScript-də prototip əsasında kalıtım (inheritance) dəstəklənir
function Animal(name) {
  this.name = name;
}
Animal.prototype.sayName = function () {
  console.log(`Mənim adım ${this.name}`);
};

const cat = new Animal("Mimi");
cat.sayName(); // "Mənim adım Mimi" yazacaq

// Xülasə: JavaScript obyektləri yaratmaq, dəyişdirmək və onlara metodlar əlavə etmək üçün çevik bir strukturdur.
// Prototip zənciri (prototype chain) vasitəsilə kalıtım tətbiq edilə bilər, JSON formatı ilə obyektlər seriyalizə edilə bilər.
