import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShopingListService} from '../shoping-list/shoping.list.service';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('A test recipe', 'this a a test',
      'https://static01.nyt.com/images/2015/08/14/dining/14ROASTEDSALMON/14ROASTEDSALMON-articleLarge.jpg',
      [new Ingredient('Meat', 1), new Ingredient('French', 20)]),
    new Recipe('A testtt recipe', 'this a a test',
      'https://static01.nyt.com/images/2015/08/14/dining/14ROASTEDSALMON/14ROASTEDSALMON-articleLarge.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ])
  ];

  recipeSelected = new EventEmitter<Recipe>();

  constructor(private shopingListService: ShopingListService) {
  }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShopingList(ingredients: Ingredient[]) {
    this.shopingListService.addIngredients(ingredients);
  }
}
