import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';

export const SHARED_MODULE: any[] = [
  CommonModule,
  RouterModule
];

export const SHARED_COMPONENTS: any[] = [
  SidebarComponent,
  FooterComponent,
  NavbarComponent,
];
@NgModule({
  imports: [...SHARED_MODULE],
  exports: [...SHARED_COMPONENTS],
  declarations: [...SHARED_COMPONENTS]
})
export class SharedModule { }
