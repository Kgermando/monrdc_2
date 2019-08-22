import { Component, OnInit, ViewChild } from '@angular/core';
import { BusinessService } from '../../services/data/business.service';
import { MatPaginator, MatSort, MatDialog } from '@angular/material';
import {Business, storedColumns as sc, displayedColumns as dc} from '../../services/business';
import { DataTableUniversidadesDataSource } from '../../services/data-table-universidades-datasource';

@Component({
  selector: 'app-business-list',
  templateUrl: './business-list.component.html',
  styleUrls: ['./business-list.component.scss']
})
export class BusinessListComponent implements OnInit {

  public businessList = [];
  public business = '';

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  private identificadores = [];
  dataSource: DataTableUniversidadesDataSource;
  data: Business[];

    // storedColumns contiene los nombres o id's del interface para traer los datos de cada objeto dinamicamente
  // displayedColumns contiene los nombres que van a ser mostrados en los headers de las columnas en la tabla
  displayedColumns = dc;
  storedColumns = sc;

  constructor(private dataService: BusinessService,
              public dialog: MatDialog) { }

  ngOnInit() {
  this.dataService.getAllbusiness().subscribe( businessList => {
    console.log('business-list', businessList);
    this.businessList = businessList;
    });
  this.dataSource = new DataTableUniversidadesDataSource(this.paginator, this.sort, this.dataService);
  }

}
