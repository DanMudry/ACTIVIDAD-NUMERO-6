import { Component, Input } from '@angular/core';
import { IUsuario } from '../../interfaces/iusuario.interface';

@Component({
  selector: 'app-usuarioview',
  standalone: true,
  imports: [],
  templateUrl: './usuarioview.component.html',
  styleUrl: './usuarioview.component.css',
})
export class UsuarioviewComponent {
  @Input() miUsuario!: IUsuario;
}
