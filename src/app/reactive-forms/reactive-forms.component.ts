import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css'],
})
export class ReactiveFormsComponent implements OnInit {
  constructor() {}

  myForm: FormGroup | any
  academic: FormGroup | any
  nameErr: string = ''
  emailErr: string = ''
  ageErr: string = ''
  genderErr: string = ''
  classErr: string = ''
  secErr: string = ''

  ngOnInit(): void {
    this.myForm = new FormGroup({
      sname: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      email: new FormControl('', [Validators.email, Validators.required]),
      age: new FormControl('', [Validators.required, Validators.max(100)]),
      gender: new FormControl('', [Validators.required]),
      academic: new FormGroup({
        class: new FormControl('', [Validators.required]),
        sec: new FormControl('', [Validators.required]),
      }),
    })
  }
  onPopulate() {
    this.myForm = new FormGroup({
      sname: new FormControl('Soumyanjan'),
      email: new FormControl('arghya992@gmail.com'),
      age: new FormControl(76),
      gender: new FormControl('Male'),
      academic: new FormGroup({
        class: new FormControl('Engg'),
        sec: new FormControl('CSE'),
      }),
    })
  }
  onReset() {
    this.myForm.reset()
  }
  onSubmit() {
    console.log(this.myForm)
    if (this.myForm.get('sname').errors) {
      if (this.myForm.get('sname').errors['required']) {
        this.nameErr = 'Please enter name'
      } else {
        this.nameErr =
          'Please enter at least ' +
          this.myForm.get('sname').errors['minlength'].requiredLength +
          ' characters'
      }
    } else {
      this.nameErr = ''
    }
    if (this.myForm.get('email').errors) {
      if (this.myForm.get('email').errors['required']) {
        this.emailErr = 'Please enter email'
      } else {
        this.emailErr = 'Invalid email'
      }
    } else {
      this.emailErr = ''
    }
    if (this.myForm.get('age').errors) {
      if (this.myForm.get('age').errors['required']) {
        this.ageErr = 'Please enter age'
      } else {
        this.ageErr =
          'Age cannot exceed ' +
          this.myForm.get('age').errors['max'].max +
          ' years'
      }
    } else {
      this.ageErr = ''
    }
    if (this.myForm.get('gender').errors) {
      if (this.myForm.get('gender').errors['required']) {
        this.genderErr = 'Please select gender'
      }
    } else {
      this.genderErr = ''
    }

    if (this.myForm.controls['academic'].controls['class'].errors) {
      if (
        this.myForm.controls['academic'].controls['class'].errors['required']
      ) {
        this.classErr = 'Please select class'
      }
    } else {
      this.classErr = ''
    }
    if (this.myForm.controls['academic'].controls['sec'].errors) {
      if (this.myForm.controls['academic'].controls['sec'].errors['required']) {
        this.secErr = 'Please select section'
      }
    } else {
      this.secErr = ''
    }
  }
}
