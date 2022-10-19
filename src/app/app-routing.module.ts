import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeDashboardComponent } from './home/home-dashboard.component';
import { CuentasTarjetasLayoutComponent } from './home/bottom/cuentas-tarjetas/cuentas-tarjetas-layout/cuentas-tarjetas-layout.component';
import { FinanciacionComponent } from './home/bottom/financiacion/financiacion/financiacion.component';
import { ComercioExteriorComponent } from './home/bottom/comercio-exterior/comercio-exterior/comercio-exterior.component';
import { CobrosPagosComponent } from './home/bottom/cobros-pagos/cobros-pagos/cobros-pagos.component';




const routes: Routes = [
    {
      path: 'home',
    //   pathMatch: 'full',
      component: HomeDashboardComponent,
      children: [
          { path: 'financiacion', component: FinanciacionComponent },
          { path: 'comercio', component: ComercioExteriorComponent },
          { path: 'cobros', component: CobrosPagosComponent },
          { path: '**', component: CuentasTarjetasLayoutComponent },
      ]
    }
  ];

// const routes: Routes = [
//     {
//         path: 'home',
//         pathMatch: 'full',
//         component: HomeDashboardComponent
//     },
    
    // {
    //     path: 'productos',
    //     pathMatch: 'full',
    //     component: ProductosDashboardComponent
    // },
    // {
    //     path: 'operativas',
    //     pathMatch: 'full',
    //     component: OperativasDashboardComponent
    // }
// ];


@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
