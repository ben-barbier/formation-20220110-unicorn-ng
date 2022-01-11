import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { concatAll, filter, from, mergeMap, Observable, toArray } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Capacity } from '../models/capacity.model';
import { Unicorn } from '../models/unicorn.model';
import { CapacitiesService } from './capacities.service';

@Injectable({
  providedIn: 'root',
})
export class UnicornsService {
  constructor(private http: HttpClient, private capacitiesService: CapacitiesService) {}

  public getUnicorns(): Observable<Unicorn[]> {
    return this.http.get<Unicorn[]>(`${environment.apiUrl}/unicorns`);
  }

  public getMoreFiveYearsUnicornsBienNourries(): Observable<Unicorn[]> {
    return this.getUnicorns().pipe(
      concatAll(),
      filter((unicorn: Unicorn) => unicorn.birthyear < new Date().getFullYear() - 5),
      map((unicorn: Unicorn) => ({ ...unicorn, weight: unicorn.weight + 10 })),
      toArray()
    );
  }

  public getUnicorn(id: number): Observable<Unicorn> {
    return this.http.get<Unicorn>(`${environment.apiUrl}/unicorns/${id}`);
  }

  public getAllWithCapacitiesLabels(): Observable<Unicorn[]> {
    return this.getUnicorns().pipe(
      concatAll(),
      mergeMap((unicorn: Unicorn): Observable<Unicorn> => {
        return from(unicorn.capacities).pipe(
          mergeMap((capacityId: number): Observable<Capacity> => {
            return this.capacitiesService.getCapacity(capacityId);
          }),
          map((capacity: Capacity): string => capacity.label),
          toArray(),
          map((capacitiesLabels: string[]): Unicorn => ({ ...unicorn, capacitiesLabels }))
        );
      }),
      toArray(),
      map((unicorns) => [...unicorns].sort((u1, u2) => u1.id - u2.id))
    );
  }
}
