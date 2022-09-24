import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit, OnDestroy {
  employeeID: number = 0;
  urlSubscribe!: Subscription;
  constructor(
    private router: Router,
    private activatedRouteSS: ActivatedRoute,
    private activatedRouteObs: ActivatedRoute
  ) {}

  ngOnInit(): void {
    //Using snapshot
    //this.employeeID = this.activatedRouteSS.snapshot.params['employeeid'];
    //Using observable
    this.urlSubscribe = this.activatedRouteObs.params.subscribe((res) => {
      this.employeeID = res['employeeid'];
    });
  }
  generateEmployeeID() {
    this.router.navigate(['employee/1']);
  }
  nextID() {
    let urlId = +this.employeeID + 1;
    this.router.navigate(['employee', urlId]);
  }
  ngOnDestroy(): void {
    this.urlSubscribe.unsubscribe();
  }
}
