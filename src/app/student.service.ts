import { Injectable } from '@angular/core';
import { Student } from './student';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private students: Student[];
  private apiUrl: string = '/api/students';
  constructor(private http: HttpClient) { }

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.apiUrl}`);
  }
  
  addStudent(newStudent: Student): Observable<any> {
    return this.http.post(`${this.apiUrl}`, newStudent);
    //this.vols.push(nouveauVol);
  }
  
  getStudent(idRecherche: string): Observable<Student> {
    return this.http.get<Student>(`${this.apiUrl}/${idRecherche}`);
  
  }
  
  deleteStudent(student: Student): Observable<any> {
    const idASupprimer = student._id;
    return this.http.delete(`${this.apiUrl}/${idASupprimer}`);
    
  }
}

