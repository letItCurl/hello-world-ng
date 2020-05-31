import { AbstractControl, ValidationErrors } from '@angular/forms';

export class UsernameValidators {
    
    static cannotContainSpace(control: AbstractControl): ValidationErrors | null{
        if ((control.value as String).indexOf(' ') >= 0){
            return { cannotContainSpace: true }
        }
        return null
    }

    // async validator
    static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null>{
        //  check interfaces....
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                console.log('ok')
                if((control.value as string) == 'roro')
                    // resole is like return
                    resolve({ shouldBeUnique: true })
                else resolve(null)
            },900)
        })

    }
}