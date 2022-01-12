import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Unicorn } from '../../../shared/models/unicorn.model';
import { CartService } from '../../../shared/services/cart.service';

@Component({
  selector: 'app-unicorn-card',
  templateUrl: './unicorn-card.component.html',
  styleUrls: ['./unicorn-card.component.scss'],
})
export class UnicornCardComponent implements OnInit {
  @Input() public unicorn!: Unicorn;
  public isInCart$!: Observable<boolean>;

  constructor(private cartService: CartService) {}

  public toggleToCart(unicorn: Unicorn): void {
    this.cartService.toggleToCart(unicorn);
  }

  ngOnInit(): void {
    this.isInCart$ = this.cartService.isInCart$(this.unicorn);
  }
}
