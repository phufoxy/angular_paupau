import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { CardComponent } from './card/card.component';
export const SHARED_MODULE: any[] = [
  CommonModule,
  RouterModule
];
export const SHARED_COMPONENTS: any[] = [
  TableComponent,
  CardComponent
];
@NgModule({
  imports: [...SHARED_MODULE],
  exports: [...SHARED_COMPONENTS],
  declarations: [...SHARED_COMPONENTS]
})
export class HomeModule { }
