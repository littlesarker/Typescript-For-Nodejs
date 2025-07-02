//  value returned by the function can be explicitly defined.
function getTime() {
    return new Date().getTime();
}
console.log(getTime());
//void return type 
function printHello() {
    console.log("Hello");
}
console.log(printHello());
//Parameters
function multiply(a, b) {
    return a * b;
}
console.log(multiply(10, 10));
// if no parameter type is defineded typescript will default to using any
// the ? operator used for optional parameter
function add(a, b, c) {
    return a + b + (c || 0);
}
console.log(add(20, 10));
//default paramerters
function pow(v, exponet) {
    if (exponet === void 0) { exponet = 10; }
    return Math.pow(v, exponet);
}
console.log(pow(4, 6));
//named parameters
function divide(_a) {
    var dividend = _a.dividend, divisor = _a.divisor;
    return dividend / divisor;
}
console.log(divide({ dividend: 10, divisor: 2 }));
// Rest Parameters
function add2(a, b) {
    var rest = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        rest[_i - 2] = arguments[_i];
    }
    return a + b + rest.reduce(function (p, c) { return p + c; });
}
console.log(add2(10, 10, 10, 10, 10));
