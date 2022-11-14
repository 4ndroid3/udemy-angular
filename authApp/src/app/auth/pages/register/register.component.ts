import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    name: ['', [ Validators.required, Validators.minLength(3) ]],
    email: ['', [ Validators.required, Validators.email ]],
    password: ['', [ Validators.required, Validators.minLength(6) ]]
});

  constructor( private fb: FormBuilder,
               private router: Router ) { }

  ngOnInit(): void {
  }


  registro() {
    console.log(this.miFormulario.value);
    this.router.navigateByUrl('/dashboard');
  }
}
