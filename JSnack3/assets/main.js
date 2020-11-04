const getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

const charGenerator = () => {
    // LOCAL VAR
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    // random number from 1 to alphabet.length
    // - 1 cause i want the index
    var rndNumber = getRndInteger(1, alphabet.length) - 1;
    var letter = alphabet[rndNumber]; // random letter

    return letter;
}

// PART 1
// array of bicycles --> bike (obj) with name + weight
const bicycles = [
    {
        name: "SERIUS VALPAROLA",
        weight: 9.56
    },
    {
        name: "EDDY MERCKX LAVAREDO",
        weight: 8.43
    },
    {
        name: "FOCUS IZALCO MAX",
        weight: 7.80
    },
    {
        name: "VOTEC VRC",
        weight: 8.90
    },
    {
        name: "CANNONDALE SUPERSIX EVO",
        weight: 8.54
    },
];

console.log(bicycles);

// PART 2
// clone the array
const copyBicycles = bicycles.map((bike) => {
    let cloneBike = {...bike, position: charGenerator()};
    return cloneBike;
});

console.log(
    `
    Copia dell'array con nuova proprietà:
    `
);
console.log(copyBicycles);
