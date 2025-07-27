import { Component, ElementRef, EventEmitter, inject, Output, ViewChild, viewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  standalone: true,
  imports: [],
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent {

  @ViewChild('nameInput') nameInputRef!: ElementRef<HTMLInputElement>; 
  @ViewChild('amountInput') amountInputRef!: ElementRef<HTMLInputElement>; 
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  shoppngListService = inject(ShoppingListService);

  onAddItem(event: { preventDefault: () => void; }) {
    event.preventDefault();
    const newIngredient = new Ingredient(this.nameInputRef.nativeElement.value, parseInt(this.amountInputRef.nativeElement.value));
    this.shoppngListService.addIngredient(newIngredient);
  }

}
