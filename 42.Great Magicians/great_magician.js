function show_magician(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + ' The Great';
    }
}
var magicians2 = ["Ricky", "Derren", "Teller", "Herry"];
make_great(magicians2);
show_magician(magicians2);
