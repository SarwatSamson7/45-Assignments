var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var fvtPlace = ["Kashmir", "switzerland", "Ukraine", "Sydney"];
// Print the array in its original order
console.log("Orignal Order", fvtPlace);
// Print the array in alphabetical order without modifying the actual list
var sortedArrayAlphabetical = __spreadArray([], fvtPlace, true).sort();
console.log("Alphabetical Order:", sortedArrayAlphabetical);
console.log("Original Order (still):", fvtPlace);
// Print the array in reverse alphabetical order without changing the order of the original list
var sortedArrayReverseAlphabetical = __spreadArray([], fvtPlace, true).sort().reverse();
console.log("Reverse Alphabetical Order:", sortedArrayReverseAlphabetical);
console.log("Original Order (still):", fvtPlace);
// Reverse the order of the original list
fvtPlace.reverse();
console.log("Reversed Order:", fvtPlace);
// Reverse the order of the list again
fvtPlace.reverse();
console.log("Back to Original Order:", fvtPlace);
// Sort the array in alphabetical order
fvtPlace.sort();
console.log("Sorted in Alphabetical Order:", fvtPlace);
