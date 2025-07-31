import { Component, OnInit } from '@angular/core';
import packageJson from '../../package.json';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: false
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log('version', packageJson.version);
  }
}
