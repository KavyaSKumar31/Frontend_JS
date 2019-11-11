"use strict";
exports.__esModule = true;
//pincode-validator.ts
exports.numberRegexp = /^[0-9]+$/;
var Pincode_validator = /** @class */ (function () {
    function Pincode_validator() {
    }
    Pincode_validator.prototype.isValid = function (s) {
        return s.length === 6 && exports.numberRegexp.test(s);
    };
    return Pincode_validator;
}());
exports.Pincode_validator = Pincode_validator;
