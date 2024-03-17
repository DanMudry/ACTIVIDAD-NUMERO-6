import { Component, Inject, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { UsuariosService } from '../../services/usuarios.service';
import { IUsuario } from '../../interfaces/iusuario.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nuevousuario',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './nuevousuario.component.html',
  styleUrl: './nuevousuario.component.css',
})
export class NuevousuarioComponent {
  formAltaUsuario: FormGroup;
  usuarioService = inject(UsuariosService);
  ruta = inject(Router);
  rutaActiva = inject(ActivatedRoute);

  constructor() {
    this.formAltaUsuario = new FormGroup(
      {
        _id: new FormControl(null, []),
        id: new FormControl(null, []),
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
  ngOnInit() {
    this.rutaActiva.params.subscribe(async (params: any) => {
      console.log(params.idM);
      if (params.idM) {
        const response = await this.usuarioService.getById(params.idM);
        console.log(response);
        this.formAltaUsuario = new FormGroup(
          {
            _id: new FormControl(response._id, []),
            nombre: new FormControl(response.first_name, [
              Validators.required,
              Validators.minLength(3),
            ]),
            apellido: new FormControl(response.last_name, [
              Validators.required,
            ]),
            email: new FormControl(response.email, [
              Validators.required,
              Validators.pattern(
                /^((([!#$%&'*+\-/=?^_`{|}~\w])|([!#$%&'*+\-/=?^_`{|}~\w][!#$%&'*+\-/=?^_`{|}~\.\w]{0,}[!#$%&'*+\-/=?^_`{|}~\w]))[@]\w+([-.]\w+)*\.\w+([-.]\w+)*)$/
              ),
            ]),
            imagen: new FormControl(response.image, [Validators.required]),
          },
          []
        );
      }
    });
  }

  async guardarDatosForm(): Promise<void> {
    let response: any;

    try {
      const response = await this.usuarioService.postNuevoUsuario(
        this.formAltaUsuario.value
      );
      console.log(response);
      Swal.fire({
        title: 'Bienvenido ' + this.formAltaUsuario.value.nombre,
        text: 'Estas en UNIR',
        icon: 'success',
      });
      this.ruta.navigate(['/principal']);
      this.formAltaUsuario.reset();
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
