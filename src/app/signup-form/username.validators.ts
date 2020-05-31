import { AbstractControl, ValidationErrors } from '@angular/forms';

export class UsernameValidators {
    
    static cannotContainSpace(control: AbstractControl): ValidationErrors | null{
        if ((control.value as String).indexOf(' ') >= 0){
            return { cannotContainSpace: true }
        }
        return null
    }
}