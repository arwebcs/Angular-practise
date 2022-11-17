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
  pdfIDCard: string = "";
  certificate: string = "";

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

  /*************************************** PDF EXPORT FROM BASE64 ***************************************/
  idDownload(event: Event) {
    this.pdfIDCard = (<HTMLInputElement>event.target).value;
    this.downloadPdf(this.pdfIDCard, "sample");
  }

  downloadPdf(base64String: string, fileName: string) {
    const source = `data:application/pdf;base64,${base64String}`;
    const link = document.createElement("a");
    link.href = source;
    link.download = `${fileName}.pdf`
    link.click();
  }
  /*************************************** PDF EXPORT BASE64 ***************************************/

  /*************************************** IMAGE EXPORT BASE64 ***************************************/
  downloadImage(base64String: string, imageType: string, fileName: string) {
    const source = `data:${imageType};base64,${base64String}`;
    const link = document.createElement("a");
    link.href = source;
    link.download = `${fileName}.jpg`
    link.click();
  }

  certificateDownload(event: Event, imageType: string) {
    this.certificate = (<HTMLInputElement>event.target).value;
    this.downloadImage(this.certificate, imageType, "sample");
  }
  /*************************************** IMAGE EXPORT BASE64 ***************************************/
}
