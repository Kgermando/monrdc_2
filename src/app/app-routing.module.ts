import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './auth/services/auth.guard';


const routes: Routes = [
  { path: 'layouts', loadChildren: () => import('../app/layouts/layouts.module').then(m => m.LayoutsModule)},
  { path: 'auth', loadChildren: () => import('../app/auth/auth.module').then(m => m.AuthModule)},
  { path: 'dashboard', loadChildren: () => import ('../app/dashboard/dashboard.module')
    .then(m => m.DashboardModule), canActivate: [AuthGuard]},

  { path: 'not-found', component: NotFoundComponent},
  { path: '', redirectTo: 'layouts', pathMatch: 'full'},
  { path: '**', redirectTo: 'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
