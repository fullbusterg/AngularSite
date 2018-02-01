import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  isLoading: boolean = false;
  loginPrompt: string = 'Login';
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, 
    private renderer: Renderer2) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit() {
   this.isLoading = true;
   this.loginPrompt = '';
   setTimeout(() => {
    this.loginPrompt = 'Login';
    this.isLoading = false; 
    }, 2000);
 }
}
