import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShopingListService } from '../shoping.list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shoping-edit',
  templateUrl: './shoping-edit.component.html',
  styleUrls: ['./shoping-edit.component.css']
})
export class ShopingEditComponent implements OnInit, OnDestroy {

  @ViewChild('f') slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  constructor(private shopingListService: ShopingListService) {
  }

  ngOnInit() {
    this.subscription = this.shopingListService.startedEditing
      .subscribe(
        (index: number) => {
          this.editedItemIndex = index;
          this.editMode = true;
          this.editedItem = this.shopingListService.getIngredient(index);
          this.slForm.setValue({
            name: this.editedItem.name,
            amount: this.editedItem.amount
          });
        });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onAddIngredient(form: NgForm) {
    const { name, amount } = form.value;
    if (this.editMode) {
      this.shopingListService.updateIngredient(this.editedItemIndex, new Ingredient(name, amount));
    } else {
      this.shopingListService.addIngredient(new Ingredient(name, amount));
    }
    this.editMode = false;
    form.reset();
  }

  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.shopingListService.deleteIngredient(this.editedItemIndex);
    this.onClear();

  }


}
