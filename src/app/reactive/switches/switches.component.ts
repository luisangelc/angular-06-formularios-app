import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, Validator } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    genero: ['M', Validators.required],
    notificaciones: [true, Validators.required],
    condiciones: [false, Validators.requiredTrue]
  });

  persona = {
    genero: 'F',
    notificaciones: true,
  };

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.miFormulario.reset({
      ...this.persona,
      condiciones: false,
    });

    //RXJS
    // this.miFormulario.get('condiciones')?.valueChanges.subscribe(newValue => {
    //   console.log('new value: ', newValue);
    // });

    this.miFormulario.valueChanges.subscribe(({ condiciones, ...rest }) => {
      //delete form.condiciones;
      this.persona = rest;
      console.log('form: ', rest);
    });
  }

  guardar() {
    const formValue = { ...this.miFormulario.value };
    delete formValue.condiciones;
    this.persona = formValue;
  }
}
