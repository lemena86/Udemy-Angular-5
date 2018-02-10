import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {ShopingListService} from '../../shoping-list/shoping.list.service';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit() {
  }

  onAddToShopingList() {
    this.recipeService.addIngredientsToShopingList(this.recipe.ingredients);
  }

}
