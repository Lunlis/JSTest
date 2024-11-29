// const printSum = (a, b) => {
//     return console.log(a + b);
// };

// const a = 50;
// const b = 71;


// (sum(a,b));

function ucFunc (str) {
    if (!str) return str;
    let result = ``;
    return result = str[0].toUpperCase() + str.slice(1);
}

let sentence = `!`;

console.log(ucFunc(sentence));