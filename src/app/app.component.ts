import { Component, OnInit, Renderer2 } from '@angular/core';
import { ViewChild } from '@angular/core';
import { DialogComponent } from './dialog/dialog.component';
import { ElementRef } from '@angular/core/';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild('trigger') trigger: ElementRef;
  @ViewChild('sidenav') sidenav: ElementRef;
  @ViewChild('item') item: ElementRef;
  sidenavArgs: string[];
  args: string[] = ['Home', 'Dashboard', 'Statistics', 'Report', 'Settings', 'Contact'];
  emptyArgs: string[] = ['', '', '', '', '', ''];
  display='none';
  sidenavActive: boolean = true;

  constructor(private fb: FormBuilder,
    private renderer: Renderer2) { 
    }

    public lineChartData:Array<any> = [
      [65, 59, 80, 81, 56, 55, 40],
      [28, 48, 40, 19, 86, 27, 90]
    ];
    public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    public lineChartType:string = 'line';
    public pieChartType:string = 'pie';

    public randomizeType():void {
      this.lineChartType = this.lineChartType === 'line' ? 'bar' : 'line';
    }

  ngOnInit(): void {
    this.sidenavArgs = this.args;
  }

  openModal(){
    this.display='block'; 
 }

  onCloseHandled(){
    this.display='none'; 
 }

 hidenav() {
  if(this.sidenavActive) {
    this.renderer.setStyle(this.sidenav.nativeElement, "width", "0px");
    this.sidenavArgs = this.emptyArgs;
  }
  else {
    this.renderer.setStyle(this.sidenav.nativeElement, "width", "11em");
    setTimeout(() => {
      this.sidenavArgs = this.args;
    }, 250);
  }
  this.sidenavActive = !this.sidenavActive;
 }

 hide() {
   setTimeout(() => {
    this.trigger.nativeElement.click();
   }, 3000);
 }
}
