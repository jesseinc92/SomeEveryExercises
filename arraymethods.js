// some/every functions
// has odd number
function hasOddNumber(array) {
    return array.some((el) => {
        if (el % 2 == 1) {
            return true;
        }
        return false;
    });
}

// has a zero
function hasAZero(number) {
    const newArray = Array.from(String(number));
    return newArray.some((el) => {
        if (el == '0') {
            return true;
        }
        return false;
    });
}

// has only odd numbers
function hasOnlyOddNumbers(array) {
    return array.every((el) => {
        if (el % 2 == 0) {
            return false;
        }
        return true;
    });
}

// has no duplicates
function hasNoDuplicates(array) {
    return array.every((el) => {
        if (array.indexOf(el) == array.lastIndexOf(el)) {
            return true;
        }
        return false;
    })
}

// has certain key
function hasCertainKey(array, key) {
    return array.every((el) => {
        if (!el[key]) {
            return false;
        }
        return true;
    });
}

// has certain value
function hasCertainValue(array, key, value) {
    return array.every((el) => {
        if (el[key] !== value) {
            return false;
        }
        return true;
    });
}