// FUNCTION
const stamp = (obj) => {
    // destructuring obj
    let {name, weight} = obj;
    console.log(`Bici: ${name}, peso: ${weight}`);
};

// GLOBAL VAR
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
    },
    {
        name: "CANNONDALE SUPERSIX EVO",
        weight: 8.54
    }
];
var lighterBike; // lighter-bike-obj

console.log(bicycles);
console.log(
    `
    *** bicycles-array ***
    ${bicycles[0].name} di peso ${bicycles[0].weight}
    ${bicycles[1].name} di peso ${bicycles[1].weight}
    ${bicycles[2].name} di peso ${bicycles[2].weight}
    ${bicycles[3].name} di peso ${bicycles[3].weight}
    ${bicycles[4].name} di peso ${bicycles[4].weight}
    *** fine ***
    `
);


// ******

// ALGORITHM 1.0: for-cycle (ES5-style)
// define function
const getLighterBike = (productArray) => {
    let lessWeight = productArray[0].weight; // first-product-weight
    let lighterProIndex = 0; // first-product-index

    for (let i = 0; i < productArray.length; i++) {
        // CYCLE VAR
        let currentProduct = bicycles[i]; // current bike obj

        if (currentProduct.weight < lessWeight) {
            lighterProIndex = i;
            lessWeight = currentProduct.weight;
        }
    }

    return lighterProIndex;
}

lighterBike = bicycles[getLighterBike(bicycles)];

console.log(`
    *** ALGORITHM 1.0 (with for-cycle) ***

    Bici: ${lighterBike.name}, peso: ${lighterBike.weight}

`);

// ALGORITHM 2.0: for-each instead of for-cycle
const getLighterBike1 = (productArray) => {
    let lighterProIndex = 0; // first-product-index

    // cycle for-each obj in the array
    productArray.forEach((bike, i, bikes) => {
        if (bike.weight < this) {
            // the product is lighter than the other checked before
            // redefine the parameters
            lighterProIndex = i;
            lessWeight = bike.weight;
        }
    }, productArray[0].weight);

    return lighterProIndex;
};

lighterBike = {}; // empty the var

lighterBike = bicycles[getLighterBike(bicycles)]; // redefine with new function

console.log("*** ALGORITHM 2.0 ***");
stamp(lighterBike); // print-out the lighter bike

// ALGORITHM 3.0: sort
// create a copy of bicycles
const copyBicycles = bicycles.map( (bike) => {
    cloneBike = {...bike}; // clone the bike
    return cloneBike; // and return-it in the new-array
});

console.log("Array ordinato in base al peso");
console.log(copyBicycles);

copyBicycles.sort((a, b) => {
    if (a.weight > b.weight) {
        return +1;
    } if (a.weight < b.weight) {
        return -1;
    } else {
        return 0;
    }
})

lighterBike = {}; // empty the var

lighterBike = copyBicycles[0];

console.log("*** ALGORITHM 3.0 ***");
stamp(lighterBike); // print-out the lighter bike

// ******
