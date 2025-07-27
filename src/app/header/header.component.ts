import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { DropdownDirective } from '../shared/dropdown.directive';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  standalone: true,
  imports: [CommonModule, DropdownDirective],
})
export class HeaderComponent {
  collapsed = true;
  isRecipes = false;

  @Output() onSelect = new EventEmitter<string>();

}