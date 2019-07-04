import { Component, OnInit } from '@angular/core';
import { GetDataService } from './../../services/get-data.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  

  public images =[]

  constructor(private _getDataService: GetDataService ) { }
 
  ngOnInit() {
    this._getDataService.getCategories()
    .subscribe(data => this.images=data);
  }

}
