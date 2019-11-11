namespace Validation {
    export interface StringValidator {
        isValid(s: string): boolean;
    }
    export class PincodeValidator implements StringValidator{
        isValid(s: string): boolean {
            return s.length === 6;
        }
    }
    export class UsernameValidator implements StringValidator{
        isValid(s: string): boolean {
            return s.indexOf(' ') < 0;
        }
    }
    var pv =  new PincodeValidator();
    pv.isValid("560065");
}
var pv1 = new Validation.UsernameValidator();
pv1.isValid("Kitty");

namespace ns {
    var pv2 = new Validation.UsernameValidator();
    console.log(pv2.isValid("Kavya"));
}
