import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { CobrosPagosComponent } from './cobros-pagos/cobros-pagos/cobros-pagos.component';
// import { ComercioExteriorComponent } from './comercio-exterior/comercio-exterior/comercio-exterior.component';
// import { FinanciacionComponent } from './financiacion/financiacion/financiacion.component';
// import { CuentasTarjetasLayoutComponent } from './cuentas-tarjetas/cuentas-tarjetas-layout/cuentas-tarjetas-layout.component';
// import { HomeDashboardComponent } from '../home-dashboard.component';


const routes: Routes = [
    
    // Normal Loading: 
    
    // {   path: 'home/centros',
    //     pathMatch: 'full', 
    //     component: FinanciacionComponent
    // },
    // {   path: 'home/progreso',
    //     pathMatch: 'full', 
    //     component: ComercioExteriorComponent
    // },
    // {   path: 'home/objetivos',
    //     pathMatch: 'full', 
    //     component: CobrosPagosComponent
    // },
    // {   path: 'home/**',
    //     pathMatch: 'full', 
    //     component: CuentasTarjetasLayoutComponent
    // }
    

    //Lazy Loading: 
    
    // {
    //     path: 'home/cobros',
    //     // pathMatch: 'full',
    //     loadChildren: () => import('../bottom/cobros-pagos/cobros-pagos/cobros-pagos.module').then(m => m.CobrosPagosModule)
    // },
    // {
    //     path: 'home/financiacion',
    //     loadChildren: () => import('../bottom/financiacion/financiacion/financiacion.component').then(m => m.FinanciacionComponent)
    // },
    // {
    //     path: 'home/comercio',
    //     loadChildren: () => import('../bottom/comercio-exterior/comercio-exterior/comercio-exterior.component').then(m => m.ComercioExteriorComponent)
    // },
    // {
    //     path: '**',
    //     loadChildren: () => import('../bottom/cuentas-tarjetas/cuentas-tarjetas-layout/cuentas-tarjetas-layout.component').then(m => m.CuentasTarjetasLayoutComponent)
    // }
// ];

  ];
    
    
    @NgModule({
        imports: [
            RouterModule.forRoot(routes),
            RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})


export class BottomRoutingModule { }
