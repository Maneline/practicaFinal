import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CuentasTarjetasLayoutComponent } from './cuentas-tarjetas/cuentas-tarjetas-layout/cuentas-tarjetas-layout.component';
import { FinanciacionComponent } from './financiacion/financiacion/financiacion.component';
import { ComercioExteriorComponent } from './comercio-exterior/comercio-exterior/comercio-exterior.component';
import { CobrosPagosComponent } from './cobros-pagos/cobros-pagos/cobros-pagos.component';
import { DashboardFiltersComponent } from './shared/dashboard-filters/dashboard-filters.component';
import { AccountsSectionComponent } from './cuentas-tarjetas/accounts-section/accounts-section.component';
import { CardsSectionComponent } from './cuentas-tarjetas/cards-section/cards-section.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../../shared/shared.module';
import { EurosPipe } from '../../shared/pipes/euros.pipe';
import { HomeModule } from '../home.module';



@NgModule({
  declarations: [
    FinanciacionComponent,
    ComercioExteriorComponent,
    CobrosPagosComponent,
    CuentasTarjetasLayoutComponent,
    AccountsSectionComponent,
    CardsSectionComponent,
    DashboardFiltersComponent,
    // EurosPipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
    HomeModule
  ],
  exports: [
    FinanciacionComponent,
    ComercioExteriorComponent,
    CobrosPagosComponent,
    CuentasTarjetasLayoutComponent,
    AccountsSectionComponent,
    CardsSectionComponent,
    DashboardFiltersComponent
  ]
})
export class BottomModule { }
