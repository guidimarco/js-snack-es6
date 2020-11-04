// FUNCTION ASSIGNMENT
const askANumber = (array) => {
    let n; // user-number

    do {
        n = parseInt(prompt("Inserisci un numero compreso fra 1 e " + array.length + ":"));
    } while (isNaN(n) || n < 1 || n > array.length); // check

    return n;
};

// function indexFiltrator(x, i) {
//     if (i >= this[0] && i <= this[1]) {
//         return true;
//     } else {
//         return false;
//     }
// };

// const indexFiltrator = (array) => {
//
//     if (i >= this[0] && i <= this[1]) {
//         return true;
//     } else {
//         return false;
//     }
// }

// PART 1: define name array
const names = ["Marco", "Francesca", "Francesco", "Antonio", "Carla", "Alberto"];

console.log(
    `
    Insieme dei nomi di partenza:
    ${names[0]}, ${names[1]}, ${names[2]}, ${names[3]}, ${names[4]}, ${names[5]}.
    `
);

// PART 2: ask and push
const userNumbers = []; // 2 user numbers

for (let i = 0; i < 2; i++) { // ask 2 number
    let currentNumber = askANumber(names) - 1; // ask -1 --> cause i want the index
    userNumbers.push(currentNumber); // push
}

userNumbers.sort(); // sort the array

// print out
console.log(
    `
    L'utente ha scelto i nomi che vanno dal ${userNumbers[0]+1} al ${userNumbers[1]+1}.
    `
);

// PART 3: generate new array
var userNames = [];
var userNamesString;

// 3 VERS 1.0 --> slice
userNames = names.slice(userNumbers[0], userNumbers[1] + 1);
userNamesString = userNames.join(" - "); // for stamp the output

console.log(
    `
    Nomi scelti dall'utente - VERS 1.0:
    ${userNamesString}.
    `
);

// 3 VERS 2.0 --> filter
userNames = [];

userNames = names.filter( (x, i) => {
    if (i >= userNumbers[0] && i <= userNumbers[1]) {
        return true;
    } else {
        return false;
    }
}, userNumbers);
userNamesString = userNames.join(" - "); // for stamp the output

console.log(
    `
    Nomi scelti dall'utente - VERS 2.0:
    ${userNamesString}.
    `
);

// 3 VERS 3.0 --> cycle
userNames = [];
for (let i = userNumbers[0]; i <= userNumbers[1]; i++) {
    userNames.push(names[i]);
}
userNamesString = userNames.join(" - "); // for stamp the output

console.log(
    `
    Nomi scelti dall'utente - VERS 3.0:
    ${userNamesString}.
    `
);
