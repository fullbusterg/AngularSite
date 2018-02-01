//our root app component
import {Component, NgModule, Directive, Host, Input, Optional} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {FormsModule, NgForm, FormGroup} from '@angular/forms'; 

@Component({
  selector: 'control-errors',
  template: '<div class="text-danger" *ngIf="error">{{error}}</div>'
})
export class ControlErrors  {
  
  @Input() control: string;
  @Input() errors: Object;
  @Input('group') group: FormGroup;
  
  get error() {
    let control = this.group.controls[this.control];

    if(control && this.group.controls[this.control].dirty ) {
     let firstError;
     Object.keys(this.errors).some(err => {
        if(control.hasError(err)) {
          firstError = this.errors[err];
          return true;
        }
      });
      return firstError;
    }
  }
}
