import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }
  runPytest () {
    return this.http.get('http://localhost:3000/pytest/run');
  }

  getReport() {
    return this.http.get('http://localhost:3000/pytest/report');
  }
}
