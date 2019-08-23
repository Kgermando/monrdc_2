import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutsRoutingModule } from './layouts-routing.module';
import { LayoutsComponent } from './layouts.component';
import { SearchComponent } from './search/search.component';
import { MaterialModule } from '../material/material.module';
import { AboutComponent } from './about/about.component';
import { CategoryComponent } from './category/category.component';
import { BusinessListComponent } from './business/business-list/business-list.component';
import { AddBusinessComponent } from './business/add-business/add-business.component';
import { EditBusinessComponent } from './business/edit-business/edit-business.component';
import { ContactComponent } from './contact/contact.component';
import { DetailsBusinessComponent } from './business/details-business/details-business.component';


@NgModule({
  declarations: [LayoutsComponent, SearchComponent, AboutComponent, CategoryComponent, BusinessListComponent, AddBusinessComponent, EditBusinessComponent, ContactComponent, DetailsBusinessComponent],
  imports: [
    CommonModule,
    LayoutsRoutingModule,
    MaterialModule,
  ]
})
export class LayoutsModule { }
