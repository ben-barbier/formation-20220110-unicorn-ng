import { Component } from '@angular/core';
import { filter, from, tap } from 'rxjs';
import { map } from 'rxjs/operators';

enum FactureStatus {
  PAYE,
  NON_PAYE,
}

interface Facture {
  name: string;
  montant: number;
  status: FactureStatus;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor() {
    const facturesHT: Facture[] = [
      { name: 'A', montant: 10, status: FactureStatus.NON_PAYE },
      { name: 'B', montant: 20, status: FactureStatus.PAYE },
      { name: 'C', montant: 30, status: FactureStatus.NON_PAYE },
    ];

    from(facturesHT)
      .pipe(
        tap((e: Facture): void => {
          debugger;
        }),
        filter((e: Facture) => e.status === FactureStatus.NON_PAYE),
        tap((e: Facture): void => {
          debugger;
        }),
        map((facture: Facture): Facture => {
          return { ...facture, montant: facture.montant * 1.2 };
        }),
        tap((e: Facture): void => {
          debugger;
        })
      )
      .subscribe({
        next: (e: Facture) => {
          debugger;
        },
        error: (err) => {
          debugger;
        },
        complete: () => {
          debugger;
        },
      });

    debugger;
    console.log(facturesHT);
  }
}
