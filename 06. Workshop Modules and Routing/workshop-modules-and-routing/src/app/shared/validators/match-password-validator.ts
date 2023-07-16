import { FormGroup, ValidatorFn } from "@angular/forms";

export function matchPassValidator(
    passValue: string,
    rePassValue: string
): ValidatorFn {
    return (control) => {
        const group = control as FormGroup;
        const pass = group.get(passValue);
        const rePass = group.get(rePassValue);

        return pass?.value === rePass?.value ?
         null : 
         { matchPassValidator: true }
    }
}