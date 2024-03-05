function show_magician(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
function make_great(magicians) {
    var greatMagicians = [];
    for (var i = 0; i < magicians.length; i++) {
        greatMagicians.push(magicians[i] + ' The Great');
    }
    return greatMagicians;
}
var magicians = ["Ricky", "Derren", "Teller", "Herry"];
var greatMagicians = make_great(magicians);
show_magician(magicians);
show_magician(greatMagicians);
