import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Languages } from './languages';

@Injectable({
  providedIn: 'root'
})
export class HomepageService {

  constructor(private http: HttpClient) {}

  getLanguages(){
    return this.http.get<any>('assets/languages.json')
        .toPromise()
        .then(res => <Languages[]>res.data)
        .then(data => { return data; });
  }

}
