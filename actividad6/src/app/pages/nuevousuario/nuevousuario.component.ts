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
  insertarUsuario: IUsuario = {
    _id: '',
    id: 0,
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    image: '',
    password: '',
  };

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

  async guardarDatosForm(): Promise<void> {
    let response: any;
    this.insertarUsuario.first_name = this.formAltaUsuario.value.nombre;
    this.insertarUsuario.last_name = this.formAltaUsuario.value.apellido;
    this.insertarUsuario.email = this.formAltaUsuario.value.email;
    this.insertarUsuario.image = this.formAltaUsuario.value.imagen;

    console.log(this.formAltaUsuario.value);
    try {
      let response: any;
      response = await this.usuarioService.postNuevoUsuario(
        this.insertarUsuario
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
