import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PasswordEx';
  loginForm = new FormGroup({
    uname : new FormControl('', [Validators.required,Validators.minLength(12)]),
    pword : new FormControl('', [Validators.pattern("[0-9{3}]"),Validators.minLength(4), Validators.maxLength(10)])
})
onSubmit() {
  console.log(this.loginForm.value)
}
get uname() {
return this.loginForm.get('uname');
}
get pword() {
return this.loginForm.get('pword');
}
}
