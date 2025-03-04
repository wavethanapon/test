import { Component } from '@angular/core';

@Component({
  selector: 'app-data-table',
  standalone: true,
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent {
  tableData = [
    { studentId: '60010001', fullName: 'สมชาย ใจดี', nickName: 'ชาย', generation: '60', email: 'somchai@example.com', phoneNumber: '0812345678', points: 10 },
    { studentId: '60010002', fullName: 'สมหญิง จริงใจ', nickName: 'หญิง', generation: '60', email: 'somying@example.com', phoneNumber: '0898765432', points: 15 },
    // เพิ่มข้อมูลเพิ่มเติมได้ตามต้องการ
  ];
}