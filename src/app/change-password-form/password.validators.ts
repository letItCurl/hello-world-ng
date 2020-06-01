import { AbstractControl, ValidationErrors } from '@angular/forms';

export class PasswordValidators {
    static isInValid(control: AbstractControl): Promise<ValidationErrors | null>{
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                if((control.value as String) != 'Marie')
                    resolve({isInValid: true})
                else resolve(null)
            }, 900)
        })
    }
}