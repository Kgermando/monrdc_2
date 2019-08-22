import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

import { BusinessService } from '../../services/data/business.service';

@Component({
  selector: 'app-add-business',
  templateUrl: './add-business.component.html',
  styleUrls: ['./add-business.component.scss']
})
export class AddBusinessComponent implements OnInit {


  constructor(
    private auth: AuthService,
    private businessService: BusinessService
  ) {}

  ngOnInit() {}


}
