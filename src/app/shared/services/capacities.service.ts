import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Capacity } from '../models/capacity.model';

@Injectable({
  providedIn: 'root',
})
export class CapacitiesService {
  constructor(private http: HttpClient) {}

  public getCapacities(): Observable<Capacity[]> {
    return this.http.get<Capacity[]>(`${environment.apiUrl}/capacities`);
  }

  public getCapacity(id: number): Observable<Capacity> {
    return this.http.get<Capacity>(`${environment.apiUrl}/capacities/${id}`);
  }
}
