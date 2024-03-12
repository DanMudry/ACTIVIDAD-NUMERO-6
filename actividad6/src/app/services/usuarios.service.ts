import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { IUsuario } from '../interfaces/iusuario.interface';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  //  constructor() { }
  httpUsuario = inject(HttpClient);
  pagina!: number;

  miUrl = 'https://peticiones.online/api/users';

  getAll(pagina: number): Promise<IUsuario[]> {
    const url = `${this.miUrl}?page=${pagina}`;
    return lastValueFrom(this.httpUsuario.get<IUsuario[]>(url));
  }

  getById(id: string): Promise<IUsuario> {
    return lastValueFrom(this.httpUsuario.get<IUsuario>(`${this.miUrl}/${id}`));
  }
}
