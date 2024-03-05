var make_album = function (artistName, albumTile, track) {
    if (track === void 0) { track = 0; }
    var album = {
        artist: artistName,
        title: albumTile,
        trackNumber: track,
    };
    return album;
};
var album1 = make_album("Roopa Panesar", "Stornoway", 4);
console.log(album1);
var album2 = make_album("Ravi Shankar", "Ragas");
console.log(album2);
var album3 = make_album("Anushka Shankar", "Forever", 9);
console.log(album3);
