var guest_list = ["Shireen", "Rizwana", "Aneeqa"];
// for(let i=0; i<guest_list.length; i++) {
//     console.log(`Dear ${guest_list},\n\nlet's celebrate the joy of togetherness with good food and great friends. Join us for a dinner party at our home.\n\nThank you`);
// }
var absent_guest = "Rizwana";
var new_guest = "Maria";
guest_list[1] = new_guest;
// for(let i=0; i<guest_list.length; i++) {
//     console.log(`Dear ${guest_list},\n\nlet's celebrate the joy of togetherness with good food and great friends. Join us for a dinner party at our home.\n\nThank you`);
// }
// console.log(`Mrs. ${absent_guest} is not coming.`);
// console.log(`Good News! We find a big dinner table so, we are inviting 3 more guests.`)
// Here we have added 3 guest.
guest_list.unshift('Anna');
guest_list.splice(2, 0, 'Abigail');
guest_list.push('Araina');
for (var i = 0; i < guest_list.length; i++) {
    console.log("Dear ".concat(guest_list, ",\n\nlet's celebrate the joy of togetherness with good food and great friends. Join us for a dinner party at our home.\n\nThank you"));
}
console.log("\nSorry we can not arrange big table, only two people will be invited.");
while (guest_list.length > 2) {
    var remove_guest = guest_list.pop();
    console.log("Sorry Ms. ".concat(remove_guest, ", you are not invited for Dinner."));
}
// Our remaining 2 invited guests.
// for(let i=0; i<guest_list.length; i++) {
//     console.log(`Dear ${guest_list},\n\nlet's celebrate the joy of togetherness with good food and great friends. Join us for a dinner party at our home.\n\nThank you`);
// }
guest_list.splice(0, 2);
console.log(guest_list);
// Exercise 19
// print a message indicating the number of people you are inviting to dinner.
console.log("Total number of guest are: ".concat(guest_list.length));
