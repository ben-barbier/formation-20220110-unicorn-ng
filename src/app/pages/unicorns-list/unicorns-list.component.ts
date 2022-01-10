import { Component } from '@angular/core';
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
    this.unicornsService.getUnicorns().subscribe((unicorns) => (this.unicorns = unicorns));
  }
}