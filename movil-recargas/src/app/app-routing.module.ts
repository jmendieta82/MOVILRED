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
    loadChildren: () => import('./cartera/cartera.module').then( m => m.CarteraPageModule)
  },
  {
    path: 'reportes',
    loadChildren: () => import('./reportes/reportes.module').then( m => m.ReportesPageModule)
  },
  /*{
    path: 'mora',
    loadChildren: () => import('./mora/mora.module').then( m => m.MoraPageModule)
  },*/
  {
    path: 'saldo',
    loadChildren: () => import('./saldo/saldo.module').then( m => m.SaldoPageModule)
  },
  {
    path: 'empresas',
    loadChildren: () => import('./empresas/empresas.module').then( m => m.EmpresasPageModule)
  },
  {
    path: 'venta-pines',
    loadChildren: () => import('./venta-pines/venta-pines.module').then( m => m.VentaPinesPageModule)
  },
  {
    path: 'venta-recargas',
    loadChildren: () => import('./venta-recargas/venta-recargas.module').then( m => m.VentaRecargasPageModule)
  },
  {
    path: 'venta-certificados',
    loadChildren: () => import('./venta-certificados/venta-certificados.module').then( m => m.VentaCertificadosPageModule)
  },
  /*{
    path: 'venta-soat',
    loadChildren: () => import('./venta-soat/venta-soat.module').then( m => m.VentaSoatPageModule)
  },*/
  {
    path: 'venta-apuestas',
    loadChildren: () => import('./venta-apuestas/venta-apuestas.module').then( m => m.VentaApuestasPageModule)
  },
  {
    path: 'mi-distribuidor',
    loadChildren: () => import('./mi-distribuidor/mi-distribuidor.module').then( m => m.MiDistribuidorPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'venta-recaudo',
    loadChildren: () => import('./venta-recaudo/venta-recaudo.module').then( m => m.VentaRecaudoPageModule)
  },
  {
    path: 'cambio-red',
    loadChildren: () => import('./cambio-red/cambio-red.module').then( m => m.CambioRedPageModule)
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
