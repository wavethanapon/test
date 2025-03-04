import { Component } from '@angular/core';
import { DataTableComponent } from './data-table/data-table.component';

@Component({
  selector: 'app-root',
  standalone: true, // สำคัญ: ต้องมี standalone: true
  imports: [DataTableComponent], // เพิ่ม DataTableComponent ใน imports
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { }