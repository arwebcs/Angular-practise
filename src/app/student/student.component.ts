import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentServiceService } from '../shared/services/student-service.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  isData: boolean = false;
  statusCode: number = 0;
  studentList: any = [];
  errorMessage: string = "";

  constructor(private studentService: StudentServiceService, private router: Router) { }

  ngOnInit(): void {
    this.initTable();
  }

  initTable() {
    this.studentService.listStudent().subscribe(result => {
      this.statusCode = result.statusCode;
      if (this.statusCode == 200) {
        this.isData = true;
        this.studentList = result.data;
      } else {
        this.errorMessage = "No records found";
      }
    }
      // , (err: HttpErrorResponse) => {
      //   alert(HttpErrorResponse);
      // }
    );
  }
  deleteStudent(studentId: number) {
    this.studentService.deleteStudent(studentId).subscribe(result => {
      this.statusCode = result.statusCode;
      if (this.statusCode == 200) {
        this.initTable();
        this.router.navigate(['/student']);
      } else {
        this.router.navigate(['/student']);
      }
    }
      // , (err: HttpErrorResponse) => {
      //   alert(HttpErrorResponse);
      // }
    );
  }
}
