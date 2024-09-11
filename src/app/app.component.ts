import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bug-mat-calendar-invalid-displayed-month';
  selected = new Date();

  changeDate() {
    this.selected = new Date(2024, 7, 29);
  }
}
