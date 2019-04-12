/*for (let i=1; i<=100; i++){
    let five = i%5===0;
    let three = i%3===0;
if (three && five) {
    console.log('fizzbuzz');
} else if (three) {
    console.log('fizz');
} else if (five) {
    console.log('buzz')
} else {
    console.log(i);
}}*/


for (let n = 1; n <= 100; n++) {
    let output = "";
    if (n % 3 == 0) output += "Fizz";
    if (n % 5 == 0) output += "Buzz";
    console.log(output || n);
  }