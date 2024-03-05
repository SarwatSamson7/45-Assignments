var current_users = ['Shireen', 'Saman', 'Aneeqa', 'Rizwana', 'Maria'];
var new_users = ['Shireen', 'Anna', 'Araina', 'abigail', 'Maria'];
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_username = new_users_1[_i];
    if (current_users.indexOf(new_username)) {
        console.log("The username '".concat(new_username, "' is not available. Please enter a new username."));
    }
    else {
        console.log("The username '".concat(new_username, "' is available."));
    }
}
