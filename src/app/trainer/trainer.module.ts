import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import { TrainerComponent } from './trainer/trainer.component';
import { TrainerDetailComponent } from './trainer-detail/trainer-detail.component';
export const SHARED_MODULE: any[] = [
  CommonModule,
  RouterModule,
  SharedModule
];
export const SHARED_COMPONENTS: any[] = [
  TrainerComponent,
  TrainerDetailComponent
];
@NgModule({
  imports: [...SHARED_MODULE],
  exports: [...SHARED_COMPONENTS],
  declarations: [...SHARED_COMPONENTS]
})
export class TrainerModule { }
