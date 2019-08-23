import { Component, OnInit, ViewChild } from '@angular/core';
import { BusinessService } from '../../services/data/business.service';
import { BusinessData } from '../../services/businessData';

@Component({
  selector: 'app-business-list',
  templateUrl: './business-list.component.html',
  styleUrls: ['./business-list.component.scss']
})
export class BusinessListComponent implements OnInit {

  private businessList: BusinessData[];

  constructor(private dataService: BusinessService) { }

  ngOnInit() {
    this.getListBusiness();
    }

    getListBusiness() {
      this.dataService.getAllbusiness().subscribe(business => {
      this.businessList = business;
      });
    }

    onDeleteBusiness(idBusiness: string) {
      const confirmacion = confirm('Êtes-vous sûr de supprimer ce Business?');
      if (confirmacion) {
        this.dataService.deleteBusiness(idBusiness);
      }
    }

    onPreUpdateBusiness(business: BusinessData) {
        this.dataService.selectedBusiness = Object.assign({}, business);
      // charger avec selectebusiness à utiliser dans le formulaire
    }

}
