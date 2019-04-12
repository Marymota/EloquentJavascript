for (let i=1; i<=100; i++){
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
}}


