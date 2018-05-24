import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {TrainerComponent} from './trainer/trainer/trainer.component';
import {TrainerDetailComponent} from './trainer/trainer-detail/trainer-detail.component';
import { SettingComponent } from './setting/setting.component'

const routes: Routes =[
    { path: 'dashboard',component: HomeComponent},
    { path: 'trainer',component: TrainerComponent},
    { path: 'setting',component: SettingComponent},
    { path: 'trainer-detail',component: TrainerDetailComponent},
    { path: '',redirectTo: 'dashboard', pathMatch: 'full' }
];
@NgModule({
    imports: [
      CommonModule,
      BrowserModule,
      RouterModule.forRoot(routes)
    ],
    exports: [
    ],
  })
  export class AppRoutingModule { }
  