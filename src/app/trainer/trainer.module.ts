import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import { TrainerComponent } from './trainer/trainer.component';
import { TrainerDetailComponent } from './trainer-detail/trainer-detail.component';
import { TrainerPipe } from '../core/filter/trainer.pipe'
export const SHARED_MODULE: any[] = [
  CommonModule,
  RouterModule,
  SharedModule,
  FormsModule
];
export const SHARED_COMPONENTS: any[] = [
  TrainerComponent,
  TrainerDetailComponent,
  TrainerPipe
];
@NgModule({
  imports: [...SHARED_MODULE],
  exports: [...SHARED_COMPONENTS],
  declarations: [...SHARED_COMPONENTS]
})
export class TrainerModule { }
