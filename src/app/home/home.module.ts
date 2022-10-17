import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

// shared
import { SharedModule } from '../shared/shared.module';

// tablero:
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';

// top:
import { DashboardWelcomeComponent } from './top/dashboard-welcome/dashboard-welcome.component';
import { DashboardFavoritesComponent } from './top/dashboard-favorites/dashboard-favorites.component';
import { DashboardSummaryComponent } from './top/dashboard-summary/dashboard-summary.component';

// menu:
import { NavigationMenuComponent } from './menu/navigation-menu/navigation-menu.component';

// sidebar:
import { HomeSidebarComponent } from './sidebar/home-sidebar/home-sidebar.component';

// bottom: 
import { BottomModule } from './bottom/bottom.module';
import { FinanciacionComponent } from './bottom/financiacion/financiacion/financiacion.component';
import { EurosPipe } from '../shared/pipes/euros.pipe';
import { SaludoPipe } from '../shared/pipes/saludo.pipe';



@NgModule({
  declarations: [
    DashboardLayoutComponent,
    DashboardWelcomeComponent,
    DashboardFavoritesComponent,
    DashboardSummaryComponent,
    HomeSidebarComponent,
    NavigationMenuComponent,
    EurosPipe,
    SaludoPipe
  ],
  imports: [
    CommonModule,
    // BottomModule,
    RouterModule,
    HttpClientModule,
    SharedModule
  ],
  exports: [
    DashboardLayoutComponent,
    DashboardWelcomeComponent,
    DashboardFavoritesComponent,
    DashboardSummaryComponent,
    HomeSidebarComponent,
    NavigationMenuComponent,
    EurosPipe,
    SaludoPipe
    // FinanciacionComponent
  ]
})
export class HomeModule { }
