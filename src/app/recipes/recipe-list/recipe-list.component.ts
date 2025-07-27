import { Component, EventEmitter, inject, Output } from '@angular/core';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { Recipe } from '../recipe.model';
import { CommonModule } from '@angular/common';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [RecipeItemComponent, CommonModule],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {

  recipeService = inject(RecipeService);

  receips!: Recipe[];
  @Output() onRecipeSelect = new EventEmitter<Recipe>();

  ngOnInit(): void {
    this.receips = this.recipeService.getRecipes();
  }

}
