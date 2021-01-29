"use strict";


// 1. isHometown

function isHometown(town) {
    return (town === 'San Francisco');
}

isHometown('San Francisco')

// 2. getFullName

function getFullName(firstName, lastName) {
    
    return (firstName + " " + lastName);
}

getFullName("John", "Doe")

// 3. calculateTotal

function calculateTotal(basePrice, state, tax) {
    const subtotal = basePrice * (1 + tax);
    const fee = 0;
    
    

    if (state === "CA") {
        fee = 0.03 * subtotal;

    }

    else if (state === "PA") {
        fee = 2;
    }

    else if (state === "MA") {
    
        if (basePrice <= 100) {
            fee = 1;
        }
        else { 
            fee = 3;
        }
    }
    const total = subtotal + fee;
    console.log(total);
    return (subtotal + fee);
}

calculateTotal(500, "CA", 0.05);