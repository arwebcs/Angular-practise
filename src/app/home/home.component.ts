import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  constructor(private route: Router, private activatedRoute: ActivatedRoute) {}
  urlSubs!: Subscription;
  name: string = '';
  age: number = 0;
  ngOnInit(): void {
    this.urlSubs = this.activatedRoute.queryParams.subscribe(
      (params: Params) => {
        this.name = params['name'];
        this.age = params['age'];
      }
    );
  }

  goPage(url: any) {
    this.route.navigate([url]);
  }
  ngOnDestroy() {
    this.urlSubs.unsubscribe();
  }
}
