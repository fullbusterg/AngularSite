import { Component, OnInit } from '@angular/core';
import { NgbDropdownConfig, NgbDateStruct, NgbCalendar, NgbDatepicker} from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-date';
import { ViewChild } from '@angular/core/';

const equals = (one: NgbDateStruct, two: NgbDateStruct) =>
  one && two && two.year === one.year && two.month === one.month && two.day === one.day;

const before = (one: NgbDateStruct, two: NgbDateStruct) =>
  !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day
    ? false : one.day < two.day : one.month < two.month : one.year < two.year;

const after = (one: NgbDateStruct, two: NgbDateStruct) =>
  !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day
    ? false : one.day > two.day : one.month > two.month : one.year > two.year;


@Component({
  selector: 'date-select',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.scss']
})
export class SandboxComponent {

  @ViewChild('dp') datepicker: NgbDatepicker;
  hoveredDate: NgbDateStruct;
  fromDate: NgbDateStruct;
  toDate: NgbDateStruct;
  dateSelected: NgbDateStruct;
  isOpen: boolean = false;

  constructor(private calendar: NgbCalendar, config: NgbDropdownConfig) {
    config.autoClose = false;
    config.placement = 'bottom-left';
    this.toDate = this.calendar.getToday();
    this.fromDate = this.calendar.getToday();
  }

  onDateChange(date: NgbDateStruct) {
    let day: NgbDate = new NgbDate(date.year, date.month, date.day);
    let current: NgbDate = new NgbDate(this.fromDate.year, this.fromDate.month, this.fromDate.day);
    if (!this.fromDate && !this.dateSelected) {
      this.fromDate = date;
    } 
    else if (this.fromDate && !this.dateSelected && after(date, this.fromDate)) {
      if(!after(day, this.calendar.getNext(current, 'd', 7))) {
        this.toDate = date;
        this.dateSelected = date;
      }
    } 
    else {
      this.toDate = date;
      this.dateSelected = null;
      this.fromDate = date;
    }
  }

  selectToday() {
    this.fromDate = this.calendar.getToday();
    this.dateSelected = this.calendar.getToday();
    this.datepicker.navigateTo(this.fromDate);
  }

  selectYesterday() {
    this.fromDate = this.calendar.getPrev(this.calendar.getToday());
    this.dateSelected = this.calendar.getPrev(this.calendar.getToday());
    this.datepicker.navigateTo(this.fromDate);
  }

  toggle() {
    this.isOpen = !this.isOpen;
    this.datepicker.navigateTo(this.fromDate); 
  }

  isHovered = date => this.fromDate && !this.dateSelected && this.hoveredDate && after(date, this.fromDate) && before(date, this.hoveredDate);
  isInside = date => after(date, this.fromDate) && before(date, this.dateSelected);
  isFrom = date => equals(date, this.fromDate);
  isTo = date => equals(date, this.dateSelected);
}
