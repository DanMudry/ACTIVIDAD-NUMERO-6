import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-nuevousuario',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './nuevousuario.component.html',
  styleUrl: './nuevousuario.component.css',
})
export class NuevousuarioComponent {
  formAltaUsuario: FormGroup;
  constructor() {
    this.formAltaUsuario = new FormGroup(
      {
        nombre: new FormControl(null, []),
        apellido: new FormControl(null, []),
        email: new FormControl(null, []),
        imagen: new FormControl(null, []),
      },
      []
    );
  }

  guardarDatosForm(): void {}
}
