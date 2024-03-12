import { Component, inject } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { IUsuario } from '../../interfaces/iusuario.interface';
import { UsuariocardComponent } from '../../components/usuariocard/usuariocard.component';
import { UsuarioviewComponent } from '../usuarioview/usuarioview.component';

@Component({
  selector: 'app-usuariolist',
  standalone: true,
  imports: [UsuarioviewComponent],
  templateUrl: './usuariolist.component.html',
  styleUrl: './usuariolist.component.css',
})
export class UsuariolistComponent {
  usuarioService = inject(UsuariosService);
  arrUsuario: IUsuario[] = [];
  page: number = 1;
  miUsuario!: IUsuario;

  async ngOnInit(): Promise<void> {
    try {
      let response: any;
      response = await this.usuarioService.getAll(this.page);
      this.arrUsuario = response.results;
      console.log(this.arrUsuario);
    } catch (err) {
      alert('error');
    }
  }
}
