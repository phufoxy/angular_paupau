import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Trainer} from '../../core/model/trainer';
import { Router } from '@angular/router';
import {TrainerService} from '../../core/service/trainer.service';
import {FlickService} from '../../core/service/flick.service';
@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.css']
})
export class TrainerComponent implements OnInit {
  private trainer:Trainer;
  photos: Object;
  url: String;
  nameImage:String="hinh anh";
  constructor(
    private flickService:FlickService,
    private router: Router,
    private trainerService: TrainerService) { }

  ngOnInit() {
    this.trainer=this.trainerService.getter();
    this.getFlicker();
  }
  
  processForm(){
    this.trainer.image=this.url;
    if(this.trainer.idTrainer==undefined ){
      this.trainerService.createTrainer(this.trainer).subscribe((trainer)=>{
        this.router.navigate(['/trainer-detail']);
        this.clear();
      },(error)=>{
        console.log(error);
      });
    }else{
      this.trainerService.updateTrainer(this.trainer).subscribe((trainer)=>{
        this.router.navigate(['/trainer-detail']);
        this.clear();
      },(error)=>{
        console.log(error);
      });
     }
     
  }
  getURL(text:string){
    this.url=text;
  }
  getFlicker(){
    this.flickService.getResult(localStorage.getItem("image"))
      .subscribe(value => {
        this.photos = value;
      });
  }
 // clear input
 clear(){
  this.trainer.idTrainer=null;
  this.trainer.lastName = '';
  this.trainer.firstName = '';
  this.trainer.birthday = '';
  this.trainer.phone = '';
  this.trainer.address = '';
  this.trainer.image = '';
  this.trainer.joined = '';
  this.trainer.status = '';
  this.trainer.description='';
}
}
