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
  formAltaUsuario!: FormGroup;
  constructor() {
    nombre: new FormControl();
  }
}
