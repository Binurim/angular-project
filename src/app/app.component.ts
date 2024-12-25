import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SuccessAlertComponent } from "./success-alert/success-alert.component";
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SuccessAlertComponent, WarningAlertComponent, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  username: String = 'testUsername';
  title = 'angular-project';
  displayPara: boolean = false;
  buttonClickLogs: number[] = [];

  onClickUsername() {
    this.username = '';
  }

  onDisplayDetails() {
    this.displayPara = !this.displayPara;
    this.buttonClickLogs.push(this.buttonClickLogs.length + 1)
  }
}
