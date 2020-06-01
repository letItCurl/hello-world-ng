import { PasswordValidators } from './password.validators';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-change-password-form',
  templateUrl: './change-password-form.component.html',
  styleUrls: ['./change-password-form.component.css']
})
export class ChangePasswordFormComponent implements OnInit {

  form: FormGroup

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      password: ['', Validators.required, PasswordValidators.isInValid],
      confirmation: fb.group({
        newPassword: ['', [Validators.required, Validators.minLength(6)]],
        passwordConfirmation: ['', Validators.required] 
      })
    }) 
   }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log("DONE !")
  }

  showErrors(field: AbstractControl){
    return (field.invalid && field.touched);
  }

  check(passwordConfirmation: FormControl){
    if(passwordConfirmation.value != this.newPassword.value){
      this.passwordConfirmation.setErrors({
        notMatch: true
      })
    }
  }

  get password() {
    return this.form.get('password')
  }
  get newPassword() {
    return this.form.get('confirmation')['controls'].newPassword
  }
  get passwordConfirmation() {
    return this.form.get('confirmation')['controls'].passwordConfirmation
  }

}
