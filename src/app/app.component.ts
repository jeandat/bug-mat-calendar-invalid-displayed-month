import { Component, ViewChild } from '@angular/core';
import { MatCalendar } from '@angular/material/datepicker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bug-mat-calendar-invalid-displayed-month';
  selectedDate = new Date();

  @ViewChild(MatCalendar) calendar?: MatCalendar<Date>;

  changeDate() {
    this.selectedDate = new Date(2024, 7, 29);
    this.focusSelectedMonth();
  }

  focusSelectedMonth() {
    setTimeout(() => {
      if (this.calendar) {
        this.calendar.activeDate = this.selectedDate;
      }
    }, 50);
  }
}
