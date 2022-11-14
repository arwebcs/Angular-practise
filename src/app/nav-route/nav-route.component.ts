import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nav-route',
  templateUrl: './nav-route.component.html',
  styleUrls: ['./nav-route.component.css']
})
export class NavRouteComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }
  navID: number = 0;
  name: string = "";
  age: number = 0;
  urlSubscribe!: Subscription;

  ngOnInit(): void {
    //Using snapshot
    //this.navID = this.activatedRoute.snapshot.params['navid'];
    //Using observable
    this.urlSubscribe = this.activatedRoute.params.subscribe((res) => {
      this.navID = res['navid'];
    });
  }
  query() {
    this.urlSubscribe = this.activatedRoute.queryParams.subscribe(
      (params: Params) => {
        this.name = params['name'];
        this.age = params['age'];
      }
    );
  }
  goPage(url: any, params: string = "") {
    this.router.navigate([url, params]);
  }
  ngOnDestroy(): void {
    this.urlSubscribe.unsubscribe();
  }

}
