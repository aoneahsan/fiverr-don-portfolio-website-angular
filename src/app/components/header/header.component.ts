import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import { SystemService } from 'src/app/services/system.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  showCookieNotification: boolean = false;

  constructor(
    private cookieService: CookieService,
    private _systemService: SystemService
  ) {}

  ngOnInit(): void {
    const data = this.cookieService.get(
      this._systemService.getCookieNotificationKey()
    );

    this.showCookieNotification = !data;
  }

  closeCookieNotificationAlert() {
    this.cookieService.put(
      this._systemService.getCookieNotificationKey(),
      'user closed notification.'
    );
    this.showCookieNotification = false;
  }
}
