import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modificausuario',
  standalone: true,
  imports: [],
  templateUrl: './modificausuario.component.html',
  styleUrl: './modificausuario.component.css',
})
export class ModificausuarioComponent {
  rutaActiva = inject(ActivatedRoute);
  ngOnInit() {
    this.rutaActiva.params.subscribe((params: any) => {
      console.log(params.id);
    });
  }
}
