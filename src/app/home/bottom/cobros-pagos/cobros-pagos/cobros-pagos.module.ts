import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './../../../../app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { CobrosPagosComponent } from './cobros-pagos.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    CobrosPagosComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AppRoutingModule
    // RouterModule
  ],
  exports: [
    CobrosPagosComponent
  ]
})
export class CobrosPagosModule { }
