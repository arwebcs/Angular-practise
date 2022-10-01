import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-td-forms',
  templateUrl: './td-forms.component.html',
  styleUrls: ['./td-forms.component.css'],
})
export class TdFormsComponent implements OnInit {
  constructor() {}
  
  nameErr: string = '';
  emailErr: string = '';
  ageErr: string = '';

  ngOnInit(): void {}

  onSubmit(frm: NgForm) {
    console.log(frm);
    if (frm.controls['nm'].errors) {
      if(frm.controls['nm'].errors['required']){
        this.nameErr = 'Please enter name';
      }else{
        this.nameErr = 'Please enter at least '+frm.controls['nm'].errors['minlength'].requiredLength
        +' characters';
      }
    }else{
      this.nameErr='';
    }
    if (frm.controls['em'].errors) {
      if(frm.controls['em'].errors['required']){
        this.emailErr = 'Please enter email';
      }
    }else{
      this.emailErr='';
    }
    if (frm.controls['ag'].errors) {
      if(frm.controls['ag'].errors['required']){
        this.ageErr = 'Please enter age';
      }else{
        this.ageErr = 'Age cannot exceed '+frm.controls['ag'].errors['max'].max+' years';
      }
    }else{
      this.ageErr='';
    }
  }
}
