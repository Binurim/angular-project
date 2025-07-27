import { Component, inject, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { DropdownDirective } from '../../shared/dropdown.directive';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-recipe-detail',
  standalone: true,
  imports: [DropdownDirective],
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css',
})
export class RecipeDetailComponent {
  @Input()
  recipe!: Recipe;
  // recipe = input<Recipe>();

  shoppngListService = inject(ShoppingListService);

  addToShoppingList(ingredients: Ingredient[]) {
    for (let ingredient of ingredients) {
      this.shoppngListService.addIngredient(ingredient);
    }
  }
}
