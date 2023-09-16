import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  email = new FormControl('', [Validators.required, Validators.email]);
  passwordIsHide = true;

  datemask = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];

  getEmailErrorMessage() {
    if (this.email.hasError('required')) return 'Preencha este campo.';

    return this.email.hasError('email') ? 'Não é um e-mail válido.' : '';
  }
}