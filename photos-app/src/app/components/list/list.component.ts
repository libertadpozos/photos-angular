import { Component, OnInit } from '@angular/core';
import { GetDataService } from './../../services/get-data.service'
import { SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS } from 'constants';


@Component({
  selector: 'app-list',
  templateUrl:'./list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public images =[];
  public title= "título"

  constructor(private _getDataService: GetDataService ) { }


  ngOnInit() {
    this._getDataService.getCategories()
    .subscribe(data => this.images=data);
  }

}
