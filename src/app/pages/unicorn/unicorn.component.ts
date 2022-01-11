import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { Unicorn } from '../../shared/models/unicorn.model';
import { UnicornsService } from '../../shared/services/unicorns.service';

@Component({
  selector: 'app-unicorn',
  templateUrl: './unicorn.component.html',
  styleUrls: ['./unicorn.component.scss'],
})
export class UnicornComponent {
  public unicorn?: Unicorn;

  constructor(route: ActivatedRoute, unicornsService: UnicornsService) {
    route.params
      .pipe(
        // Params
        map((params: Params): number => params['id']),
        // Unicorn ID (number)
        // ???? async
        mergeMap((unicornId: number): Observable<Unicorn> => {
          return unicornsService.getUnicorn(unicornId);
        })
        // Unicorn
      )
      .subscribe((unicorn: Unicorn) => {
        this.unicorn = unicorn;
      });
  }
}
