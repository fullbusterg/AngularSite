import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'dialog-component',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  @Input()
  modalid: string = '';

  @ViewChild('trigger')
  private trigger: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  public show() {
    this.trigger.nativeElement.click();
  }

  public hide() {
    this.trigger.nativeElement.click();
  }
}
