import { Component, OnInit } from '@angular/core';
import { BusinessService } from '../services/data/business.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  public businessList = [];
  public business = '';


  constructor(private data: BusinessService) { }

  ngOnInit() {
  this.data.getAllbusiness().subscribe( businessList => {
    console.log('business-list', businessList);
    this.businessList = businessList;
    });
  }

}
