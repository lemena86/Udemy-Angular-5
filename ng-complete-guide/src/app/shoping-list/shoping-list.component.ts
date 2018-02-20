import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Ingredient } from '../shared/ingredient.model';
import { ShopingListService } from './shoping.list.service';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css']
})
export class ShopingListComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  ingredients: Ingredient[] = [];

  constructor(private shopingListService: ShopingListService) {
  }

  ngOnInit() {
    this.ingredients = this.shopingListService.getIngredients();
    this.subscription = this.shopingListService.addedIngredient.subscribe(
      () => {
        this.ingredients = this.shopingListService.getIngredients();
      }
    );
  }

  onAddIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onEditItem(index: number) {
    this.shopingListService.startedEditing.next(index);
  }

}
