function Student(name, age, gender){
    this.name = name;
    this.age = age;
    this.gender = gender;
}

const student1 = new Student('Pankaj',23,'Male');
const student2 = new Student('Reena',25,'Female');
const student3 = new Student('Rajeev',26,'Male');

console.log(student1);
console.log(student2);
console.log(student3);

student1.city = "Delhi";

Student.prototype.branch ='CSE';
Student.prototype.college= 'ABC';

console.log(student1.branch);
console.log(student1.college);

Student.prototype = { college : 'xyz', branch: 'IT'}

const student4 = new Student('vijay',33,'male');

console.log(student4);
console.log(student4.branch);
console.log(student4.college);
console.log(student1.branch);
console.log(student1.college);