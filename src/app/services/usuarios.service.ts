import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { post } from '../models/post';
import { usuario } from '../models/usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  url = 'http://localhost:3001/api/usuarios/';
  urlpost = 'http://localhost:3001/api/post/';

  constructor(private http: HttpClient) { }
  
  getUsuarios(): Observable<any>{
    return this.http.get(this.url);
  }
  getPost(): Observable<any>{
    return this.http.get(this.urlpost);
  }
  eliminarUsuario(id: string):Observable<any>{
    return this.http.delete(this.url + id);
  }
  eliminarPost(id: string):Observable<any>{
    return this.http.delete(this.urlpost + id);
  }
  guardarUsuario(usuario: usuario):Observable<any>{
    return this.http.post(this.url, usuario)
  }
  guardarPost(post: post):Observable<any>{
    return this.http.post(this.urlpost, post)
  }
  ficharUsuario(id: string): Observable<any>{
    return this.http.get(this.url + id)
  }
  ficharPost(id: string): Observable<any>{
    return this.http.get(this.urlpost + id)
  }
  editarUsuarios(id: string, usuario: usuario):Observable<any>{
    return this.http.put(this.url + id, usuario);
  }
  editarPost(id: string, post: post):Observable<any>{
    return this.http.put(this.urlpost + id, post);
  }
}

