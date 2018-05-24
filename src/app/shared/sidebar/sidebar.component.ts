import { Component, OnInit } from '@angular/core';
import{Router}  from '@angular/router';
declare const $: any;
    declare interface RouteInfo {
        path: string;
        title: string;
        icon: string;
        class: string;
    }
    export const ROUTES: RouteInfo[] = [
        { path: 'dashboard', title: 'Tổng Quan',  icon:'content_paste', class: '' },
        { path: 'trainer', title: 'Biểu Mẫu Giáo Viên',  icon:'person', class: '' },
        { path: 'trainer-detail', title: 'Giáo Viên',  icon:'class', class: '' },
        { path: 'setting', title: 'Cài Đặt',  icon:'perm_data_setting', class: '' },
    ];
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  menuItems: any[];

  constructor(private router:Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };

}
