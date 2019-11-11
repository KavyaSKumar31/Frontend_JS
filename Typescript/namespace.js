var Validation;
(function (Validation) {
    var PincodeValidator = /** @class */ (function () {
        function PincodeValidator() {
        }
        PincodeValidator.prototype.isValid = function (s) {
            return s.length === 6;
        };
        return PincodeValidator;
    }());
    Validation.PincodeValidator = PincodeValidator;
    var UsernameValidator = /** @class */ (function () {
        function UsernameValidator() {
        }
        UsernameValidator.prototype.isValid = function (s) {
            return s.indexOf(' ') < 0;
        };
        return UsernameValidator;
    }());
    Validation.UsernameValidator = UsernameValidator;
    var pv = new PincodeValidator();
    pv.isValid("560065");
})(Validation || (Validation = {}));
var pv1 = new Validation.UsernameValidator();
pv1.isValid("Kitty");
