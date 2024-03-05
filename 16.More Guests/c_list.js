var guest_list = ["Shireen", "Rizwana", "Aneeqa"];
// for(let i=0; i<guest_list.length; i++) {
//     console.log(`Dear ${guest_list},\n\nlet's celebrate the joy of togetherness with good food and great friends. Join us for a dinner party at our home.\n\nThank you`);
// }
var absent_guest = "Rizwana";
var new_guest = "Maria";
guest_list[1] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log("Dear ".concat(guest_list, ",\n\nlet's celebrate the joy of togetherness with good food and great friends. Join us for a dinner party at our home.\n\nThank you"));
}
console.log("Mrs. ".concat(absent_guest, " is not coming."));
console.log("Good News! We find a big dinner table so, we are inviting 3 more guests.");
guest_list.unshift('Anna');
guest_list.splice(2, 0, 'Abigail');
guest_list.push('Araina');
for (var i = 0; i < guest_list.length; i++) {
    console.log("Dear ".concat(guest_list, ",\n\nlet's celebrate the joy of togetherness with good food and great friends. Join us for a dinner party at our home.\n\nThank you"));
}
