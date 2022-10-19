import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { EurosPipe } from './pipes/euros.pipe';
import { SaludoPipe } from './pipes/saludo.pipe';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    EurosPipe,
    SaludoPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    EurosPipe,
    SaludoPipe
  ]
})
export class SharedModule { }
