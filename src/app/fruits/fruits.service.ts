import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Fruits } from './fruits';
@Injectable({
  providedIn: 'root'
})

export class FruitsService {
  get() {
    
    return this.http.get<Fruits[]>('http://localhost:3000/fruits');
  }
  constructor(private http: HttpClient) { }

  create(payload: Fruits) {
    return this.http.post<Fruits>('http://localhost:3000/fruits', payload);
  }
}
