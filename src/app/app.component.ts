import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RecipeService } from './recipes/recipe.service';
import { ShoppingListService } from './shopping-list/shopping-list.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    HeaderComponent,
    RecipesComponent,
    ShoppingListComponent,
  ],
  providers: [RecipeService, ShoppingListService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  isRecipes = false;
  loadedFeature = 'recipes';

  onNavigate(feature: string) {
    if (feature === this.loadedFeature) {
      this.isRecipes = true;
    } else {
      this.isRecipes = false;
    }
  }
}
