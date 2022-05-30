import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {AuthGuard} from "./providers/auth.guard";
import {NonAuthGuard} from "./providers/non-auth.guard";

const routes: Routes = [
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule) ,canActivate: [AuthGuard]
  },
  {
    path: 'cartera',
    loadChildren: () => import('./cartera/cartera.module').then( m => m.CarteraPageModule),canActivate: [AuthGuard]
  },
  {
    path: 'reportes',
    loadChildren: () => import('./reportes/reportes.module').then( m => m.ReportesPageModule),canActivate: [AuthGuard]
  },
  {
    path: 'mora',
    loadChildren: () => import('./mora/mora.module').then( m => m.MoraPageModule) ,canActivate: [AuthGuard]
  },
  {
    path: 'saldo',
    loadChildren: () => import('./saldo/saldo.module').then( m => m.SaldoPageModule),canActivate: [AuthGuard]
  },
  {
    path: 'empresas',
    loadChildren: () => import('./empresas/empresas.module').then( m => m.EmpresasPageModule) ,canActivate: [AuthGuard]
  },
  {
    path: 'venta-pines',
    loadChildren: () => import('./venta-pines/venta-pines.module').then( m => m.VentaPinesPageModule),canActivate: [AuthGuard]
  },
  {
    path: 'venta-recargas',
    loadChildren: () => import('./venta-recargas/venta-recargas.module').then( m => m.VentaRecargasPageModule),canActivate: [AuthGuard]
  },
  {
    path: 'venta-certificados',
    loadChildren: () => import('./venta-certificados/venta-certificados.module').then( m => m.VentaCertificadosPageModule),canActivate: [AuthGuard]
  },
  {
    path: 'venta-soat',
    loadChildren: () => import('./venta-soat/venta-soat.module').then( m => m.VentaSoatPageModule),canActivate: [AuthGuard]
  },
  {
    path: 'venta-apuestas',
    loadChildren: () => import('./venta-apuestas/venta-apuestas.module').then( m => m.VentaApuestasPageModule),canActivate: [AuthGuard]
  },
  {path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),canActivate: [NonAuthGuard]},
  { path: '**', redirectTo: '/login' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
