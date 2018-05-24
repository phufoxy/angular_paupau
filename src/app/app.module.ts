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
export const APP_MODULES: any[] = [
  BrowserModule,
  AppRoutingModule,
  SharedModule,
  HomeModule,
  RouterModule,
  HttpModule,
  FormsModule,
  HttpClientModule
];
export const APP_COMPONENTS: any[] = [
  AppComponent,
  HomeComponent,
  
];
@NgModule({
  declarations: [...APP_COMPONENTS],
  imports: [...APP_MODULES],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
