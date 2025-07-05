// Members Type
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Rahim = /** @class */ (function () {
    function Rahim() {
    }
    return Rahim;
}());
var rahim = new Rahim();
rahim.name = 'Sarker';
console.log(rahim);
/*

Member visibility



There are three main visibility modifiers in TypeScript.

    public - (default) allows access to the class member from anywhere
    private - only allows access to the class member from within the class
    protected - allows access to the class member from itself and any classes that inherit it, which is covered in the inheritance section below

*/
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    return Person;
}());
var p = new Person('My name is Rahim Sarker');
console.log(p.getName());
/*
the readonly keyword can prevent class members from being changed.
*/
var Perosn1 = /** @class */ (function () {
    function Perosn1(name) {
        this.name = name;
    }
    Perosn1.prototype.getName = function () {
        return this.name;
    };
    return Perosn1;
}());
var p1 = new Perosn1('MD sarker');
console.log(p1.getName());
var Rect = /** @class */ (function () {
    function Rect(width, height) {
        this.width = width;
        this.height = height;
    }
    Rect.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Rect;
}());
var rect = new Rect(10, 20);
console.log(rect.getArea());
var Rect1 = /** @class */ (function () {
    function Rect1(w, h) {
        this.w = w;
        this.h = h;
        this.w * this.h;
    }
    Rect1.prototype.getArea = function () {
        return this.w * this.h;
    };
    return Rect1;
}());
var Sq = /** @class */ (function (_super) {
    __extends(Sq, _super);
    function Sq(w) {
        return _super.call(this, w, w) || this;
    }
    return Sq;
}(Rect1));
var sq = new Sq(100);
console.log(sq.getArea());
var Rect3 = /** @class */ (function () {
    function Rect3(w, h) {
        this.w = w;
        this.h = h;
    }
    Rect3.prototype.getArea = function () {
        return this.w * this.h;
    };
    Rect3.prototype.toString = function () {
        return "Rectangle[width=".concat(this.w, ", height=").concat(this.h, "]");
    };
    return Rect3;
}());
var Sq3 = /** @class */ (function (_super) {
    __extends(Sq3, _super);
    function Sq3(w) {
        return _super.call(this, w, w) || this;
    }
    Sq3.prototype.toString = function () {
        return "Square[width=".concat(this.w, "]");
    };
    return Sq3;
}(Rect3));
var sq3 = new Sq3(50);
console.log(sq3.toString());
/// Abstract class
var Ploy = /** @class */ (function () {
    function Ploy() {
    }
    Ploy.prototype.toString = function () {
        return 'Poly [${this.getArea()}]';
    };
    return Ploy;
}());
var Rect4 = /** @class */ (function (_super) {
    __extends(Rect4, _super);
    function Rect4(w, h) {
        var _this = _super.call(this) || this;
        _this.w = w;
        _this.h = h;
        return _this;
    }
    Rect4.prototype.getArea = function () {
        return this.w * this.h;
    };
    return Rect4;
}(Ploy));
var rect4 = new Rect4(10, 20);
console.log(rect4.getArea());
