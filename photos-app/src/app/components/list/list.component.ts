import { Component, OnInit } from '@angular/core';
import { GetDataService } from './../../services/get-data.service'


@Component({
  selector: 'app-list',
  templateUrl:'./list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public images =[];
  public title = "";
  public source = "";
  public brief ="";
  public likes ="";
  public references ="";

  constructor(private _getDataService: GetDataService ) { }


  ngOnInit() {
    this._getDataService.getCategories()
    .subscribe(data => this.images=data);
  }

}
