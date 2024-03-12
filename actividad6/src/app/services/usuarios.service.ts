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
  page!: number;
  miUrl = `https://peticiones.online/users?page=${this.page}`;
  miUrlId = 'https://peticiones.online/api/users';

  /*getAll(page: number): Promise<IUsuario[]> {
    return lastValueFrom(this.httpUsuario.get<IUsuario[]>(this.miUrl));
  }*/
  getAll(): Promise<IUsuario[]> {
    return lastValueFrom(this.httpUsuario.get<IUsuario[]>(this.miUrlId));
  }
  getById(id: string): Promise<IUsuario> {
    return lastValueFrom(
      this.httpUsuario.get<IUsuario>(`${this.miUrlId}/${id}`)
    );
  }
}
