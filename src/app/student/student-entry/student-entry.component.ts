import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentServiceService } from 'src/app/shared/services/student-service.service';

@Component({
  selector: 'app-student-entry',
  templateUrl: './student-entry.component.html',
  styleUrls: ['./student-entry.component.css']
})
export class StudentEntryComponent implements OnInit {

  entryStudentForm !: FormGroup;
  statusCode: number = 0;
  studentPage: string = "Add student";
  successMessage: string = "";
  errorMessage: string = "";
  nameErr: string = "";
  courseNameErr: string = "";
  emailErr: string = "";
  websiteErr: string = "";
  mobileErr: string = "";
  genderErr: string = "";
  aboutErr: string = "";
  profileImageErr: string = "";

  constructor(private fb: FormBuilder, private studentService: StudentServiceService, private router: Router) {
    this.entryStudentForm = this.fb.group({
      regName: "",
      courseName: "",
      gender: "",
      languages: "",
      email: "",
      mobile: "",
      website: "",
      about: "",
      image: [null]
    });
  }

  ngOnInit(): void {
  }


  genderList = [
    { "id": "Male", "genderDesc": "Male" },
    { "id": "Female", "genderDesc": "Female" }
  ];
  languageList = [
    { "id": "Bengali", "langDesc": "Bengali" },
    { "id": "English", "langDesc": "English" },
    { "id": "Hindi", "langDesc": "Hindi" }
  ];

  uploadFile(event: any) {
    const file = event.target.files ? event.target.files[0] : "";
    //console.log(file);
    this.entryStudentForm.patchValue({
      image: file
    });
  }

  registerStudent() {
    const datas = {
      RegName: this.entryStudentForm.value.regName,
      CourseName: this.entryStudentForm.value.courseName,
      Gender: this.entryStudentForm.value.gender,
      Languages: this.entryStudentForm.value.languages,
      Email: this.entryStudentForm.value.email,
      Mobile: this.entryStudentForm.value.mobile,
      Website: this.entryStudentForm.value.website,
      About: this.entryStudentForm.value.about
    }

    var formData: any = new FormData();
    formData.append("requestData", JSON.stringify(datas));
    formData.append("profileImage", this.entryStudentForm.value.image);

    this.studentService.addStudent(formData).subscribe(result => {
      console.log(result);
      this.statusCode = result.statusCode;
      if (this.statusCode == 201) {
        this.errorMessage = "";
        this.nameErr = "";
        this.courseNameErr = "";
        this.emailErr = "";
        this.websiteErr = "";
        this.mobileErr = "";
        this.genderErr = "";
        this.aboutErr = "";
        this.profileImageErr = "";
        this.successMessage = result.success;
        this.entryStudentForm.reset();
        this.entryStudentForm.value.image = "";
        this.router.navigate(['/student/entry']);
      } else {
        if (this.statusCode == 422) {
          this.errorMessage = result.message;
          this.router.navigate(['/student/entry']);
        } else {
          this.successMessage = "";
          this.errorMessage = result.errors.Message;
          this.nameErr = result.errors.RegName;
          this.courseNameErr = result.errors.CourseName;
          this.emailErr = result.errors.Email;
          this.websiteErr = result.errors.Website;
          this.mobileErr = result.errors.Mobile;
          this.genderErr = result.errors.Gender;
          this.aboutErr = result.errors.About;
          this.profileImageErr = result.errors.ProfilePic;
          this.router.navigate(['/student/entry']);
        }
      }
    }
      // , (err: HttpErrorResponse) => {
      //   alert(HttpErrorResponse);
      // }
    );
  }

}
