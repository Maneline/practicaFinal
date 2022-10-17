import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { CuentasTarjetasLayoutComponent } from './home/bottom/cuentas-tarjetas/cuentas-tarjetas-layout/cuentas-tarjetas-layout.component';
import { FinanciacionComponent } from './home/bottom/financiacion/financiacion/financiacion.component';
import { ComercioExteriorComponent } from './home/bottom/comercio-exterior/comercio-exterior/comercio-exterior.component';
import { CobrosPagosComponent } from './home/bottom/cobros-pagos/cobros-pagos/cobros-pagos.component';
import { BottomModule } from './home/bottom/bottom.module';


const routes: Routes = [
    // { path: 'financiacion', loadChildren: () => import('./../app/home/bottom/financiacion/financiacion/financiacion.component').then(m => m.FinanciacionComponent) },
    {
        path: 'financiacion',
        component: FinanciacionComponent
    },
    {
        path: 'comercio',
        component: ComercioExteriorComponent
    },
    {
        path: 'cobros',
        component: CobrosPagosComponent
    },
    {
        path: '**',
        component: CuentasTarjetasLayoutComponent
    }
];



@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
