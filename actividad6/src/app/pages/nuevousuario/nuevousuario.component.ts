import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-nuevousuario',
  standalone: true,
  imports: [ReactiveFormsModule, RouterOutlet],
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
        email: new FormControl(null, [
          Validators.required,
          Validators.pattern(
            /^((([!#$%&'*+\-/=?^_`{|}~\w])|([!#$%&'*+\-/=?^_`{|}~\w][!#$%&'*+\-/=?^_`{|}~\.\w]{0,}[!#$%&'*+\-/=?^_`{|}~\w]))[@]\w+([-.]\w+)*\.\w+([-.]\w+)*)$/
          ),
        ]),
        imagen: new FormControl(null, [Validators.required]),
      },
      []
    );
  }

  guardarDatosForm(): void {
    console.log(this.formAltaUsuario.value);
  }

  controlarCampo(
    campoValidado: string,
    validador: string
  ): boolean | undefined {
    return (
      this.formAltaUsuario.get(campoValidado)?.hasError(validador) &&
      this.formAltaUsuario.get(campoValidado)?.touched
    );
  }
}
