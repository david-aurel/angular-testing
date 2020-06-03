import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { PasswordValidators } from './password.validators';

@Component({
  selector: 'reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css'],
})
export class ResetPasswordComponent {
  form: FormGroup;

  // form = new FormGroup({
  //   oldPassword: new FormControl('', [
  //     Validators.required,
  //     PasswordValidators.oldMatch,
  //   ]),
  //   newPassword: new FormControl('', Validators.required),
  //   confirmPassword: new FormControl('', Validators.required),
  // });

  constructor(fb: FormBuilder) {
    this.form = fb.group(
      {
        oldPassword: [
          '',
          Validators.required,
          PasswordValidators.validOldPassword,
        ],
        newPassword: ['', Validators.required],
        confirmPassword: ['', Validators.required],
      },
      {
        validator: PasswordValidators.passwordShouldMatch,
      }
    );
  }

  resetPassword() {
    if (this.newPassword.value !== this.confirmPassword.value) {
      this.form.setErrors({ newPasswordDontMatch: true });
    }
  }
  get oldPassword() {
    return this.form.get('oldPassword');
  }
  get newPassword() {
    return this.form.get('newPassword');
  }
  get confirmPassword() {
    return this.form.get('confirmPassword');
  }
}
