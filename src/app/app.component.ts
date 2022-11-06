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
  bsingleCountry: any;
  isCountries: boolean = false;
  isBorderCountries: boolean = false;
  borderCountries: {
    flagURL: string,
    countryName: string,
    capital: string,
    population: string,
    timezones: string,
    area: string,
    languages: any
  }[] = [];
  flagURL: string = "";
  cca2: string = "";
  countryName: string = "";
  population: string = "";
  capital: string = "";
  timezones: string = "";
  area: string = "";
  languages: any = "";

  ngOnInit(): void {
    this.countryService.getAllCountries()
      .subscribe((res) => {
        this.countries = res
      });
  }

  getCountryDetails(countryCode: string) {
    if (countryCode == "" || countryCode == null) {
      this.isCountries = false;
      this.isBorderCountries = false;
      this.flagURL = "";
      this.countryName = "";
      this.population = "";
      this.capital = "";
      this.timezones = "";
      this.area = "";
      this.languages = "";
    } else {
      this.isCountries = true;
      this.countryService.getSelectedCountry(countryCode)
        .subscribe((res) => {
          this.singleCountry = "";
          [this.singleCountry] = res;
          this.flagURL = this.singleCountry.flags.png;
          this.countryName = this.singleCountry.name.common;
          this.population = this.singleCountry.population;
          this.capital = this.singleCountry.capital;
          this.timezones = this.singleCountry.timezones;
          this.area = this.singleCountry.area;
          this.languages = [Object.values(this.singleCountry.languages)];
        });
    }
  }

  getCountries(event: Event) {
    this.cca2 = (<HTMLInputElement>event.target).value;
    this.getCountryDetails(this.cca2);
  }

  getBorderCountries(event: Event) {
    this.borderCountries = [];
    this.bsingleCountry = null;
    this.cca2 = (<HTMLInputElement>event.target).value;
    if (this.cca2 == "" || this.cca2 == null) {
      this.isBorderCountries = false;
    } else {
      this.countryService.getSelectedCountry(this.cca2)
        .subscribe((res) => {
          [this.bsingleCountry] = res;
          if (this.bsingleCountry.borders.length == 0) {
            this.isBorderCountries = false;
          } else {
            this.isBorderCountries = true;
            for (let border of this.bsingleCountry.borders) {
              this.countryService.getSelectedCountry(border)
                .subscribe((res) => {
                  this.singleCountry = "";
                  [this.singleCountry] = res;
                  this.borderCountries.push({
                    flagURL: this.singleCountry.flags.png,
                    countryName: this.singleCountry.name.common,
                    capital: this.singleCountry.capital,
                    population: this.singleCountry.population,
                    timezones: this.singleCountry.timezones,
                    area: this.singleCountry.area,
                    languages: [Object.values(this.singleCountry.languages)]
                  });
                });
            }
          }
        });
    }
  }
}
