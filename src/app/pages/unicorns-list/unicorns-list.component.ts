import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { Unicorn } from '../../shared/models/unicorn.model';
import { UnicornsService } from '../../shared/services/unicorns.service';

@Component({
  selector: 'app-unicorns-list',
  templateUrl: './unicorns-list.component.html',
  styleUrls: ['./unicorns-list.component.scss'],
})
export class UnicornsListComponent {
  public unicorns: Unicorn[] = [];

  constructor(private unicornsService: UnicornsService) {
    this.unicornsService.getAllWithCapacitiesLabels().subscribe((unicorns) => {
      this.unicorns = unicorns;
    });

    // TODO: Appel d'API jusqu'a ce qu'elle réponde "100"
    interval(1000)
      .pipe()
      .subscribe((e) => {
        console.log(e);
      });
  }
}
