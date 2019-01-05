import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { Router, ActivatedRoute } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  student: Student;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private studentService: StudentService) { }

  ngOnInit() {
    this.getStudentDetails();
  }

  getStudentDetails() {
    this.route.params.subscribe(
      params => this.studentService.getStudent(params['id']).subscribe(
        data => this.student = data
      )
    )
  }

  deleteStudent(studentToDelete: Student) {
    if (confirm("Voulez-vous vraiment supprimer cet étudiant")) {
      this.studentService.deleteStudent(studentToDelete).subscribe(() => {
        this.router.navigate(['students_list']);
      })
    }
  }
}
