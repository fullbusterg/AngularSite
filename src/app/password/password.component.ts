import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'password-input',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent implements OnInit {
  passActive: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  showText() {
    this.passActive = !this.passActive;
  }
}
