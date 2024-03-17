import { Component, Input } from '@angular/core';
import { IUsuario } from '../../interfaces/iusuario.interface';
import { RouterLink } from '@angular/router';
import { BotoneraComponent } from '../../components/botonera/botonera.component';

@Component({
  selector: 'app-usuarioview',
  standalone: true,
  imports: [RouterLink, BotoneraComponent],
  templateUrl: './usuarioview.component.html',
  styleUrl: './usuarioview.component.css',
})
export class UsuarioviewComponent {
  @Input() miUsuario!: IUsuario;
}
