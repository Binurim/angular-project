import { Component, inject } from '@angular/core';
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [RecipeListComponent, RouterOutlet],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css'
})
export class RecipesComponent {

  selectedRecipe!: Recipe;

  recipeService = inject(RecipeService);
  
  ngOnInit(): void {
  }

}
