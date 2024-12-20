
import { AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';
import {PraticienStatut } from  '../models/praticien-statut.type';

export function validStatutValidator(statutsValides: PraticienStatut[]): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    return statutsValides.includes(control.value) ? null : { invalidStatut: {value: control.value} };
  };
}
