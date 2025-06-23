import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewService {
  private apiUrl = 'http://localhost:8080/news';

  constructor() { }
}
