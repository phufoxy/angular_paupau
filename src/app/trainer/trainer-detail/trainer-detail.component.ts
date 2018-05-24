import { Component, OnInit } from '@angular/core';
import {Trainer} from '../../core/model/trainer';
import{Router} from '@angular/router';
import {TrainerService} from '../../core/service/trainer.service';
@Component({
  selector: 'app-trainer-detail',
  templateUrl: './trainer-detail.component.html',
  styleUrls: ['./trainer-detail.component.css']
})
export class TrainerDetailComponent implements OnInit {
  private  trainer:Trainer[];
  constructor(private  trainerService:TrainerService,private _router:Router) { }

  ngOnInit() {
    this.init();
  }
  init(){
    this.trainerService.getTrainer().subscribe((data)=>{
      this.trainer=data;
      console.log(this.trainer);
    },(error)=>{
      console.log(error);
    })
  }

}
