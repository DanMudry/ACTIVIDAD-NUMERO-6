import { Component, Inject, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { UsuariosService } from '../../services/usuarios.service';
import { IUsuario } from '../../interfaces/iusuario.interface';

@Component({
  selector: 'app-nuevousuario',
  standalone: true,
  imports: [ReactiveFormsModule, RouterOutlet],
  templateUrl: './nuevousuario.component.html',
  styleUrl: './nuevousuario.component.css',
})
export class NuevousuarioComponent {
  formAltaUsuario: FormGroup;
  usuarioService = inject(UsuariosService);
  insertarUsuario!: IUsuario;
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
        alias: new FormControl(null, [
          Validators.required,
          Validators.minLength(5),
        ]),
        clave: new FormControl(null, [
          Validators.required,
          Validators.minLength(5),
        ]),

        imagen: new FormControl(null, [Validators.required]),
      },
      []
    );
  }

  async guardarDatosForm(): Promise<void> {
    let response: any;
    console.log(this.formAltaUsuario.value);
    try {
      let response: any;
      response = await this.usuarioService.postNuevoUsuario(
        this.formAltaUsuario.value
      );
      console.log(response);
    } catch (err) {
      alert('error');
    }
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
