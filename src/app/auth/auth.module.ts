import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { AuthRouthingModule } from './auth-routing.module';



@NgModule({
    declarations: [
        SignupComponent,
        SigninComponent
      ],
      imports: [
        CommonModule,
        FormsModule,
        AuthRouthingModule
      ]
})
export class AuthModule { }
