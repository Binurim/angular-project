import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private receips: Recipe[] = [
    new Recipe(
      1,
      'Tasty Schinitzel',
      'A Super Tasty Schinitzel- Awesome',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [new Ingredient('Meat', 2), new Ingredient('French Fries', 20)]
    ),
    new Recipe(
      2,
      'Big Fat Burger',
      'What else you need to say',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [new Ingredient('Bread', 2), new Ingredient('Meat', 1)]
    ),
  ];

  getRecipes() {
    return this.receips.slice();
  }
}
