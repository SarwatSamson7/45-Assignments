function sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("sandwich order:");
    for (var i = 0; i < items.length; i++) {
        console.log("- ".concat(items[i]));
    }
}
console.log("Enjoy your sandwich Sarwat Samson");
sandwich('chicken', 'tomato', 'capsicum');
sandwich('beef', 'mushroom', 'cheese');
sandwich('garlic chicken', 'mayo sauce');
