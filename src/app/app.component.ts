import { Component } from '@angular/core';
import { DataTableComponent } from './data-table/data-table.component';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  standalone: true, // สำคัญ: ต้องมี standalone: true
  imports: [DataTableComponent,RouterOutlet,LoginComponent], // เพิ่ม DataTableComponent ใน imports
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { }