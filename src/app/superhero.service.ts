import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SuperheroService {

  private baseUrl = 'https://akabab.github.io/superhero-api/api/id/';

  constructor(private http: HttpClient) {}

  getSuperheroById(id: number): Observable<any> {
    const url = `${this.baseUrl}${id}.json`;
    return this.http.get(url);
  }
}
