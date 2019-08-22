import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { StatsComponent } from './stats/stats.component';


const routes: Routes = [
  { path: '', component: DashboardComponent,
    children: [
      { path: 'profile', component: ProfileComponent},
      { path: 'stats', component: StatsComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
