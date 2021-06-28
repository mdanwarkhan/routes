import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../models/student.model';

@Injectable({
 providedIn: 'root'
})
export class StudentService {
 private apiUrl = '/assets/data/students.json';

 constructor(private http: HttpClient) { }

 getStudents(): Observable<Student[]> {
   return this.http.get<Student[]>(this.apiUrl)
 }
}