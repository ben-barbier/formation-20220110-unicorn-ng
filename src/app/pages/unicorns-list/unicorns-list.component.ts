import { Component } from '@angular/core';
import { UnicornsService } from '../../shared/services/unicorns.service';

@Component({
  selector: 'app-unicorns-list',
  templateUrl: './unicorns-list.component.html',
  styleUrls: ['./unicorns-list.component.scss'],
})
export class UnicornsListComponent {
  public unicorns$ = this.unicornsService.getAllWithCapacitiesLabels();

  constructor(private unicornsService: UnicornsService) {
    // TODO: Appel d'API jusqu'a ce qu'elle réponde "100"
    // interval(1000)
    //   .pipe()
    //   .subscribe((e) => {
    //     console.log(e);
    //   });
  }
}
