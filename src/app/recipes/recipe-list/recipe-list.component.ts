import { Component, EventEmitter, Output } from '@angular/core';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { Recipe } from '../recipe.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [RecipeItemComponent, CommonModule],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  receips: Recipe[] = [
    new Recipe(1, 'Test recipe', 'test', 'test'),
    new Recipe(1, 'Test recipe@', 'test@', 'test@')
  ];
  @Output() onRecipeSelect = new EventEmitter<Recipe>();

}
