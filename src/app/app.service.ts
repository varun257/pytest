import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }
  url = 'http://localhost:3000/pytest/run';
  runPytest () {
    return this.http.get(this.url);
  }
}
