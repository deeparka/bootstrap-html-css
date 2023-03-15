let count1 = 0;

// function creation
function increaseCount(){

    // increasing the count by 1
    count1 += 1;
    console.log("value" +count1);
}

let id = setTimeout(increaseCount, 3000);

// clearTimeout
//clearTimeout(id); 
console.log('setTimeout is stopped.');