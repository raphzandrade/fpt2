import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function validateNumber(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {

        const controlValue = control.value

        const isNumberOnly = /^[0-9]\d*$/.test(controlValue);

        return isNumberOnly ? null : { "isNotNumber": true }
    }
}