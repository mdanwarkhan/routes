import { Component, OnInit } from '@angular/core';
import { Sort } from '../util/sort';
import { Student } from './models/student.model';
import { StudentService } from './services/students-table.service';

@Component({
  selector: 'app-students-table',
  templateUrl: './students-table.component.html',
  styleUrls: ['./students-table.component.css']
})
export class StudentsTableComponent implements OnInit {

  students: Student[];
  clonedStudents: Student[];
  headers: string[];
  sortStatus = 'asc';
  constructor(private studentsService: StudentService) { }

  ngOnInit(): void {
    this.studentsService.getStudents().subscribe((res) => {
      this.headers = this.getHeaders(res[0])
      this.students = res;
      this.clonedStudents = this.students;
    }, error => console.log('error', error))
  }

  getHeaders(obj: any) {
    let headers = [];
    for (let prop in obj) {
      let val = obj[prop]
      if (Array.isArray(val)) {
        for (let v of val) {
          headers.push(v.name)
        }
      } else {
        headers.push(prop)
      }
    }
    return headers;
  }

  sortBy(headerNm: string) {
    const sort = new Sort();
    if (this.sortStatus == 'asc') {
      this.students.sort(sort.startSort(headerNm, 'asc'));
      this.sortStatus = 'desc'
    } else if (this.sortStatus == 'desc') {
      this.students.sort(sort.startSort(headerNm, 'desc'));
      this.sortStatus = 'reset'
    } else if (this.sortStatus == 'reset') {
      this.students = []
      this.students = [...this.clonedStudents]
      this.sortStatus = 'asc'
    }
  }
}
