import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { UsuariosService } from '../../services/usuarios.service';
import { IUsuario } from '../../interfaces/iusuario.interface';
import { BotoneraComponent } from '../botonera/botonera.component';

@Component({
  selector: 'app-usuariocard',
  standalone: true,
  imports: [RouterLink, BotoneraComponent],
  templateUrl: './usuariocard.component.html',
  styleUrl: './usuariocard.component.css',
})
export class UsuariocardComponent {
  rutaActiva = inject(ActivatedRoute);
  usuarioService = inject(UsuariosService);
  unUsuario!: IUsuario;
  ngOnInit(): void {
    this.rutaActiva.params.subscribe(async (params: any) => {
      const idUsuario = params.idU;
      console.log(params);
      console.log(idUsuario);
      try {
        let response = await this.usuarioService.getById(idUsuario);
        this.unUsuario = response;
        console.log(response);
      } catch (error) {
        console.log('Error');
      }
    });
  }
}
