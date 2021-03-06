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
  sortOrder = 'asc';
  error = null;
  constructor(private studentsService: StudentService) { }

  ngOnInit(): void {
    this.studentsService.getStudents().subscribe((res) => {
      this.headers = Object.keys(res[0])
      this.students = res;
      this.clonedStudents = this.students.slice();
    }, error => this.error = error)
  }

  sortTo(headerNm: string) {
    const sort = new Sort();
    if (this.sortOrder == 'asc') {
      this.students.sort(sort.startSort(headerNm, 'asc'));
      this.sortOrder = 'desc'
    } else if (this.sortOrder == 'desc') {
      this.students.sort(sort.startSort(headerNm, 'desc'));
      this.sortOrder = 'reset'
    } else if (this.sortOrder == 'reset') {
      this.students = []
      this.students = [...this.clonedStudents]
      this.sortOrder = 'asc'
    }
  }
}
