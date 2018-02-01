import { Pipe, PipeTransform } from '@angular/core';
import { NgbDropdownConfig, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';

@Pipe({
  name: 'timeTransform'
})
export class TimeTransformPipe implements PipeTransform {

  transform(value: NgbDateStruct): string {
    if(!value) return '';
    return moment(
      new Date(value.year + '/' + value.month + '/' + value.day)).format('LL');
  } 
}
