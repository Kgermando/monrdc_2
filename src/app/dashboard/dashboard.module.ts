import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { MaterialModule } from '../material/material.module';
import { DashboardComponent } from './dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { StatsComponent } from './stats/stats.component';


@NgModule({
  declarations: [DashboardComponent, ProfileComponent, StatsComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,

  ]
})
export class DashboardModule { }
