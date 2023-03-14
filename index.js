function area(length=2, breadth=4) {
    return length * breadth;
}

const variable = () => 50;

const perimeter = () => 30;

function calculate(a, b=20, c=b * area(), d=c+perimeter()) {
    return a + b + c + d;
}

console.log(calculate(20));
console.log(calculate(40, 50, 70, 60));
console.log(calculate(40, 50));