import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Usuarios } from '../interfaces/Usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private url = 'http://localhost:8080/usuarios';
  private usuarios = new BehaviorSubject<any[]>([]);

  constructor(private http: HttpClient) { }


  listarUsuarios(): Observable<Usuarios[]> {
    return this.http.get<Usuarios[]>(this.url).pipe(map(data => data.sort((a, b) => a.idUsuario - b.idUsuario)));

  }

  listarUsuariosPorId(id: number): Observable<Usuarios> {
    return this.http.get<Usuarios>(`${this.url}/${id}`);
  }


  addUsuario(usuarios: Usuarios): Observable<Object> {
    return this.http.post(this.url, usuarios);
  }

  editUsuario(usuarios: Usuarios): Observable<Object> {
    return this.http.put(this.url, usuarios);
  }

  eliminarUsuario(id: number): Observable<Object> {
    return this.http.delete(`${this.url}/${id}`);
  }

  getUsuarios(): Observable<any[]> {
    return this.usuarios.asObservable();
  }
  // Aquí puedes agregar más métodos para manejar los datos, como agregar o eliminar organizadores, etc.
}