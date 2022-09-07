import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailValidatorService } from 'src/app/shared/validator/email-validator.service';
import { ValidatorService } from 'src/app/shared/validator/validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.pattern( this.vs.nombreApellidoPattern ) ] ],
    email: ['', [Validators.required, Validators.pattern( this.vs.emailPattern )], [ this.eValidator ] ],
    username: ['', [Validators.required, this.vs.noPuedeSerStrider] ],
    password: ['', [Validators.required, Validators.minLength(6)] ],
    password2: ['', [Validators.required], ],
  }, {
    validators: [ this.vs.camposIguales('password', 'password2') ]
  });   

  constructor(
    private fb: FormBuilder,
    private vs: ValidatorService,
    private eValidator: EmailValidatorService,
  ) { }

  get emailErrorMsg() {

    const errors = this.miFormulario.get('email')?.errors;
    if (errors?.required) {
      return 'Email es obligatorio';
    }
    else if (errors?.pattern) {
      return 'El valor ingresado no tiene formato de email';
    }
    else if (errors?.emailTomado) {
      return 'Email ya tomado';
    }
    return '';
    
  }

  ngOnInit(): void {
  }

  campoNoValido(campo: string) {
    return this.miFormulario.get(campo)?.invalid 
           && this.miFormulario.get(campo)?.touched;
  }

  submitFormulario() {
    console.log(this.miFormulario.value);
    this.miFormulario.markAllAsTouched();
  }

}
