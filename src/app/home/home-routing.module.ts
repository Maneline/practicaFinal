import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';



const routes: Routes = [

    
    {
        path: '',
        // pathMatch: 'full',
        component: DashboardLayoutComponent
    }












    // INTENTANDO IMPLEMENTAR LAZY LOADING:

    // {
    //     path: 'home',
    //     loadChildren: () => import('../home/bottom/bottom.module').then(m => m.BottomModule)
    // }
    // { path: '**', loadChildren: () => import('./home.module').then(m => m.HomeModule) },
    // {
    //     path: 'financiacion',
    //     component: FinanciacionComponent
    // },
    // {
    //     path: 'comercio',
    //     component: ComercioExteriorComponent
    // },
    // {
    //     path: 'cobros',
    //     component: CobrosPagosComponent
    // },
    // {
    //     path: '**',
    //     component: CuentasTarjetasLayoutComponent
    // }
    // {
    //     path: '**',
    //     loadChildren: () => import('./../app/home/home.module').then(m => m.HomeModule)
    // }
    // {   path: '/financiacion', component: FinanciacionComponent  },
    // {   path: '/comercio', component: ComercioExteriorComponent  },  
    // {   path: '/cobros', component: CobrosPagosComponent         },
    // {   path: '**', component: DashboardLayoutComponent   }
    
];

// const routes: Routes = [
//     {
//       path: 'home',
//     //   pathMatch: 'full',
//       component: HomeDashboardComponent,
//       children: [
//           { path: 'financiacion', component: FinanciacionComponent },
//           { path: 'comercio', component: ComercioExteriorComponent },
//           { path: 'cobros', component: CobrosPagosComponent },
//           { path: 'cuentas', component: CuentasTarjetasLayoutComponent },
//       ]
//     }
//   ];


@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})

export class HomeRoutingModule { }
