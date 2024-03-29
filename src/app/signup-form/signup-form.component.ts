import { UsernameValidators } from './username.validators';
import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {

  form = new FormGroup({
    account: new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        UsernameValidators.cannotContainSpace], 
        UsernameValidators.shouldBeUnique),
      password: new FormControl('', Validators.required),
    }),
    
  });

  login(){
    this.form.setErrors({
      invalidLogin: true
    })
  }

  validate(field){
    switch(field){

      case this.username:
        return this.username.touched && this.username.invalid
        break;

      default:
        return false
    }
  }

  get username() {
    // return this.form.get('username')
    return this.form.get('account.username') // this is SOLID
    // no changes reflected above
  }
}
