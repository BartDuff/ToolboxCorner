import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students: Observable<Student[]>;
  constructor(private studentService: StudentService) { }

  ngOnInit() {
    this.refreshStudents();
  }
  refreshStudents() {
    this.students = this.studentService.getStudents();
  }

  deleteStudent(studentToDelete: Student) {
    if(confirm("Voulez-vous vraiment supprimer cet étudiant?")){
      this.studentService.deleteStudent(studentToDelete).subscribe(
        () => this.refreshStudents()
      )
    }
  }
}
