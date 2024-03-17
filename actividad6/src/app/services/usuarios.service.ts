import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { IUsuario } from '../interfaces/iusuario.interface';
import { lastValueFrom } from 'rxjs';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  //  constructor() { }
  httpUsuario = inject(HttpClient);
  page!: number;
  InsUsuario!: IUsuario;

  miUrl = 'https://peticiones.online/api/users';

  getAll(page: number): Promise<IUsuario[]> {
    const url = `${this.miUrl}?page=${page}`;
    return lastValueFrom(this.httpUsuario.get<IUsuario[]>(url));
  }

  getById(id: string): Promise<IUsuario> {
    return lastValueFrom(this.httpUsuario.get<IUsuario>(`${this.miUrl}/${id}`));
  }

  postNuevoUsuario(insert: IUsuario): Promise<IUsuario> {
    return lastValueFrom(this.httpUsuario.post<IUsuario>(this.miUrl, insert));
  }

  deleteUsuario(id: string): Promise<IUsuario> {
    return lastValueFrom(
      this.httpUsuario.delete<IUsuario>(`${this.miUrl}/${id}`)
    );
  }
  actualizaUsuario(actualiza: IUsuario): Promise<IUsuario> {
    return lastValueFrom(
      this.httpUsuario.put<IUsuario>(
        `${this.miUrl}/${actualiza._id}`,
        actualiza
      )
    );
  }
}
