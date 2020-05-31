import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-change-password-form',
  templateUrl: './change-password-form.component.html',
  styleUrls: ['./change-password-form.component.css']
})
export class ChangePasswordFormComponent implements OnInit {

  // TODO => finish exerscice / validartors....

  form: FormGroup

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      password: ['', Validators.required],
      confirmation: fb.group({
        newPassword: ['', [Validators.required, Validators.minLength(6)]],
        passwordConfirmation: ['', Validators.required] 
      })
    }) 
   }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log("ok?")
  }

  showErrors(field: AbstractControl){
    return (field.invalid && field.touched);
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
