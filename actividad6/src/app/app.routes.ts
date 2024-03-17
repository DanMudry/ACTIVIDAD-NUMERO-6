import { Routes } from '@angular/router';
import { UsuariolistComponent } from './pages/usuariolist/usuariolist.component';
import { UsuarioviewComponent } from './pages/usuarioview/usuarioview.component';
import { NuevousuarioComponent } from './pages/nuevousuario/nuevousuario.component';

import { Component } from '@angular/core';
import { UsuariocardComponent } from './components/usuariocard/usuariocard.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'principal' },
  { path: 'principal', component: UsuariolistComponent },
  { path: 'principal/:idusuario', component: UsuarioviewComponent },
  { path: 'nuevousuario', component: NuevousuarioComponent },
  { path: 'modificausuario/:idM', component: NuevousuarioComponent },
  { path: 'detalleusuario/:idU', component: UsuariocardComponent },
];
