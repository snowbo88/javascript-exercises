const removeFromArray = function (array, element) {
    for (i = 1; i < arguments.length; i++) {
        let position = array.indexOf(arguments[i]);
        if (position == -1) {
            continue;
        }
        array.splice(position, 1);
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
