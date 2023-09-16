import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  email = new FormControl('', [Validators.required, Validators.email]);
  passwordIsHide = true;

  getEmailErrorMessage() {
    if (this.email.hasError('required')) return 'Preencha este campo.';

    return this.email.hasError('email') ? 'Não é um e-mail válido.' : '';
  }
}
