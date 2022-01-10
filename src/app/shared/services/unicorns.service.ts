import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Unicorn } from '../models/unicorn.model';

@Injectable({
  providedIn: 'root',
})
export class UnicornsService {
  constructor(private http: HttpClient) {}

  public getUnicorns(): Observable<Unicorn[]> {
    return this.http.get<Unicorn[]>(`${environment.apiUrl}/unicorns`);
  }
}

/*
employee.service.ts
POST .../employee/clone
GET  .../employee/123?fields=firstname,name
 */
