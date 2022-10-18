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

  nameErr: string = ''
  emailErr: string = ''
  ageErr: string = ''

  ngOnInit(): void {
    this.myForm = new FormGroup({
      sname: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      email: new FormControl('', [Validators.email, Validators.required]),
      age: new FormControl('', [Validators.required, Validators.max(100)]),
    })
  }
  onPopulate() {
    this.myForm = new FormGroup({
      sname: new FormControl('Soumyanjan'),
      email: new FormControl('arghya992@gmail.com'),
      age: new FormControl(76),
    })
  }
  onReset() {
    this.myForm.reset()
  }
  onSubmit() {
    console.log(this.myForm)
    if (this.myForm.controls['sname'].errors) {
      if (this.myForm.controls['sname'].errors['required']) {
        this.nameErr = 'Please enter name'
      } else {
        this.nameErr =
          'Please enter at least ' +
          this.myForm.controls['sname'].errors['minlength'].requiredLength +
          ' characters'
      }
    } else {
      this.nameErr = ''
    }
    if (this.myForm.controls['email'].errors) {
      if (this.myForm.controls['email'].errors['required']) {
        this.emailErr = 'Please enter email'
      } else {
        this.emailErr = 'Invalid email'
      }
    } else {
      this.emailErr = ''
    }
    if (this.myForm.controls['age'].errors) {
      if (this.myForm.controls['age'].errors['required']) {
        this.ageErr = 'Please enter age'
      } else {
        this.ageErr =
          'Age cannot exceed ' +
          this.myForm.controls['age'].errors['max'].max +
          ' years'
      }
    } else {
      this.ageErr = ''
    }
  }
}
