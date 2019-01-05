import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PuzzleComponent } from './puzzle/puzzle.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { StudentListComponent } from './student-list/student-list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { MyShoppingCartComponent } from './my-shopping-cart/my-shopping-cart.component';

const routes: Routes = [
  { path: 'puzzle', component: PuzzleComponent },
  { path: 'calculator', component: CalculatorComponent },
  { path: 'cart', component: MyShoppingCartComponent },
  { path: 'add_student', component: StudentFormComponent },
  { path: 'edit_student/:id', component: EditStudentComponent },
  { path: 'students_list', component: StudentListComponent },
  { path: 'students_list/:id', component: StudentDetailsComponent },
  { path: 'calculator', component: CalculatorComponent },
  { path: '', redirectTo: 'students_list', pathMatch: 'full'},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
