import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { GlobalVariable } from 'src/app/authorization/global/variable';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  constructor(private http: HttpClient) { }

  STUDENT_API: string = "api/users";



  addStudent(data: any): Observable<any> {
    return this.http.post(GlobalVariable.BASE_API_URL + this.STUDENT_API, data).pipe(take(1));
  }
  updateStudent(studentId: number, data: any): Observable<any> {
    return this.http.post(GlobalVariable.BASE_API_URL + this.STUDENT_API + "/" + studentId, data).pipe(take(1));
  }
  listStudent(): Observable<any> {

    // const header = new HttpHeaders({
    //   'content-type': 'application/json',
    //   'apikeys': '111111'
    // });
    // const param = new HttpParams()
    //   .set("page", "10");
    // return this.http.get(GlobalVariable.BASE_API_URL + this.STUDENT_API, { params: param, headers: header }).pipe(take(1));

    return this.http.get(GlobalVariable.BASE_API_URL + this.STUDENT_API).pipe(take(1));
  }
  listStudentById(studentId: number): Observable<any> {
    return this.http.get(GlobalVariable.BASE_API_URL + this.STUDENT_API + "/" + studentId).pipe(take(1));
  }
  deleteStudent(studentId: number): Observable<any> {
    return this.http.delete(GlobalVariable.BASE_API_URL + this.STUDENT_API + "/" + studentId).pipe(take(1));
  }
}
