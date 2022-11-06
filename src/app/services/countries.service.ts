import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private http: HttpClient) { }
  COUNTRIES_API: string = "https://restcountries.com/v3.1/";

  getAllCountries(): Observable<any> {
    return this.http.get(this.COUNTRIES_API + "all");
  }
  getSelectedCountry(countryCCA: string): Observable<any> {
    return this.http.get(this.COUNTRIES_API + "alpha/" + countryCCA);
  }
}
