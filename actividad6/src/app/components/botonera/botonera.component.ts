import { Component, Input, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
import { IUsuario } from '../../interfaces/iusuario.interface';
import { UsuariosService } from '../../services/usuarios.service';
@Component({
  selector: 'app-botonera',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './botonera.component.html',
  styleUrl: './botonera.component.css',
})
export class BotoneraComponent {
  @Input() estoyEn: string = '';
  @Input() idUsuario: string = '';
  unUsuario!: IUsuario;
  usuarioService = inject(UsuariosService);
  rutaActiva = inject(Router);

  async eliminarUsuario(id: string) {
    let response = await this.usuarioService.getById(id);
    this.unUsuario = response;
    Swal.fire({
      title:
        'Estas seguro de eliminar a ' +
        this.unUsuario.first_name +
        ' ' +
        this.unUsuario.last_name,
      text: '',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, deseo borrarlo',
    }).then(async (result) => {
      if (result.isConfirmed) {
        let response = await this.usuarioService.deleteUsuario(id);
        this.unUsuario = response;
        Swal.fire({
          title: response.first_name + ' ha sido eliminado',
          text: 'Ha abandonado UNIR',
          icon: 'success',
        });
      }
      this.rutaActiva.navigate(['/principal']);
    });
  }
}
