function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I realy love typescript"; }
    console.log("This is " + size + " shirt");
    console.log(message);
}
make_shirt();
make_shirt("medium");
