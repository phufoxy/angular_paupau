import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import { Router } from '@angular/router';

@Injectable()
export class FlickService {
  public token: string="";
  private headers = new Headers({'Content-Type':'application/json'});
  private options = new RequestOptions({headers:this.headers});
  constructor(private http: Http,private router:Router) {
  }
  getResult(mURL:string) {
    const url = mURL;
    return this.http
      .get(url)
      .map(res => res.json())
      .map(val => {
        if (val.stat === 'ok') {
          return val.photos.photo.map((photo: any) => {
            return {
              url: `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`,
              title: photo.title,id:photo.id,
            };
          });
        } else {
          return [];
        }
      }).catch(this.errorHandler);
  }
  errorHandler(error:Response){
    var answer = confirm("Vui Lòng Nhập Link Hình Ảnh ?")
    if (answer) {
        return Observable.throw(error||"SERVER ERROR");
    }
    else {
        //some code
        console.log("end");
    }
    
  }
}
