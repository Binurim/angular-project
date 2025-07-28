import { Component, inject, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { DropdownDirective } from '../../shared/dropdown.directive';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { Ingredient } from '../../shared/ingredient.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  standalone: true,
  imports: [DropdownDirective, RouterLinkActive],
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css',
})
export class RecipeDetailComponent {
  recipe!: Recipe;
  // recipe = input<Recipe>();
  recipeId: number = 1;

  shoppngListService = inject(ShoppingListService);
  recipeService = inject(RecipeService);
  route = inject(ActivatedRoute);
  router = inject(Router);

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.recipeId = +params['id'];
      this.recipe = this.recipeService.getRecipesById(this.recipeId);
    });
  }

  addToShoppingList(ingredients: Ingredient[]) {
    for (let ingredient of ingredients) {
      this.shoppngListService.addIngredient(ingredient);
    }
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
    // this.router.navigate(['../', this.recipeId, 'edit'], {relativeTo: this.route});
  }
}
