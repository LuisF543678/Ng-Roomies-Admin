import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

// Regular expression for passwords.
export const PASSWORD_REGEXP: RegExp = new RegExp(/^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/);

/**
 * Validates that the password contains at least a digit, a lower case letter, an upper case letter, and a symbol.
 * @param regExp regular expression to set the password pattern.
 * @returns 
 * - If the password matches with the pattern returns null.
 * - Otherwise returns ValidationErrors.
 * 
 */
export function passwordFormat(regExp: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const result = regExp.test(control.value);
    return result ? null : { passwordFormat: { value: control.value } };
  } 
}

/**
 * Compares the value between two controls,
 * @param inputControl the control compared.
 * @returns 
 * - If the values are same returns null.
 * - Otherwise returns ValidationErrors.
 */
export function sameValue(inputControl: AbstractControl): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const result = inputControl.value == control.value;
    return result ? { sameValue: { value: control.value } } : null;
  };
}