import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Unicorn } from '../models/unicorn.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public cart$ = new BehaviorSubject<Unicorn[]>([]);

  public isInCart$(unicorn: Unicorn): Observable<boolean> {
    return this.cart$.pipe(
      map((cart) => {
        return cart.some((u) => u.id === unicorn.id);
      })
    );
  }

  private addToCart(unicorn: Unicorn): void {
    const actualCart = this.cart$.getValue();
    const newCart = actualCart.concat(unicorn);
    this.cart$.next(newCart);
  }

  private removeFromCart(unicorn: Unicorn): void {
    const actualCart = this.cart$.getValue();
    const newCart = actualCart.filter((u) => u.id !== unicorn.id);
    this.cart$.next(newCart);
  }

  public toggleToCart(unicorn: Unicorn): void {
    const isInCart = this.cart$.getValue().some((u) => u.id === unicorn.id);
    if (isInCart) {
      this.removeFromCart(unicorn);
    } else {
      this.addToCart(unicorn);
    }
  }
}
