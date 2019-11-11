var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var c5 = /** @class */ (function () {
    function c5() {
    }
    return c5;
}());
var c3 = /** @class */ (function (_super) {
    __extends(c3, _super);
    function c3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    c3.prototype.fun1 = function () {
        console.log(this.id1);
    };
    c3.prototype.fun2 = function () {
        console.log(this.id2);
    };
    c3.prototype.fun3 = function () {
        console.log(this.id3);
    };
    return c3;
}(c5));
