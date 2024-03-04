let current_users: string[] = ['Shireen', 'Saman', 'Aneeqa', 'Rizwana', 'Maria'];

let new_users: string[] = ['Shireen', 'Anna', 'Araina', 'abigail', 'Maria']; 

for (let new_username of new_users) {
    if (current_users.indexOf(new_username)) {
        console.log(`The username '${new_username}' is not available. Please enter a new username.`);
    } else {
        console.log(`The username '${new_username}' is available.`);
    }
}
