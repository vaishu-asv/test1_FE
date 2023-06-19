import { QuickUiModule } from 'quick-ui';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginScoutComponent } from './login-scout/login-scout.component';


@NgModule({
  declarations: [
    LoginScoutComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule
  ,	QuickUiModule,
]
})
export class AuthenticationModule { }
