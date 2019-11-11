//CONTAINS THE INTERFACE
namespace Validation {
    export interface StringValidator {
        isValid(s: string): boolean;
    }
}

//run as tsc namespace_split-1.ts namespace-split-2.ts 