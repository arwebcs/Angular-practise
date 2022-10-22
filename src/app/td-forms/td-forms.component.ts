import { Component, OnInit, ViewChild } from '@angular/core'
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-td-forms',
  templateUrl: './td-forms.component.html',
  styleUrls: ['./td-forms.component.css'],
})
export class TdFormsComponent implements OnInit {
  @ViewChild('frm') myForm: NgForm | undefined
  constructor() {}

  nameErr: string = ''
  emailErr: string = ''
  ageErr: string = ''
  classErr: string = ''
  secErr: string = ''

  ngOnInit(): void {}
  onPopulate() {
    this.myForm?.form.patchValue({
      nm: 'Arghya',
      ag: 132,
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
  onSubmit() {
    console.log(this.myForm)
  }
  // onSubmit(frm: NgForm) {
  //   console.log(frm)
  //   if (frm.controls['nm'].errors) {
  //     if (frm.controls['nm'].errors['required']) {
  //       this.nameErr = 'Please enter name'
  //     } else {
  //       this.nameErr =
  //         'Please enter at least ' +
  //         frm.controls['nm'].errors['minlength'].requiredLength +
  //         ' characters'
  //     }
  //   } else {
  //     this.nameErr = ''
  //   }
  //   if (frm.controls['em'].errors) {
  //     if (frm.controls['em'].errors['required']) {
  //       this.emailErr = 'Please enter email'
  //     }
  //   } else {
  //     this.emailErr = ''
  //   }
  //   if (frm.controls['ag'].errors) {
  //     if (frm.controls['ag'].errors['required']) {
  //       this.ageErr = 'Please enter age'
  //     } else {
  //       this.ageErr =
  //         'Age cannot exceed ' + frm.controls['ag'].errors['max'].max + ' years'
  //     }
  //   } else {
  //     this.ageErr = ''
  //   }

  // if (frm.controls['academic'].controls['class'].errors) {
  //     if (frm.controls['academic'].controls['class'].errors['required']) {
  //       this.classErr = 'Please enter class'
  //     }
  //   } else {
  //     this.classErr = ''
  //   }
  // }

  // if (frm.controls['academic'].controls['sec'].errors) {
  //     if (frm.controls['academic'].controls['sec'].errors['required']) {
  //       this.secErr = 'Please enter section'
  //     }
  //   } else {
  //     this.secErr = ''
  //   }
  // }
}
