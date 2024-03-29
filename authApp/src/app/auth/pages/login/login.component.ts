import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    email: ['andijaimo@gmail.com', [ Validators.required, Validators.email ]],
    password: ['123456', [ Validators.required, Validators.minLength(6) ]]
});

  constructor( private fb: FormBuilder,
               private router: Router,
               private authService: AuthService ) { }

  ngOnInit(): void {
  }

  login() {
    console.log(this.miFormulario.value);
    const { email, password } = this.miFormulario.value;

    this.authService.login( email, password )
      .subscribe(
        ok => {
          if ( ok === true ) {
            this.router.navigateByUrl('/dashboard');
          } else {
            alert(ok)
          }
        }
      )
  }

}
