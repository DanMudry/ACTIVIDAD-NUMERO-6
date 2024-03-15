import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-nuevousuario',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './nuevousuario.component.html',
  styleUrl: './nuevousuario.component.css',
})
export class NuevousuarioComponent {
  formAltaUsuario: FormGroup;
  constructor() {
    this.formAltaUsuario = new FormGroup(
      {
        nombre: new FormControl(null, [
          Validators.required,
          Validators.minLength(3),
        ]),
        apellido: new FormControl(null, [Validators.required]),
        email: new FormControl(null, []),
        imagen: new FormControl(null, [Validators.required]),
      },
      []
    );
  }

  guardarDatosForm(): void {
    console.log(this.formAltaUsuario.value);
  }
}
