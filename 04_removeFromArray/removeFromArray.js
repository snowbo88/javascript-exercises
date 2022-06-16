const removeFromArray = function (array, element) {
    let position = array.indexOf(element);
    array.splice(position, 1);
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
