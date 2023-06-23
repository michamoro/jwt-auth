import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'
import { ApiService } from '../api.service';
import { Credentials } from '../model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  creds: Credentials = {
    email: '',
    password: ''
  };

  constructor(
    private apiService: ApiService,
    private router: Router
  ) { }

  login(form: NgForm) {
    console.log('form value', form.value);
    
    this.apiService.login(this.creds)
    .subscribe(response => {
      this.router.navigate(['/'])
    })
  }

}
