import { Component, inject } from '@angular/core';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { Ingredient } from '../shared/ingredient.model';
import { CommonModule } from '@angular/common';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  standalone: true,
  imports: [CommonModule, ShoppingEditComponent],
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent {
  shoppngListService = inject(ShoppingListService);
  private ingredientsChangedSub!: Subscription;

  ingredients!: Ingredient[];

  ngOnInit(): void {
    this.ingredients = this.shoppngListService.getIngredients();
    this.ingredientsChangedSub = this.shoppngListService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }

  onEditItem(index: number) {
    this.shoppngListService.startEditing.next(index);
  }

  ngOnDestroy(): void {
    this.ingredientsChangedSub.unsubscribe();
  }

}
