import { AuthenticationGuard } from './shared/guards/authentication.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'core', loadChildren: () => import('./core/core.module').then(m => m.CoreModule),canActivate: [AuthenticationGuard]},

  { path: 'shared', loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule),canActivate: [AuthenticationGuard]},

  { path: 'authentication', loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule),canActivate: [AuthenticationGuard]},

  { path: 'modules', loadChildren: () => import('./modules/modules.module').then(m => m.ModulesModule),canActivate: [AuthenticationGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
