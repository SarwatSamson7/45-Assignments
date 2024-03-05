let car: string = 'subaru';

// Test 1
console.log("Test 1: Is car equal to 'subaru'? I predict True.");
console.log(car === 'subaru');

// Test 2
console.log("\nTest 2: Is car not equal to 'honda'? I predict True.");
console.log(car !== 'honda');

// Test 3
console.log("\nTest 3: Does car have a length greater than 4? I predict True.");
console.log(car.length > 4);

// Test 4
console.log("\nTest 4: Is car equal to 'Subaru' (case-sensitive comparison)? I predict False.");
console.log(car === 'Subaru');

// Test 5
console.log("\nTest 5: Is car equal to 'subaru' or 'honda'? I predict True.");
console.log(car === 'subaru' || car === 'honda');

// Test 6
console.log("Test 6: Is car not equal to 'subaru'? I predict false.");
console.log(car !== 'subaru');