//run as tsc namespace_split-1.ts namespace-split-2.ts; WORKS
//CONTAINS A METHOD PINCODE_VALIDATOR
namespace Validation {

    ///<reference path="namespace_split-1.ts"/>                                      
    export class Pincode_Validator implements StringValidator {
        isValid(s: string): boolean {
            return s.length === 6;
        }
    }
    var pv1 = new Validation.Pincode_Validator();
    pv1.isValid("560001"); 
}