import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import {HomeModule} from './home/home.module';
import {HomeComponent} from './home/home.component';
import {TrainerModule} from './trainer/trainer.module';
import {TrainerService} from './core/service/trainer.service'
import {FlickService} from './core/service/flick.service';
import { SettingComponent } from './setting/setting.component';
export const APP_MODULES: any[] = [
  BrowserModule,
  AppRoutingModule,
  SharedModule,
  HomeModule,
  RouterModule,
  HttpModule,
  FormsModule,
  HttpClientModule,
  TrainerModule
 
];
export const APP_COMPONENTS: any[] = [
  AppComponent,
  HomeComponent,
  
  
];
@NgModule({
  declarations: [...APP_COMPONENTS, SettingComponent],
  imports: [...APP_MODULES],
  providers: [TrainerService,FlickService],
  bootstrap: [AppComponent]
})
export class AppModule { }
