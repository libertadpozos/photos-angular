import { Component, OnInit } from '@angular/core';
import { GetDataService } from './../../services/get-data.service';
import { Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public images =[]
 
  @Input() title: string;
  @Input() source: string; 
  @Input() brief: string; 
  @Input() likes: number; 
  @Input() references: number; 

  constructor(private _getDataService: GetDataService ) { }
 
  ngOnInit() {
    this._getDataService.getCategories()
    .subscribe(data => this.images=data);
  }
  showMoreInfo(){
    
  }

}
