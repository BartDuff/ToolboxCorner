import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
  student: Student
  studentForm: FormGroup

  constructor(public studentService: StudentService,
    private formBuilder: FormBuilder,
    private route: Router) { }

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    
    this.studentForm = this.formBuilder.group({
      name: [, Validators.required],
      surname: [, Validators.required],
      birthday: [, Validators.required],
      birthplace: [, Validators.required],
      nationality: [, Validators.required],
      address: [, Validators.required],
      zipcode: [, Validators.required],
      city: [, Validators.required]
    })
  }
  addStudent() {
    const formValues = this.studentForm.value;
    this.student = new Student();
    this.student.Name = formValues.name;
    this.student.Surname = formValues.surname;
    this.student.Birthday = formValues.birthday;
    this.student.Birthplace = formValues.birthplace;
    this.student.Nationality = formValues.nationality;
    this.student.Address = formValues.address;
    this.student.ZipCode = formValues.zipcode;
    this.student.City = formValues.city;
    this.studentService.addStudent(this.student).subscribe(() => { 
      this.route.navigate(['students_list']) })
  }

}
