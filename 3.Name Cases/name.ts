//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let personName:string = "Sarwat Samson";
//Inlowercase
console.log("lowercase:", personName.toLowerCase())

//InUppercase
console.log("uppercase:", personName.toUpperCase())

//In titlecase
console.log("titlecase:", personName.replace(/\b\w/g,c => c.toUpperCase()))
