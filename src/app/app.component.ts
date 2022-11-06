import { Component } from '@angular/core';
import { CountriesService } from './services/countries.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private countryService: CountriesService) { }

  countries: [] = [];
  singleCountry: any;
  ngOnInit(): void {
    this.countryService.getAllCountries()
      .subscribe((res) => {
        this.countries = res
      });
  }

  getCountries(event: Event) {
    const cca2: string = (<HTMLInputElement>event.target).value;
    this.countryService.getSelectedCountry(cca2)
      .subscribe((res) => {
        [this.singleCountry] = res;
        console.log(this.singleCountry.area)
      });

  }
}
