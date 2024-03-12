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
  arrPag1: IUsuario[] = [];
  arrPag2: IUsuario[] = [];
  arrUsuario: IUsuario[] = [];
  page: number = 1;
  miUsuario!: IUsuario;

  async ngOnInit(): Promise<void> {
    try {
      let response: any;
      response = await this.usuarioService.getAll(1);
      this.arrPag1 = response.results;
      console.log(response.results);
      response = await this.usuarioService.getAll(2);
      this.arrPag2 = response.results;
      this.arrUsuario = this.arrPag1.concat(this.arrPag2);
    } catch (err) {
      alert('error');
    }
  }
}
