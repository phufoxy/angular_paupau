import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {HttpClient} from '@angular/common/http';
import {Observable}   from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {Trainer} from '../model/trainer';


@Injectable()
export class TrainerService {

  private baseUrl:string='http://localhost:8080/api';
  private headers = new Headers({'Content-Type':'application/json'});
  private options = new RequestOptions({headers:this.headers});
  private trainer = new Trainer();
  public token: string;
  constructor(private _http: Http) {
    this.token=localStorage.getItem("token");
  }
  // getdata
  getTrainer(){
    let headers = new Headers({ 'Authorization': 'Bearer ' +  'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ2YW5uZ2EiLCJleHAiOjE1Mjc2OTMwOTgsImlhdCI6MTUyNzA4ODI5OH0.gij2xLemOlsn_yQeX4cW0kfLZjFcOpwh_o4qF8fcSvM-yRBxGdixGP13LCSDCOLDiSbiABr178OOmeDg8vJIOA' });
    let options = new RequestOptions({ headers: headers });
    // get users from api
    return this._http.get('http://localhost:8080/api/trainer/all',options).map((response:Response)=>response.json());
  }
  
  // set data
  setter(trainer:Trainer){
    this.trainer=trainer;
  }
  private extractData(res: Response) {        
    return res.text() ? res.json() : {}; ;
  }
  // get data
  getter(){
    return this.trainer;
  }
  // Error
  errorHandler(error:Response){
    return Observable.throw(error||"SERVER ERROR");
  }

}
