import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'this a a test',
      'https://static01.nyt.com/images/2015/08/14/dining/14ROASTEDSALMON/14ROASTEDSALMON-articleLarge.jpg'),
    new Recipe('A testtt recipe', 'this a a test',
      'https://static01.nyt.com/images/2015/08/14/dining/14ROASTEDSALMON/14ROASTEDSALMON-articleLarge.jpg')
  ];

  @Output() selectedRecipe: EventEmitter<Recipe> = new EventEmitter<Recipe>();

  constructor() {
  }

  ngOnInit() {
  }

  onSelectedRecipe(recipe: Recipe) {
    this.selectedRecipe.emit(recipe);
  }

}
