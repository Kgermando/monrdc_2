import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BusinessService } from '../../services/data/business.service';
import { BusinessData } from '../../services/businessData';

@Component({
  selector: 'app-details-business',
  templateUrl: './details-business.component.html',
  styleUrls: ['./details-business.component.scss']
})
export class DetailsBusinessComponent implements OnInit {

  public business: BusinessData = {};

  constructor(private dataServices: BusinessService, private route: ActivatedRoute) { }

  ngOnInit() {
    // tslint:disable-next-line: no-string-literal
    const idBussiness = this.route.snapshot.params['id'];
    this.getDetails(idBussiness);
  }

  getDetails(idBussiness: string): void {
    this.dataServices.getOneBusiness(idBussiness).subscribe(business => {
      this.business = business;
    });
  }
}
