import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';

const authRoutes: Routes = [
    {path: 'signup', component: SignupComponent},
    {path: 'signin', component: SigninComponent}
];

@NgModule({
    imports: [
        RouterModule.forChild(authRoutes) // this is not the root module, se always have to be ForChild()
    ],
    exports: [RouterModule]
})
export class AuthRouthingModule { }