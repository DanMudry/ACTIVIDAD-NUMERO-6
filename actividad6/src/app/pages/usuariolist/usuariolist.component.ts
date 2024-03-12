import { Component, inject } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { IUsuario } from '../../interfaces/iusuario.interface';

@Component({
  selector: 'app-usuariolist',
  standalone: true,
  imports: [],
  templateUrl: './usuariolist.component.html',
  styleUrl: './usuariolist.component.css',
})
export class UsuariolistComponent {
  usuarioService = inject(UsuariosService);
  arrUsuario: IUsuario[] = [];
  pagina: number = 1;

  async ngOnInit(): Promise<void> {
    try {
      let response: any;
      response = await this.usuarioService.getAll(this.pagina);
      this.arrUsuario = response.results;
      console.log(this.arrUsuario);
    } catch (err) {
      alert('error');
    }
  }
}
