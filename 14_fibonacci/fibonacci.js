const fibonacci = function(n) {
    let count = parseInt(n);

    let first = 1;
    let second = 0;

    for (let i = 2; i <= count; i++) {
        let current = first + second;
        second = first;
        first = current;
    }

    return first;
}

// Do not edit below this line
module.exports = fibonacci;
