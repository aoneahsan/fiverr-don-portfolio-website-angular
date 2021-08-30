import { Component, OnInit } from '@angular/core';
const AOS = require('aos');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'don-portfolio-website';

  ngOnInit() {
    AOS.init();
  }
}
