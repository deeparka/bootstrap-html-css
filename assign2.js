function Student(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}

let obj1 = new Student("Pankaj", 23, "Male");
let obj2 = new Student("Reena", 25, "Female");
let obj3 = new Student("Rajeev", 26, "Male");

Student.prototype.branch = "CSE";
Student.prototype.college = "ABC";

console.log("Name 1: " + obj1.name);
console.log("Age 1: " + obj1.age);
console.log("Gender 1: " + obj1.gender);
console.log("Branch 1: " + obj1.branch);
console.log("College 1: " + obj1.college);

console.log("Name 2: " + obj2.name);
console.log("Age 2: " + obj2.age);
console.log("Gender 2: " + obj2.gender);
console.log("Branch 2: " + obj2.branch);
console.log("College 2: " + obj2.college);

console.log("Name 3: " + obj3.name);
console.log("Age 3: " + obj3.age);
console.log("Gender 3: " + obj3.gender);
console.log("Branch 3: " + obj3.branch);
console.log("College 3: " + obj3.college);