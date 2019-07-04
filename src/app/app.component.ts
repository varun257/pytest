import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private _appService: AppService) {}

  selectedValue = 'pytest';
  loading = false;

  runTest = () => {
    this.loading = true;
    return this._appService
    .runPytest()
    .subscribe(data => {
      this.loading = false
    });
  }
}