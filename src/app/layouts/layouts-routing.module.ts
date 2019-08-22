import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutsComponent } from './layouts.component';
import { SearchComponent } from './search/search.component';
import { CategoryComponent } from './category/category.component';
import { AboutComponent } from './about/about.component';
import { BusinessListComponent } from './business/business-list/business-list.component';


const routes: Routes = [
  { path: '', component: LayoutsComponent, children: [
    { path: 'search', component: SearchComponent},
    { path: 'about', component: AboutComponent},
    { path: 'category', component: CategoryComponent},
    { path: 'business-list', component: BusinessListComponent},

    { path: '', redirectTo: 'search', pathMatch: 'full'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutsRoutingModule { }
