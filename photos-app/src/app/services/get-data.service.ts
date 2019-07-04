import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {IImage} from './../../app/image';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  private _url: string = "./../../assets/imgData.json";

  constructor(private http: HttpClient) { }

  getCategories(): Observable<IImage[]>{
    return this.http.get<IImage[]>(this._url)
  }
  
}
