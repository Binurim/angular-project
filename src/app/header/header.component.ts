import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DropdownDirective } from '../shared/dropdown.directive';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  standalone: true,
  imports: [CommonModule, DropdownDirective, RouterLink, RouterLinkActive],
})
export class HeaderComponent {
  collapsed = true;
  isRecipes = false;
}