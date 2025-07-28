import { Component, inject, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { FormsModule, NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css',
})
export class ShoppingEditComponent {
  @ViewChild('form') form!: NgForm;
  shoppngListService = inject(ShoppingListService);
  subscription!: Subscription;
  editMode = false;
  editedItemIndex!: number;
  editedIngredient!: Ingredient;

  ngOnInit(): void {
    this.subscription = this.shoppngListService.startEditing.subscribe(
      (index: number) => {
        this.editMode = true;
        this.editedItemIndex = index;
        this.editedIngredient = this.shoppngListService.getIngredient(index);
        this.form.setValue({
          name: this.editedIngredient.name,
          amount: this.editedIngredient.amount,
        });
      }
    );
  }

  onAddItem(form: NgForm) {
    const newIngredient = new Ingredient(form.value.name, form.value.amount);
    if (this.editMode) {
      this.shoppngListService.updateIngredient(
        this.editedItemIndex,
        newIngredient
      );
    } else {
      this.shoppngListService.addIngredient(newIngredient);
    }
    this.onClear();
  }

  onClear() {
    this.form.reset();
    this.editMode = false;
  }

  onDelete() {
    if (this.editMode) {
      this.shoppngListService.deleteIngredient(this.editedItemIndex);
      this.onClear();
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
