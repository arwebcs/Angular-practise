import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentServiceService } from 'src/app/shared/services/student-service.service';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {

  editStudentForm !: FormGroup;
  statusCode: number = 0;
  studentId: number = 0;
  studentPage: string = "Update student";
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
  studentList: any = [];
  languageArr: any = [];


  constructor(private activatedRoute: ActivatedRoute, private fb: FormBuilder, private studentService: StudentServiceService, private router: Router) {
    this.activatedRoute.params.subscribe((params) => {
      this.studentId = params['studentID'];

    });
    console.log(this.editStudentForm)
    this.studentService.listStudentById(this.studentId).subscribe(result => {
      this.statusCode = result.statusCode;

      if (this.statusCode == 200) {
        this.studentList = result.data;
        for (let studentData of this.studentList) {
          this.editStudentForm = new FormGroup({
            regName: new FormControl(studentData.full_name),
            courseName: new FormControl(studentData.course_name),
            gender: new FormControl(studentData.gender),
            languages: new FormControl(studentData.languages.split(", ")),
            email: new FormControl(studentData.email),
            hemail: new FormControl(studentData.email),
            mobile: new FormControl(studentData.mobile),
            hmobile: new FormControl(studentData.mobile),
            website: new FormControl(studentData.website),
            about: new FormControl(studentData.about)
          })
        }
      } else {
        console.log("Error listing data");
      }
    }
      // , (err: HttpErrorResponse) => {
      //   alert(HttpErrorResponse);
      // }
    );


    this.editStudentForm = this.fb.group({
      regName: "",
      courseName: "",
      gender: "",
      languages: "",
      email: "",
      hemail: "",
      mobile: "",
      hmobile: "",
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
    this.editStudentForm.patchValue({
      image: file
    });
  }

  updateStudent() {
    const datas = {
      RegName: this.editStudentForm.value.regName,
      CourseName: this.editStudentForm.value.courseName,
      Gender: this.editStudentForm.value.gender,
      Languages: this.editStudentForm.value.languages,
      Email: this.editStudentForm.value.email,
      HEmail: this.editStudentForm.value.hemail,
      Mobile: this.editStudentForm.value.mobile,
      HMobile: this.editStudentForm.value.hmobile,
      Website: this.editStudentForm.value.website,
      About: this.editStudentForm.value.about
    }

    var formData: any = new FormData();
    formData.append("requestData", JSON.stringify(datas));
    formData.append("profileImage", this.editStudentForm.value.image);

    this.studentService.updateStudent(this.studentId, formData).subscribe(result => {
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
        this.router.navigate(['/student/edit/', this.studentId]);
      } else {
        if (this.statusCode == 422) {
          this.errorMessage = result.message;
          this.router.navigate(['/student/edit/', this.studentId]);
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
          this.router.navigate(['/student/edit/', this.studentId]);
        }
      }
    }
      // , (err: HttpErrorResponse) => {
      //   alert(HttpErrorResponse);
      // }
    );
  }

}
