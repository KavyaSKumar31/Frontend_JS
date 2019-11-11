import { StringValidator } from "./module-split-1";

//pincode-validator.ts
export const numberRegexp = /^[0-9]+$/;
export class Pincode_validator implements StringValidator {
    isValid(s: string): boolean {
        return s.length === 6 && numberRegexp.test(s);
    }
}