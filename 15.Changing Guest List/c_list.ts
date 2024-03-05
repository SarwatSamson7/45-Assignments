let guest_list:string[] = ["Shireen", "Rizwana", "Aneeqa"];

for(let i=0; i<guest_list.length; i++) {
    console.log(`Dear ${guest_list},\n\nlet's celebrate the joy of togetherness with good food and great friends. Join us for a dinner party at our home.\n\nThank you`);
}

let absent_guest: string = "Rizwana";

let new_guest: string = "Maria";

guest_list[1] = new_guest ;
 
for(let i=0; i<guest_list.length; i++) {
    console.log(`Dear ${guest_list},\n\nlet's celebrate the joy of togetherness with good food and great friends. Join us for a dinner party at our home.\n\nThank you`);
}

console.log(`Mrs. ${absent_guest} is not coming.`)
