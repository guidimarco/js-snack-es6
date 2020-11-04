// GLOBAL VAR
let name = "CANNONDALE SUPERSIX EVO";
let weight = 8.54;

const bike = { // bike-obj
    name,
    weight
};

const bicycles = [ // bike-obj-array
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
    }
];

bicycles.push(bike);

console.log(
    `
    *** bicycles-array:
    ${bicycles[0].name} di peso ${bicycles[0].weight}
    ${bicycles[1].name} di peso ${bicycles[1].weight}
    ${bicycles[2].name} di peso ${bicycles[2].weight}
    ${bicycles[3].name} di peso ${bicycles[3].weight}
    ${bicycles[4].name} di peso ${bicycles[4].weight}
    `
);

console.log(bicycles);

// ALGORITHM 1.0:
// const lighterBike = bicycles[searchLighterBike(bicycles)];

// console.log(`La bici che pesa meno è la ${lighterBike.name}, che pesa: ${lighterBike.weight}`);

// function searchLighterBike(bicycles) {
//     let lessWeight = bicycles[0].weight // first bike weight
//     let lighterBikeIndex = 0; // first bike index
//
//     for (let i = 0; i < bicycles.length; i++) {
//         // CYCLE VAR
//         let currentBike = bicycles[i]; // current bike obj
//
//         // console.log(currentBike.weight);
//
//         if (currentBike.weight < lessWeight) {
//             lighterBikeIndex = i;
//             lessWeight = currentBike.weight;
//             // console.log(lighterBikeIndex);
//             // console.log(lessWeight);
//         }
//     }
//
//     return lighterBikeIndex;
// }

// ALGORITHM 2.0: function --> lighter-bike
const searchLighterBike = (array) => { // find the lighter bike
    let lessWeight = array[0].weight // first bike weight
    let lighterBikeIndex = 0; // first bike index
    let lighterBike;

    for (let i = 0; i < array.length; i++) {
        // CYCLE VAR
        let currentBike = array[i]; // current bike obj

        // console.log(currentBike.weight);

        if (currentBike.weight < lessWeight) {
            lighterBikeIndex = i;
            lessWeight = currentBike.weight;
            // console.log(lighterBikeIndex);
            // console.log(lessWeight);
        }
    }

    lighterBike = array[lighterBikeIndex];

    return lighterBike;
};

const lighterBike = searchLighterBike(bicycles);
console.log(lighterBike);




// <1-fold SSSSS ALL FUNCTION SSSSS

// #2-fold SSSSS compare the weight of the bike SSSSS
function compareWeight(a, b) {
    if (a.weight > b.weight) {
        return +1;
    } if (a.weight < b.weight) {
        return -1;
    } else {
        return 0;
    }

}
// #/2-fold EEEEE compare the weight of the bike EEEEE

// </1-fold> EEEEE ALL FUNCTION EEEEE
