import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PuzzleComponent } from './puzzle/puzzle.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { environment } from '../environments/environment';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentService } from './student.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CalculatorService } from './calculator.service';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { MyShoppingCartComponent } from './my-shopping-cart/my-shopping-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    PuzzleComponent,
    StudentFormComponent,
    StudentListComponent,
    NotFoundComponent,
    StudentDetailsComponent,
    CalculatorComponent,
    EditStudentComponent,
    MyShoppingCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ StudentService, CalculatorService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
