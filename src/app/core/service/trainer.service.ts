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
  let headers = new Headers({ 'Authorization': 'Bearer ' + this.token });
  let options = new RequestOptions({ headers: headers });
  // get users from api
  return this._http.get('http://localhost:8080/api/trainer/all',options).map((response:Response)=>response.json());
}
 
// getdata
getCount(){
  let headers = new Headers({ 'Authorization': 'Bearer ' +  this.token });
  let options = new RequestOptions({ headers: headers });
  // get users from api
  return this._http.get('http://localhost:8080/api/trainer/count',options).map((response:Response)=>response.json());
}
// Add data
createTrainer(trainer:Trainer){
  let headers = new Headers({ 'Authorization': 'Bearer ' +  this.token });
  headers.append("Content-Type","application/json");
  let options = new RequestOptions({ headers: headers });
  // create
  return this._http.post('http://localhost:8080/api/trainer/new',JSON.stringify(trainer), options).map(this.extractData).catch(this.errorHandler);
   
} 

// update data
updateTrainer(trainer:Trainer){
  let headers = new Headers({ 'Authorization': 'Bearer ' +  this.token });
  headers.append("Content-Type","application/json");
  let options = new RequestOptions({ headers: headers });

  return this._http.put('http://localhost:8080/api/trainer/update',JSON.stringify(trainer), options).map(this.extractData).catch(this.errorHandler);
}
// delete data
deleteTrainer(id:Number){
  let headers = new Headers({ 'Authorization': 'Bearer ' +  this.token });
  let options = new RequestOptions({ headers: headers });
  // delete trainer
  return this._http.delete('http://localhost:8080/api/trainer/delete/'+id,options).map(this.extractData).catch(this.errorHandler);
}
// getid
getIdTrainer(id:Number){
  let headers = new Headers({ 'Authorization': 'Bearer ' +  this.token });
  let options = new RequestOptions({ headers: headers });
  // delete trainer
  return this._http.get('http://localhost:8080/api/trainer/profile/'+id,options).map(this.extractData).catch(this.errorHandler);
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
