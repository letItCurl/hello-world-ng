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
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      UsernameValidators.cannotContainSpace]),
    password: new FormControl('', Validators.required),
  });

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
    return this.form.get('username')
  }
}
