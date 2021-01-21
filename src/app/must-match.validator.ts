import { FormGroup } from '@angular/forms';

export function MustMatch(controlName: string, matchingControlName: string) {
  return (FormGroup: FormGroup) => {
    const control = FormGroup.controls[controlName];
    const matchingControl = FormGroup.controls[matchingControlName];

    // return null if controls havent initialized yet

    if (!control || !matchingControl) {
      return null;
    }

    // return null if another validator has already found an error on the matcchingControl
    if (matchingControl.errors && !matchingControl.errors.MustMatch) {
      return null;
    }

    // set error on matchingControl if validation fails
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ mustMatch: true });
    } else {
      matchingControl.setErrors(null);
    }
  };
}
