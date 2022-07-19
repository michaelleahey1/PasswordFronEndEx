import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FormValidationExample';
  msg = "";

  loginForm = new FormGroup({
      uname : new FormControl('', [Validators.required,Validators.minLength(4)]),
      pword : new FormControl('', [Validators.pattern("[0-9@!%&]{6,20}"),Validators.minLength(6), Validators.maxLength(20)])
  })
  httpClient: any;
  onSubmit() {
      console.log(this.loginForm.value)
  }

  get uid() {
    return this.loginForm.get('uid');
  }
  get uname() {
    return this.loginForm.get('uname');
  }
  get pword() {
    return this.loginForm.get('pword');
  }
}
function baseURL(baseURL: any, data: any): Observable<any> {
  throw new Error('Function not implemented.');
}

