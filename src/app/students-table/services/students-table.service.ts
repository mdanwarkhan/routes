import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../models/student.model';
import { environment } from 'src/environments/environment';

@Injectable({
 providedIn: 'root'
})
export class StudentService {
 private apiUrl = environment.API_URL_STUDENTS;

 constructor(private http: HttpClient) { }

 getStudents(): Observable<Student[]> {
   return this.http.get<Student[]>(this.apiUrl)
 }
}