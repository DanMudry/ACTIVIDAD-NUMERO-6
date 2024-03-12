import { Component, Input } from '@angular/core';
import { IUsuario } from '../../interfaces/iusuario.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-usuarioview',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './usuarioview.component.html',
  styleUrl: './usuarioview.component.css',
})
export class UsuarioviewComponent {
  @Input() miUsuario!: IUsuario;
}
