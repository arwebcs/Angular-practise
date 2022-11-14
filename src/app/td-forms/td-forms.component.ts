import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-td-forms',
  templateUrl: './td-forms.component.html',
  styleUrls: ['./td-forms.component.css']
})
export class TdFormsComponent implements OnInit {

  @ViewChild('frm') myForm: NgForm | undefined
  constructor() { }

  nameErr: string = ''
  emailErr: string = ''
  ageErr: string = ''
  classErr: string = ''
  secErr: string = ''

  ngOnInit(): void { }
  onPopulate() {
    this.myForm?.form.patchValue({
      nm: 'Arghya',
      ag: 12,
      em: 'a@gmail.com',
      academic: {
        class: 'IX',
        sec: 'A',
      },
    })
  }
  onReset() {
    this.myForm?.reset()
  }
  // onSubmit() {
  //   console.log(this.myForm);
  //   if (this.myForm?.controls['nm'].errors) {
  //     if (this.myForm?.controls['nm'].errors['required']) {
  //       this.nameErr = 'Please enter name'
  //     } else {
  //       this.nameErr =
  //         'Please enter at least ' +
  //         this.myForm?.controls['nm'].errors['minlength'].requiredLength +
  //         ' characters'
  //     }
  //   } else {
  //     this.nameErr = ''
  //   }
  //   if (this.myForm?.controls['em'].errors) {
  //     if (this.myForm?.controls['em'].errors['required']) {
  //       this.emailErr = 'Please enter email'
  //     }
  //   } else {
  //     this.emailErr = ''
  //   }
  //   if (this.myForm?.controls['ag'].errors) {
  //     if (this.myForm?.controls['ag'].errors['required']) {
  //       this.ageErr = 'Please enter age'
  //     } else {
  //       this.ageErr =
  //         'Age cannot exceed ' + this.myForm?.controls['ag'].errors['max'].max + ' years'
  //     }
  //   } else {
  //     this.ageErr = ''
  //   }
  //   if (!this.myForm?.controls['academic'].value.class) {
  //     this.classErr = 'Please enter class';
  //   } else {
  //     this.classErr = ''
  //   }
  //   if (!this.myForm?.controls['academic'].value.sec) {
  //     this.secErr = 'Please enter section';
  //   } else {
  //     this.secErr = ''
  //   }
  // }

  onSubmit(frm: NgForm) {
    console.log(frm)
    if (frm.controls['nm'].errors) {
      if (frm.controls['nm'].errors['required']) {
        this.nameErr = 'Please enter name'
      } else {
        this.nameErr =
          'Please enter at least ' +
          frm.controls['nm'].errors['minlength'].requiredLength +
          ' characters'
      }
    } else {
      this.nameErr = ''
    }
    if (frm.controls['em'].errors) {
      if (frm.controls['em'].errors['required']) {
        this.emailErr = 'Please enter email'
      }
    } else {
      this.emailErr = ''
    }
    if (frm.controls['ag'].errors) {
      if (frm.controls['ag'].errors['required']) {
        this.ageErr = 'Please enter age'
      } else {
        this.ageErr =
          'Age cannot exceed ' + frm.controls['ag'].errors['max'].max + ' years'
      }
    } else {
      this.ageErr = ''
    }

    if (!frm?.controls['academic'].value.class) {
      this.classErr = 'Please enter class';
    } else {
      this.classErr = ''
    }
    if (!frm?.controls['academic'].value.sec) {
      this.secErr = 'Please enter section';
    } else {
      this.secErr = ''
    }
  }
}
