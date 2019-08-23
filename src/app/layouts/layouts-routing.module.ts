import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutsComponent } from './layouts.component';
import { SearchComponent } from './search/search.component';
import { CategoryComponent } from './category/category.component';
import { AboutComponent } from './about/about.component';
import { BusinessListComponent } from './business/business-list/business-list.component';
import { ContactComponent } from './contact/contact.component';
import { DetailsBusinessComponent } from './business/details-business/details-business.component';


const routes: Routes = [
  { path: '', component: LayoutsComponent, children: [
    { path: 'search', component: SearchComponent},
    { path: 'about', component: AboutComponent},
    { path: 'contact', component: ContactComponent},
    { path: 'category', component: CategoryComponent},
    { path: 'business-list', component: BusinessListComponent},
    { path: 'business/:id', component: DetailsBusinessComponent},

    { path: '', redirectTo: 'search', pathMatch: 'full'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutsRoutingModule { }
