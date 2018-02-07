import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AppComponent } from './app.component';
import { DialogComponent } from './dialog/dialog.component';
import { ControlErrors } from './control-errors/control-errors.component';
import { PasswordComponent } from './password/password.component';
import { CardComponent } from './card/card.component';
import { SandboxComponent } from './sandbox/sandbox.component';
import { TimeTransformPipe } from './pipes/time-transform.pipe';
import { ChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';
import { CryptoService } from './services/crypto.service';

@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    ControlErrors,
    PasswordComponent,
    CardComponent,
    SandboxComponent,
    TimeTransformPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ChartsModule,
    NgbModule.forRoot()
  ],
  providers: [
    CryptoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
