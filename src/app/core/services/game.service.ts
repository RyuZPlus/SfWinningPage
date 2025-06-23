import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private apiUrl = 'http://localhost:8080/games';

  constructor(private http: HttpClient) { }

  getJuegos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/listgames`);
  }

  getJuegosNav(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/gamesNav`);
  }
}
