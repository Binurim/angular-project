import { Component, inject, Input } from '@angular/core';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { Ingredient } from '../shared/ingredient.model';
import { CommonModule } from '@angular/common';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  standalone: true,
  imports: [CommonModule, ShoppingEditComponent],
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent {
  shoppngListService = inject(ShoppingListService);

  ingredients!: Ingredient[];

  ngOnInit(): void {
    this.ingredients = this.shoppngListService.getIngredients();
    this.shoppngListService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }

}
