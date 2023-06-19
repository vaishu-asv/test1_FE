import { QuickUiModule } from 'quick-ui';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesRoutingModule } from './modules-routing.module';
import { MicrosoftComponent } from './microsoft/microsoft.component';


@NgModule({
  declarations: [
    MicrosoftComponent
  ],
  imports: [
    CommonModule,
    ModulesRoutingModule
  ,	QuickUiModule,
]
})
export class ModulesModule { }
