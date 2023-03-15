var k = 90;
console.log(k);
{
    var l = 40;
    k = 80;
}
console.log(k);
console.log(l);


//---const -----//
const ll = 67;
console.log(ll);
{
    console.log(l);
     //ll= 45;
}
console.log(ll);

//------let -------//
let f = 67;
console.log(f);
{
    console.log(f);
    f= 45;
}
console.log(f);    // inner variables are called even after re-assign